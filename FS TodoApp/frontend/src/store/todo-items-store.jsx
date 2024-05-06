import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const TodoItems = createContext({
    loggedIn: false,
    todos: [],
    displayName: "",
    handleLogin: () => { },
    handleSignup: () => { },
    setLoggedIn: () => { },
    onMarkAsDone: () => { },
    setTodos: () => { },
    onDelete: () => { },
    onAddTodo: () => { }
})


function TodoItemsProvider({ children }) {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);
    const [todos, setTodos] = useState([]);
    const [displayName, setDisplayName] = useState('');

    async function onAddTodo(event, title, description) {
        event.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login')
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/todos', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },

                body: JSON.stringify({
                    title: title,
                    description: description,
                })
            })
            const json = await response.json();
            alert(JSON.stringify(json.message))
            navigate('/todoItems')
        }
        catch (err) {
            console.log(err);
        }
    }

    async function fetchTodos() {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('You are not Logged in , please log in to continue !!')
            navigate('/login')
            return;
        }
        else {
            try {
                const response = await fetch('http://localhost:3000/todos', {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': token
                    }
                })
                const data = await response.json();
                setTodos(data.todos);
            }
            catch (err) {
                console.log(err);
            }
        }
    }

    async function onMarkAsDone(todo) {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`http://localhost:3000/todos/${todo._id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
            })
            const json = await response.json();
            setTodos(prevTodos => prevTodos.map(t => t._id === json._id ? json : t));

        } catch (err) {
            console.log(`Some error occured !! => message :  ${err}`);
        }
    }

    async function onDelete(todo) {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`http://localhost:3000/todos/${todo._id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
            })
            const json = await response.json();
            setTodos(prevTodos => prevTodos.filter(todo => todo._id !== json._id));

        } catch (err) {
            console.log(`Some error occured !! => message :  ${err}`);
        }
    }

    async function handleLogin(username, password) {

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            const json = await response.json();
            console.log(json.token);
            if (json.token) {
                localStorage.setItem('token', json.token);
                setLoggedIn(true);
                navigate('/todoItems')
                setDisplayName(username);
            }
            else {

                console.log(json);
                alert(`${json.message}`)
            }

        } catch (err) {
            console.log(`Some error occured !! => message :  ${err}`);
        }
    }

    async function handleSignup(username, password) {
        console.log('in signup');
        try {
            const response = await fetch('http://localhost:3000/signup', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            const json = await response.json();
            console.log(json);
            if (json) {
                console.log(json.message);
                alert(json.message)
                navigate('/login')
            }

        } catch (err) {
            console.log(`Some error occured !! => message :  ${err}`);
        }

    }

    return (
        <TodoItems.Provider value={{ handleLogin, handleSignup, loggedIn, setLoggedIn, onMarkAsDone, todos, setTodos, fetchTodos, onDelete, onAddTodo, displayName }}>
            {children}
        </TodoItems.Provider>
    )
}

export default TodoItemsProvider;