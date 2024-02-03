export function Todos({todos}) {
    return <div>
        {todos.map(function(todo){
            return RenderTodoS(todo)
        })}
    </div>
}

function RenderTodoS(props) {
    return <div> 
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <button>{props.completed == true?"Completed" : "Mark as Completed"}</button>
    </div>
}