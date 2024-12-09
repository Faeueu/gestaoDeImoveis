// Navbar.js
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
        <li className="dropdown">
          Visualizar
          <ul className="dropdown-menu">
            <li><Link to="/visualizar-clientes">Clientes</Link></li>
            <li><Link to="/visualizar-proprietarios">Proprietários</Link></li>
            <li><Link to="/visualizar-corretores">Corretores</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          Cadastros
          <ul className="dropdown-menu">
            <li><Link to="/cadastro-cliente">Cliente</Link></li>
            <li><Link to="/cadastro-proprietario">Proprietário</Link></li>
            <li><Link to="/cadastro-corretor">Corretor</Link></li>
          </ul>
        </li>
      </ul>

      <div className="user-icon">
        <Link to="/visualizar-clientes">
          <img src={user} alt="Usuário" />
        </Link>
      </div>      
    </nav>
  );
};

export default Navbar;
