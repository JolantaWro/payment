// import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
// export async function GET(request: Request) {
//   try {
//     const result =
//       await sql`CREATE TABLE IF NOT EXISTS Pets ( Name varchar(255), Owner varchar(255) );`;
//     return NextResponse.json({ result }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }

import { db } from '@vercel/postgres';

// export default async function handler(request:  Request, response: Response) {
//     const client = await db.connect();

//     try {
//         await client.sql`CREATE TABLE IF NOT EXISTS Pets ( Name varchar(255), Owner varchar(255) );`
//         const names = ["Kama", "Peny"];
//         await client.sql`INSERT INTO Pets (Name, Owner) VALUES (${names[0]}, ${names[1]});`
//     } catch (err) {
//         return NextResponse.json({ err }, { status: 500 });
//     }

//     const pets = await client.sql`SELECT * FROM Pets;`
//     NextResponse.json({ pets }, { status: 200 });
// }
 
