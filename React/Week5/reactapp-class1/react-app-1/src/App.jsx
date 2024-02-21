import { useState } from 'react'
// import './App.css'

function App() {
  // Defining the state
  const [todos, setTodos] = useState([
    {
      title:"Title1",
      description : "Description 1",
      completed : "Mark as Done"
    },
    {
      title:"Title 2",
      description : "Description 2",
      completed : "Mark as Done"
    },
    {
      title:"Title 2",
      description : "Description 2",
      completed : "Mark as Done"
    },
    {
      title:"Title 2",
      description : "Description 2",
      completed : "Mark as Done"
    }
  ])

  function addTodo(){
    setTodos([...todos,{
      title:"Title",
      description:"Description",
      completed : "Mark as Done"
    }])
  }
  // Component :: 
  function RenderTodoS(props){
    return <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button>{props.completed}</button>
    </div>
  }
  return (
    <div>
      <button onClick={addTodo}>Add toDo</button>
      {todos.map(function(todo){
      return RenderTodoS(todo)
    })}
      {/* <RenderTodoS title= {todos[0].title} description= {todos[0].description} completed= {todos[0].completed}></RenderTodoS> */}
    </div>
  )
}
export default App














// function App() {
//   const [count, setCount] = useState(0)
  
//   return (
//     <div>
//     <CustomButton count = {count} setCount= {setCount}></CustomButton>
//     <CustomButton count = {count+1} setCount= {setCount}></CustomButton>
//     <CustomButton count = {count-1} setCount= {setCount}></CustomButton>
//     <CustomButton count = {count*10} setCount= {setCount}></CustomButton>
//     </div>
//   )
// }
// function CustomButton(props){
//   function onclickHandler(){
//     props.setCount(props.count+1)
//   }
//   return <button onClick={onclickHandler}>
//       Counter {props.count} 
//     </button>

// }

// export default App
