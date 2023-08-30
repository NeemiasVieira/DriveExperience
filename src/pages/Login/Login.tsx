import React from "react";
import { LoginStyle } from "./LoginStyle";
import { NavTab } from "../../components/NavTab/NavTab";
import { Footer } from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { executeLogin } from "../../assets/api/use-cases/clients/login";
import { Loading } from "../../components/Loading/Loading";

const Login = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState(Object);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/myreserves");
    }
  }, [errors, isAuthenticated]);

  const login = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await executeLogin(email, password, setIsAuthenticated, setErrors);
      setErrors(errors.response.data.message);
    } catch (error) {
    } finally {
      setIsLoading(false); // Desativar Loading
    }
  };

  return (
    <>
      <NavTab />
      {isLoading ? (
        <Loading />
      ) : (
        <LoginStyle>
          <section>
            <form>
              <h1>Login</h1>
              <label htmlFor="">E-mail or Username</label>
              <div className="inputDiv">
                <FontAwesomeIcon icon={faUser} />
                <input
                  type="text"
                  placeholder="Type your e-mail or username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <label htmlFor="">Password</label>
              <div className="inputDiv">
                <FontAwesomeIcon icon={faLock} />
                <input
                  type="password"
                  placeholder="Type your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <p>
                Don't have an account? <Link to="/signup">Register now</Link>
              </p>
              <p className="error">
                {errors.response &&
                errors.response.data &&
                errors.response.data.message
                  ? Array.isArray(errors.response.data.message)
                    ? errors.response.data.message[0]
                    : errors.response.data.message
                  : ""}
              </p>
              <button onClick={async (e) => await login(e)}>Login</button>
            </form>
          </section>
        </LoginStyle>
      )}
      <Footer />
    </>
  );
};

export default Login;
