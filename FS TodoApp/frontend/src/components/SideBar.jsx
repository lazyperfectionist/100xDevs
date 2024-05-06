import { useContext, useEffect, useState } from "react";
import { FaListCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TodoItems } from "../store/todo-items-store";

function SideBar() {
    const { displayName, loggedIn } = useContext(TodoItems);
    const [active, setActive] = useState('Home');
    function changeActive(text) {
        if (loggedIn) {
            setActive(text);
        }
    }
    return (
        <>

            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{ width: "280px" }}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                    <span className="fs-4"><FaListCheck /> Todo App</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to="/" className={`nav-link ${active === "Home" ? 'active' : "text-white"}`} aria-current="page" onClick={() => { changeActive("Home") }}>
                            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/addtodo" className={`nav-link ${active === "Add Todos" ? 'active' : "text-white"}`} onClick={() => { changeActive("Add Todos") }}>
                            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                            Add Todos
                        </Link>
                    </li>
                    <li>
                        <Link to="/todoitems" className={`nav-link ${active === "Display Todos" ? 'active' : "text-white"}`} onClick={() => { changeActive("Display Todos") }}>
                            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
                            Display Todos
                        </Link>
                    </li>

                </ul>
                <hr />
                <div className="dropdown">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong>{loggedIn ? displayName : "No User"}</strong>
                    </a>
                </div>
            </div>
        </>
    )
}

export default SideBar;