import { useContext, useRef } from 'react';
import { TodoItems } from '../store/todo-items-store';


function AddTodo() {
    const { onAddTodo } = useContext(TodoItems);
    const titleElement = useRef('');
    const bodyElement = useRef('');


    function handleAddTodo(event) {
        event.preventDefault();
        const title = titleElement.current.value;
        const description = bodyElement.current.value;
        onAddTodo(event, title, description)
    }

    return (
        <>
            <div className="container mt-5">
                <h1>Add Todo</h1>
                <form id="todo-form" className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="title" className="form-label">Title:</label>
                        <input type="text" id="title" name="title" className="form-control" required ref={titleElement} />
                    </div>
                    <br />
                    <div className="col-md-6">
                        <label htmlFor="description" className="form-label">Description:</label>
                        <textarea id="description" name="description" className="form-control" rows="4" required ref={bodyElement}></textarea>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" onClick={(event) => handleAddTodo(event)}>Add Todo</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddTodo;