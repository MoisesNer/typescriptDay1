import axios from 'axios'

// this is the way to use axios
const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {

    const todo = response.data as Todo

    const id = todo.id
    const title = todo.title
    const completed = todo.completed

    logTodo(id, title, completed)
})

// optional paramers are defined with a ? and they have to be at the end
const logTodo = (id:number, title:string, completed:boolean, favMovie:string = 'Back to the future', userID?:string) => {

    console.log(`
        The TODO with ID: ${id}
        Has a the title of: ${title}
        Is it finished? ${completed}
    `)
}