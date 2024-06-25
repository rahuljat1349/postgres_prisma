"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
async function updateTodo(todoId) {
    const client = await (0, utils_1.getClient)();
    const updateTodoText = `UPDATE todos SET done = $1 WHERE id = $2`;
    await client.query(updateTodoText, [false, todoId]);
    console.log(`Todo with ID ${todoId} updated to not done.`);
}
const todoIdToUpdate = 1;
updateTodo(todoIdToUpdate);
