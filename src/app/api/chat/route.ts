import { NextResponse } from "next/server";
import { PORTFOLIO_CONTEXT } from "@/lib/portfolio-context";

const SYSTEM_PROMPT = `You are a helpful assistant for Murtaza Naiyar's portfolio website. Answer questions ONLY based on the following context about Murtaza. Be concise and friendly. If the answer is not in the context, say you don't have that information and suggest they check the website or contact him directly. Do not make up details.`;

function fallbackAnswer(userMessage: string): string {
  const lower = userMessage.toLowerCase();
  const sections = PORTFOLIO_CONTEXT.split(/\n## |\n# /).filter(Boolean);
  const words = lower.replace(/[^\w\s]/g, "").split(/\s+/).filter((w) => w.length > 2);

  let bestScore = 0;
  let bestSection = "";

  for (const section of sections) {
    const sectionLower = section.toLowerCase();
    let score = 0;
    for (const word of words) {
      if (sectionLower.includes(word)) score++;
    }
    if (score > bestScore) {
      bestScore = score;
      bestSection = section;
    }
  }

  if (bestScore === 0) {
    return "I can only answer questions about Murtaza Naiyar based on this portfolio. Try asking about his experience, projects, skills, or how to contact him. For anything else, you can reach him at hello@murtazanaiyar.com.";
  }

  const lines = bestSection.split("\n").filter((l) => l.trim().length > 10);
  const relevant = lines.slice(0, 6).join(" ").replace(/\s+/g, " ").trim();
  const excerpt = relevant.length > 320 ? relevant.slice(0, 320) + "…" : relevant;
  return "Based on the portfolio: " + excerpt;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (apiKey) {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: `${SYSTEM_PROMPT}\n\n---\nContext:\n${PORTFOLIO_CONTEXT}` },
            { role: "user", content: message },
          ],
          max_tokens: 300,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error("OpenAI error:", err);
        return NextResponse.json(
          { reply: fallbackAnswer(message) },
          { status: 200 }
        );
      }

      const data = (await res.json()) as { choices?: { message?: { content?: string } }[] };
      const reply = data.choices?.[0]?.message?.content?.trim() ?? fallbackAnswer(message);
      return NextResponse.json({ reply });
    }

    const reply = fallbackAnswer(message);
    return NextResponse.json({ reply });
  } catch (e) {
    console.error("Chat API error:", e);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
