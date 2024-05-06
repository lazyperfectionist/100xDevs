import styles from '../cssModules/Login.module.css'
import { useContext, useRef } from 'react';
import { TodoItems } from '../store/todo-items-store';


function Signup() {
    const { handleSignup } = useContext(TodoItems);

    const usernameElement = useRef('');
    const passwordElement = useRef('');

    function handleSubmit(event) {
        event.preventDefault();
        const username = usernameElement.current.value;
        const password = passwordElement.current.value;
        handleSignup(username, password);
    }

    return (
        <>
            <center>
                <h2>Signup</h2>

                <form className={styles.formLabel} onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" id="exampleInputuserName" aria-describedby="emailHelp" placeholder="Enter username" ref={usernameElement} />
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" ref={passwordElement} />
                    </div>

                    <br />
                    <button type="submit" className="btn btn-primary">SignUp</button>
                    <br />
                    <br />

                </form >
            </center>
        </>
    )
}


export default Signup;