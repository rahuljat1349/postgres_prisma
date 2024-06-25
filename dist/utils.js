"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClient = getClient;
const pg_1 = require("pg");
async function getClient() {
    const client = new pg_1.Client("postgres://postgres:3366@127.0.0.1:5432/todo");
    await client.connect();
    console.log("Connected to Database..");
    return client;
}
