import { getClient } from "./utils"


async function createEnteries() {
    const client = await getClient()

    const insertUserText = `INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id`;
    const userValues = ['rahuldudi1349@gmail.com', 'hashed_password'];

    let response = await client.query(insertUserText, userValues)


    const insertTodoText = `INSERT INTO todos (title, description, user_id, done) VALUES ($1, $2, $3, $4) RETURNING id`
    const todoValues = ['Buy Groceries', 'Milk, Bread, and Eggs.',  response.rows[0].id, false]

    await client.query(insertTodoText, todoValues)
    


    console.log("Enteries Created");
    
};

createEnteries()