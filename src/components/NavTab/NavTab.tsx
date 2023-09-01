import { NavTabStyle } from "./NavTabStyle";
import { Link } from "react-router-dom";

export const NavTab = () => {
  return (
    <NavTabStyle>
      <nav>
        <ul>
          <div className="navDiv">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cars">Cars</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </div>
          <li className="loginButton">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </NavTabStyle>
  );
};
