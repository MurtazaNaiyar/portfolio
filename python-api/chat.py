"""
Chat logic: answer from portfolio context using OpenAI (if key set) or keyword fallback.
Context is loaded from the website (single source of truth) when PORTFOLIO_CONTEXT_URL is set.
"""

import os
import re
from openai import OpenAI

from context_loader import get_portfolio_context

SYSTEM_PROMPT = """You are a helpful assistant for Murtaza Naiyar's portfolio website. Answer questions ONLY based on the following context about Murtaza. Be concise and friendly. If the answer is not in the context, say you don't have that information and suggest they check the website or contact him directly. Do not make up details."""


def fallback_answer(user_message: str) -> str:
    """Return a relevant excerpt from the portfolio using simple keyword matching."""
    context = get_portfolio_context()
    lower = user_message.lower()
    # Split on ## or # headers
    sections = re.split(r"\n## |\n# ", context)
    sections = [s for s in sections if s.strip()]
    # Tokenize question (words longer than 2 chars)
    words = re.sub(r"[^\w\s]", "", lower).split()
    words = [w for w in words if len(w) > 2]

    best_score = 0
    best_section = ""

    for section in sections:
        section_lower = section.lower()
        score = sum(1 for w in words if w in section_lower)
        if score > best_score:
            best_score = score
            best_section = section

    if best_score == 0:
        return (
            "I can only answer questions about Murtaza Naiyar based on this portfolio. "
            "Try asking about his experience, projects, skills, or how to contact him. "
            "For anything else, you can reach him at hello@murtazanaiyar.com."
        )

    lines = [l for l in best_section.split("\n") if len(l.strip()) > 10]
    relevant = " ".join(lines[:6])
    relevant = re.sub(r"\s+", " ", relevant).strip()
    excerpt = relevant[:320] + "…" if len(relevant) > 320 else relevant
    return "Based on the portfolio: " + excerpt


def get_reply(message: str) -> str:
    """Get a reply for the user message. Uses OpenAI if API key is set, else fallback."""
    message = (message or "").strip()
    if not message:
        return ""

    api_key = os.environ.get("OPENAI_API_KEY")

    context = get_portfolio_context()
    if api_key:
        try:
            client = OpenAI(api_key=api_key)
            response = client.chat.completions.create(
                model="gpt-4o-mini",
                messages=[
                    {
                        "role": "system",
                        "content": f"{SYSTEM_PROMPT}\n\n---\nContext:\n{context}",
                    },
                    {"role": "user", "content": message},
                ],
                max_tokens=300,
            )
            reply = (
                response.choices[0].message.content.strip()
                if response.choices and response.choices[0].message
                else None
            )
            return reply or fallback_answer(message)
        except Exception:
            return fallback_answer(message)

    return fallback_answer(message)
