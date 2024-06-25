import { Client } from "pg";


export async function getClient() {

    const client = new Client("postgres://postgres:3366@127.0.0.1:5432/todo")
    await client.connect()
    console.log("Connected to Database..");
    
    return client;
    
}