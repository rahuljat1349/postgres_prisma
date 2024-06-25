"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
async function getUsers() {
    const client = await (0, utils_1.getClient)();
    const selectUsersText = `SELECT * FROM users`;
    const userRes = await client.query(selectUsersText);
    console.log("Users:");
    for (let user of userRes.rows) {
        console.log(`ID: ${user.id}, EMAIL: ${user.email}`);
    }
}
async function getUserFromEmail(email) {
    const client = await (0, utils_1.getClient)();
    const selectUserText = `SELECT * FROM users WHERE email = $1`;
    const userRes = await client.query(selectUserText, [email]);
    console.log("Single User Detail:");
    for (let user of userRes.rows) {
        console.log(`ID: ${user.id}, EMAIL: ${user.email}`);
    }
}
async function getTodosForUser(userId) {
    const client = await (0, utils_1.getClient)();
    const selectTodoText = `SELECT * FROM todos WHERE user_id = $1`;
    const todoRes = await client.query(selectTodoText, [userId]);
    for (let todo of todoRes.rows) {
        console.log(`ID: ${todo.id}, TITLE: ${todo.title} DESCRIPTION: ${todo.description}, DONE: ${todo.done},`);
    }
}
getUsers();
getUserFromEmail("rahuldudi1349@gmail.com");
const todoIdToFetch = 1;
getTodosForUser(todoIdToFetch);
