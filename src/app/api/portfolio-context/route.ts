import { NextResponse } from "next/server";
import { PORTFOLIO_CONTEXT } from "@/lib/portfolio-context";

/**
 * GET /api/portfolio-context
 * Returns the portfolio content used by the chat bot.
 * Single source of truth: update src/lib/portfolio-context.ts and the chat stays in sync.
 */
export async function GET() {
  return NextResponse.json({ context: PORTFOLIO_CONTEXT });
}
