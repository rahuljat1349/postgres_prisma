"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClient = getClient;
const pg_1 = require("pg");
async function getClient() {
    const client = new pg_1.Client("postgres://wzsxsnxg:LHZ9Cv4QoZ1zctxapk0q2ch672-o9UQe@trumpet.db.elephantsql.com/wzsxsnxg");
    await client.connect();
    console.log("Connected to Database..");
    return client;
}
