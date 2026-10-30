import { NextResponse } from "next/server";
import { stories } from "@/lib/stories";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: stories,
    meta: {
      total: stories.length,
      contentTypes: ["testimonial", "case-study", "video", "review"],
      source: "Sample seed data for development",
    },
  });
}
