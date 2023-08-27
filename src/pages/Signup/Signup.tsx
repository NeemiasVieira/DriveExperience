import React from "react"
import { SignupStyle } from "./SignupStyle"
import gla from "../../assets/imgs/mercades-gla.jpg"
import { Link } from "react-router-dom"

const Signup = () => {
    return(
        <>
        <SignupStyle>
            <section className="sectionForm">
                <form>
                    <h1>Signup</h1>
                    <div className="inputDiv">
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder="Type a username"/>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="">E-mail</label>
                        <input type="email" placeholder="Type a e-mail"/>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="">Full Name</label>
                        <input type="text" placeholder="Type your full name"/>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="">Phone Number</label>
                        <input type="tel" placeholder="Type your phone number"/>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="">Driver License Number</label>
                        <input type="text" placeholder="Type your driver license number"/>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder="Type a password"/>
                    </div>
                    <p>Already signup? <Link to="/login">Login Here</Link></p>
                    <button>Get Started</button>          
                </form>

            </section>
            <section className="sectionImg">
                <img src={gla} alt="" />

            </section>

        </SignupStyle>
        </>
    )
}

export default Signup;