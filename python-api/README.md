# Portfolio Chat API (Python)

Chat backend for the portfolio bot. All chat logic (context, fallback, optional OpenAI) runs in Python.

## Run locally

```bash
cd python-api
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Then in the main project set `NEXT_PUBLIC_CHAT_API_URL=http://localhost:8000` in `.env.local` and restart the Next.js dev server. The floating chat will use this API.

## Endpoints

- `POST /chat` — Body: `{ "message": "..." }`. Returns `{ "reply": "..." }`.
- `GET /health` — Returns `{ "status": "ok" }`.

## Env (optional)

- `PORTFOLIO_CONTEXT_URL` — **Recommended.** Base URL of the portfolio site (e.g. `http://localhost:3000` or `https://murtazanaiyar.com`). When set, the Python API fetches the latest context from `GET /api/portfolio-context` (with a 60s cache). That way you only update content in one place: `src/lib/portfolio-context.ts` in the main project.
- `OPENAI_API_KEY` — If set, answers use GPT-4o-mini with the portfolio as context; otherwise a keyword-based fallback is used.

## Updating what the chat knows

**Single source of truth:** Edit **`src/lib/portfolio-context.ts`** in the main project (not in `python-api/`). The Next.js chat uses it directly. If the Python API is running with `PORTFOLIO_CONTEXT_URL` pointing at your site, it will fetch this context automatically (cached 60s). No need to edit any Python files for content updates.
