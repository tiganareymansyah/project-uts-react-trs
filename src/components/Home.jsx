import { BsApple } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
      <header>
        <header className="header-nav">
          <Link className="div-nav" to={"/"}>
            <BsApple className="logo-apple" />
            <h1>Apple.com</h1>
          </Link>
          <NavLink
            to={"/"}
            className={(props) => props.isActive && "active"}
          >
            Beranda
          </NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
          <Link>
            <button className="button-logout">
              <FiLogOut className="logo-logout" /> Logout
            </button>
          </Link>
        </header>
      </header>
    </>
  );
}
