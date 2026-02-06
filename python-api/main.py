"""
FastAPI chat API for the portfolio bot. Run with: uvicorn main:app --reload --port 8000
"""

import os

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from chat import get_reply

app = FastAPI(title="Portfolio Chat API")

# Allow frontend origin; set CORS_ORIGINS env for production (e.g. https://murtazanaiyar.com)
_origins = os.environ.get("CORS_ORIGINS", "http://localhost:3000,http://127.0.0.1:3000").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[o.strip() for o in _origins if o.strip()],
    allow_credentials=True,
    allow_methods=["POST", "GET", "OPTIONS"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    reply: str


@app.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):
    message = (request.message or "").strip()
    if not message:
        raise HTTPException(status_code=400, detail="Message is required")
    reply = get_reply(message)
    return ChatResponse(reply=reply)


@app.get("/health")
def health():
    return {"status": "ok"}
