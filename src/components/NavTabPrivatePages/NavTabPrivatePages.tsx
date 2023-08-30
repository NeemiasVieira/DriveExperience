import react from "react";
import { NavTabPrivatePagesStyle } from "./NavTabPrivatePagesStyle";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const NavTabPrivatePages = () => {

    const navigate = useNavigate();

  return (
    <NavTabPrivatePagesStyle>
      <nav>
        <ul>
          <div className="navDiv">
            <li>
              <Link to="/myreserves">My reserves</Link>
            </li>
            <li>
              <Link to="/myreserves">Create Reserve</Link>
            </li>
          </div>
          <li className="loginButton">
            <button
              onClick={(e) => {
                e.preventDefault();
                sessionStorage.removeItem("token");
                navigate("/");
              }}
              className="loginButton"
            >
              Deslogar
            </button>
          </li>
        </ul>
      </nav>
    </NavTabPrivatePagesStyle>
  );
};
