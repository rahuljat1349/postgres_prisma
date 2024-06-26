"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
async function deleteTodo(todoId) {
    const client = await (0, utils_1.getClient)();
    const deleteTodoText = `DELETE FROM todos WHERE id = $1`;
    await client.query(deleteTodoText, [todoId]);
    console.log(`Todo with ID ${todoId} has been deleted.`);
}
deleteTodo(1);
