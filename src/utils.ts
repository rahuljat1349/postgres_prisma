import { Client } from "pg";


export async function getClient() {

    const client = new Client("postgres://wzsxsnxg:LHZ9Cv4QoZ1zctxapk0q2ch672-o9UQe@trumpet.db.elephantsql.com/wzsxsnxg")
    await client.connect()
    console.log("Connected to Database..");
    
    return client;
    
}