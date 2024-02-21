import { useState } from "react"

export function Todos({todos}) {
    let globalId=1
    return <div>
        {todos.map(function(todo){
            return RenderTodoS(todo,globalId++)
        })}
    </div>
}

function RenderTodoS(props,id) {
    return <div> 
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <button id={id}>{props.completed == true?"Completed" : "Mark as Completed"}</button>
    </div>
}
// onClick={markAsDone({id})}
// function markAsDone(todoId){
    // const [completed,setCompleted] = useState(false)
    // setCompleted(true);
    // document.getElementById(todoId).innerHTML = "Done"
// }