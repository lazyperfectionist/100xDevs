import { useContext, useEffect } from "react";
import Todo from './Todo'
import { TodoItems as TodoContext } from "../store/todo-items-store";

function TodoItems() {
    const { todos, fetchTodos } = useContext(TodoContext);

    useEffect(() => { fetchTodos() }, [])
    return (
        <>
            <h1>Your Todo List : </h1>
            <div>
                {todos.map(todo => (
                    <Todo todo={todo} key={todo._id}></Todo>
                ))}
            </div>
        </>
    )
}

export default TodoItems;