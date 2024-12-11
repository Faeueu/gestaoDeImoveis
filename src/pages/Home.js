import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import busca from "../assets/images/seach-white.png";

const Home = () => {
  const navigate = useNavigate();

  // Estado para armazenar a lista de imóveis
  const [properties, setProperties] = useState([
    {
      id: 1,
      tipo: "Residencial",
      comodos: 2,
      area: "200 m²",
      endereco: "Cajazeiras - Paraíba - Brazil",
      isVenda: false,
    },
    {
      id: 2,
      tipo: "Comercial",
      comodos: 1,
      area: "200 m²",
      endereco: "Sousa - Paraíba - Brazil",
      isVenda: true,
    },
  ]);

  // Funções para redirecionar à página de detalhes
  const handleDetalhesVenda = () => {
    navigate("/detalhes-imovel");
  };

  const handleDetalhesAluguel = () => {
    navigate("/detalhes-imovel"); // Ajuste para uma rota específica se necessário
  };

  // Função para excluir um imóvel
  const handleDelete = (id) => {
    const updatedProperties = properties.filter((property) => property.id !== id);
    setProperties(updatedProperties);
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
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <div className="property-info">
              <p><strong>Tipo:</strong> {property.tipo}</p>
              <p><strong>Cômodos:</strong> {property.comodos}</p>
              <p><strong>Área:</strong> {property.area}</p>
              <p><strong>Endereço:</strong> {property.endereco}</p>
            </div>
            <div className="property-actions">
              {property.isVenda ? (
                <button onClick={handleDetalhesVenda} className="butn btn-sale">À VENDA</button>
              ) : (
                <button onClick={handleDetalhesAluguel} className="butn btn-rent">À ALUGAR</button>
              )}
              <button onClick={() => handleDelete(property.id)} className="butn btn-delete">EXCLUIR</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;