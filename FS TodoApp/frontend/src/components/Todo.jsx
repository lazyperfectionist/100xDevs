import { useContext } from "react";
import { TodoItems } from "../store/todo-items-store";
import style from '../cssModules/Todo.module.css'


function Todo({ todo }) {
    const { onMarkAsDone, onDelete } = useContext(TodoItems);
    return (
        <>
            <div className="card mt-3">
                <div className="card-body">
                    <h5 className="card-title">{todo.title}</h5>
                    <p className="card-text">{todo.description}</p>
                    <button className={`btn btn-${todo.completed ? 'success' : 'danger'}`} onClick={() => onMarkAsDone(todo)}>{todo.completed ? 'Completed' : 'Not Completed'}</button>
                    <button className={`btn btn-danger ${style.delbtn}`} onClick={() => onDelete(todo)}>Delete Todo</button>
                </div>
            </div>

        </>
    )
}

export default Todo;