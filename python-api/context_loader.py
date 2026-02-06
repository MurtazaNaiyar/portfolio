"""
Load portfolio context from the website (single source of truth) or fallback to local constant.
"""

import json
import os
import time
import urllib.error
import urllib.request

from portfolio_context import PORTFOLIO_CONTEXT as FALLBACK_CONTEXT

# Cache: (context_string, timestamp)
_context_cache: tuple[str, float] | None = None
CACHE_SECONDS = 60


def get_portfolio_context() -> str:
    """
    Return portfolio context. If PORTFOLIO_CONTEXT_URL is set, fetch from that URL
    (with a short cache). Otherwise use the local fallback in portfolio_context.py.
    """
    global _context_cache

    url = os.environ.get("PORTFOLIO_CONTEXT_URL", "").strip()
    if not url:
        return FALLBACK_CONTEXT

    # Use cached if still valid
    now = time.time()
    if _context_cache is not None:
        cached_text, cached_at = _context_cache
        if now - cached_at < CACHE_SECONDS:
            return cached_text

    try:
        req = urllib.request.Request(
            f"{url.rstrip('/')}/api/portfolio-context",
            headers={"Accept": "application/json"},
        )
        with urllib.request.urlopen(req, timeout=5) as resp:
            data = resp.read().decode()
        parsed = json.loads(data)
        context = (parsed.get("context") or "").strip()
        if context:
            _context_cache = (context, now)
            return context
    except (urllib.error.URLError, OSError, ValueError, KeyError):
        pass

    # Fallback on any error
    return FALLBACK_CONTEXT
