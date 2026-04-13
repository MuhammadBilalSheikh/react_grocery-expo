import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";




const databaseURl = process.env.DATABASE_URL as string;

if (!databaseURl) {
    throw new Error("DATABASE_URL is not defined in environment variables / API route");
}

const sql = neon(databaseURl);
export const db = drizzle({ client: sql, schema });

