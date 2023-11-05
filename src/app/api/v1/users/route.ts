import { db, usersTable } from "@/lib/db";
import { User } from "@/lib/schema";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";
export const revalidate = 10;

export async function GET(
  request: NextRequest
): Promise<NextResponse<{ users: User[] }>> {
  const userRecords = await db.select().from(usersTable);
  console.log("Called API", userRecords);
  const users: User[] = userRecords.map((user) => {
    return {
      id: user.id,
      name: user.name,
      avatar: user.avatar,
      created_at: user.created_at,
    };
  });

  return NextResponse.json({ users });
}
