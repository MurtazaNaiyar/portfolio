"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { SITE } from "@/lib/site-data";

type Message = { role: "user" | "assistant"; content: string };

const WELCOME = "Hi! I can answer questions about Murtaza Naiyar based on this portfolio—experience, projects, skills, or contact. What would you like to know?";

const CHAT_UNAVAILABLE_MSG = `Chat is temporarily unavailable. Please email me at ${SITE.email} and I'll get back to you.`;

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", content: WELCOME }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (open && listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [open, messages]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    setInput("");
    setMessages((m) => [...m, { role: "user", content: text }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      const reply =
        data.reply ??
        (res.ok ? "I couldn't get a response. Please try again or check the Contact page." : CHAT_UNAVAILABLE_MSG);
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: CHAT_UNAVAILABLE_MSG }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/30 transition-all duration-300 hover:bg-accent-hover hover:scale-110 hover:shadow-accent/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface motion-reduce:scale-100"
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
      >
        {open ? (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Expandable panel */}
      <div
        role="dialog"
        aria-label="Chat about Murtaza"
        className={`fixed bottom-24 right-6 z-[99] flex w-[calc(100vw-3rem)] max-w-[380px] flex-col overflow-hidden rounded-2xl border border-surface-border bg-surface-elevated shadow-xl transition-all duration-300 sm:right-6 ${
          open ? "h-[500px] opacity-100" : "pointer-events-none h-0 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between border-b border-surface-border px-4 py-3">
          <span className="font-semibold text-foreground">Ask about Murtaza</span>
          <button
            type="button"
            onClick={close}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-surface-border hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Close chat"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div
          ref={listRef}
          className="flex-1 overflow-y-auto p-4 space-y-4"
          tabIndex={-1}
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                  msg.role === "user"
                    ? "bg-accent text-white"
                    : "bg-surface border border-surface-border text-slate-300"
                }`}
              >
                <p className="whitespace-pre-wrap">{msg.content}</p>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="rounded-2xl border border-surface-border bg-surface px-4 py-2.5 text-sm text-slate-400">
                <span className="inline-flex gap-1">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-accent [animation-delay:0ms]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-accent [animation-delay:150ms]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-accent [animation-delay:300ms]" />
                </span>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="border-t border-surface-border p-3">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Murtaza..."
              className="flex-1 rounded-xl border border-surface-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-slate-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              disabled={loading}
              aria-label="Message"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="rounded-xl bg-accent px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
