const execSync = require("node:child_process").execSync;
const dotenv = require("dotenv");

dotenv.config();
dotenv.config({ path: `.env.local`, override: true });

const dbUrl = process.env.DRIZZLE_DATABASE_URL;
const [dbUserInfo, dbHostInfo] = dbUrl
  ?.replace("postgres://", "")
  .split("@") as string[];
const [dbUser, dbPass] = dbUserInfo?.split(":") as string[];
const [dbHost, dbName] = dbHostInfo?.split("/") as string[];

const stdout = execSync(
  `psqldef -U ${dbUser} -W ${dbPass} -h ${dbHost} ${dbName} < db/schema.sql`
);
console.log(`stdout: ${stdout.toString()}`);
