import React from "react"
import { LoginStyle } from "./LoginStyle"
import { NavTab } from "../../components/NavTab/NavTab"
import { Footer } from "../../components/Footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
        <NavTab/>
        <LoginStyle>  
            <section>      
                
                <form>
                    <h1>Login</h1>
                    <label htmlFor="">E-mail or Username</label>
                    <div className="inputDiv">
                        <FontAwesomeIcon icon={faUser}/>
                        <input type="text" placeholder="Type your e-mail or username"/>
                    </div>
                    <label htmlFor="">Password</label>
                    <div className="inputDiv">
                    <FontAwesomeIcon icon={faLock}/>
                        <input type="password" placeholder="Type your password" />
                    </div>
                    <p>Don't have any account? <Link to="/signup">Register now</Link></p>
                    <button>Login</button>
                </form>
            </section>
        </LoginStyle>
        <Footer/>
        </>
    )
}

export default Login