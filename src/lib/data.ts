import { unstable_noStore } from "next/cache";

type User = {
  name: string;
  avatar: string;
};

export async function getUsers(): Promise<User[]> {
  unstable_noStore();

  const response = await fetch(`${process.env.API_BASE}/users`);
  return response.json().then((data) => data.users);
}
