import { getUsers } from "@/lib/data";
import Image from "next/image";

export const runtime = "edge";

export default async function Home() {
  const users = await getUsers();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-4xl font-bold text-center">
          Welcome to <a href="https://nextjs.org">Next.js!!</a>
        </h1>
        <div className="flex flex-wrap justify-center max-w-4xl mt-6 sm:w-full">
          {users.map((user) => {
            return (
              <div
                key={user.name}
                className="flex flex-col items-center p-4 m-4 text-center border rounded shadow-lg"
              >
                <div className="w-24 h-24">
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={96}
                    height={96}
                    className="rounded-full"
                  />
                </div>
                <div className="mt-4">
                  <h2 className="text-xl font-bold">{user.name}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
