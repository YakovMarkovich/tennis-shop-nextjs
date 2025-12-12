import { TOP10_RACKETS_TAG } from "@/services/constants";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  revalidateTag(TOP10_RACKETS_TAG, "max");

  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
    text: "success",
  });
}
