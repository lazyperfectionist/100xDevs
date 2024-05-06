import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import AddTodo from './components/AddTodo.jsx'
import TodoItems from './components/TodoItems.jsx'


const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    children: [
      { path: '/', element: <Login /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
      { path: '/addTodo', element: <AddTodo /> },
      { path: '/todoItems', element: <TodoItems /> },
    ]

  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)