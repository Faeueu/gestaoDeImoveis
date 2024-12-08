import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/images/LOGO.png";
import user from "../assets/images/user.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/comprar">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/comprar">Comprar</Link></li>
        <li><Link to="/vender">Vender</Link></li>
        <li><Link to="/alugar">Alugar</Link></li>
        <li><Link to="/corretores">Corretores</Link></li>
      </ul>
      <div className="user-icon">
        <Link to="/cadastro-cliente">
        <img src={user} alt="Usuário" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
