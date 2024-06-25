
import { getClient } from "./utils";

async function deleteTodo(todoId:number){
    const client = await getClient()

    const deleteTodoText = `DELETE FROM todos WHERE id = $1`;

    await client.query(deleteTodoText,[todoId])

    console.log(`Todo with ID ${todoId} has been deleted.`);
    
}

deleteTodo(1)