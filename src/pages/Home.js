import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import busca from "../assets/images/seach-white.png";

const Home = () => {
  const navigate = useNavigate();

  // Funções para redirecionar à página de detalhes
  const handleDetalhesVenda = () => {
    navigate("/detalhes-imovel");
  };

  const handleDetalhesAluguel = () => {
    navigate("/detalhes-imovel"); // Você pode ajustar para uma rota específica se for necessário
  };

  return (
    <div className="home">
      {/* Seção Hero */}
      <div className="hero">
        <h1>O seu sonho a um clique de distância!</h1>
        <div className="search-bar">
          <input type="text" placeholder="Cajazeiras, PB" />
          <button>
            <img src={busca} alt="Buscar" />
          </button>
        </div>
      </div>

      {/* Seção de Imóveis */}
      <div className="properties">
        <div className="property-card">
          <div className="property-info">
            <p><strong>Tipo:</strong> Residencial</p>
            <p><strong>Cômodos:</strong> 2</p>
            <p><strong>Área:</strong> 200 m²</p>
            <p><strong>Endereço:</strong> Cajazeiras - Paraíba - Brazil</p>
          </div>
          <div className="property-actions">
            <button onClick={handleDetalhesVenda} className="butn btn-sale">À VENDA</button>
            <button onClick={handleDetalhesAluguel} className="butn btn-rent">À ALUGAR</button>
          </div>
        </div>

        <div className="property-card">
          <div className="property-info">
            <p><strong>Tipo:</strong> Comercial</p>
            <p><strong>Cômodos:</strong> 1</p>
            <p><strong>Área:</strong> 200 m²</p>
            <p><strong>Endereço:</strong> Sousa - Paraíba - Brazil</p>
          </div>
          <div className="property-actions">
            <button onClick={handleDetalhesVenda} className="butn btn-sale">À VENDA</button>
            <button onClick={handleDetalhesAluguel} className="butn btn-rent">À ALUGAR</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
