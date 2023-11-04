import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const names = ["Alice", "Bob", "Carol", "Dave", "Eve", "Frank"];
  const name = names[Math.floor(Math.random() * names.length)];

  return new Response(
    JSON.stringify({
      users: [{ name, avatar: `https://picsum.photos/seed/${name}/200/200` }],
    })
  );
}
