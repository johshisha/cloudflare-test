import { unstable_noStore } from "next/cache";
import { User } from "./schema";

export async function getUsers(): Promise<User[]> {
  unstable_noStore();

  const response = await fetch(`${process.env.API_BASE}/users`);
  return response.json().then((data) => data.users);
}
