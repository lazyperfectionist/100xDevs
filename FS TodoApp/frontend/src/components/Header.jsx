import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TodoItems } from "../store/todo-items-store";



function Header() {
    const { loggedIn, setLoggedIn } = useContext(TodoItems);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is logged in when the component mounts
        const token = localStorage.getItem('token');
        if (token) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, [setLoggedIn]);


    function handleLogout() {
        localStorage.removeItem('token')
        setLoggedIn(false);
        navigate('/login');
    }
    return (
        <>
            <header className="p-3 bg-dark text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
                        </Link>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            {/* <li><Link to="/addTodo" className="nav-link px-2 text-white">Add Todo</Link></li> */}
                            {/* <li><Link to="/todoItems" className="nav-link px-2 text-white">Display Todos</Link></li> */}
                        </ul>


                        <div className="text-end">
                            {loggedIn ?
                                <button type="button" className="btn btn-outline-light me-2" onClick={() => handleLogout()}>Logout</button>
                                :
                                <div>
                                    <Link to='/login'><button type="button" className="btn btn-outline-light me-2">Login</button></Link>
                                    <Link to='/signup'><button type="button" className="btn btn-warning">Sign-up</button></Link>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}


export default Header;