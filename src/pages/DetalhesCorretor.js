import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/VisualizarCorretor.css";
import icone from "../assets/images/seach-white.png";

const VisualizarCorretores = () => {
  const navigate = useNavigate();
  const [corretores, setCorretores] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    const fetchCorretores = async () => {
      try {
        const response = await fetch("http://localhost:5000/corretores");
        const data = await response.json();
        setCorretores(data);
      } catch (error) {
        alert("Erro ao carregar dados dos corretores.");
      }
    };

    fetchCorretores();
  }, []);

  const handleBusca = (e) => {
    setBusca(e.target.value);
  };

  const corretoresFiltrados = corretores.filter((corretor) =>
    corretor.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="container-visualizacao">
      <header>
        <h1>Gerenciamento de Corretores</h1>
      </header>

      <div className="busca-container">
        <input
          type="text"
          placeholder="Buscar Corretores"
          value={busca}
          onChange={handleBusca}
        />
        <button>
          <img src={icone} alt="Buscar" />
        </button>
      </div>

      <div className="actions">
        <button
          className="button-secondary"
          onClick={() => navigate("/cadastrar-corretores")}
        >
          + Cadastrar Corretores
        </button>
      </div>

      <div className="corretores-lista">
        {corretoresFiltrados.length > 0 ? (
          corretoresFiltrados.map((corretor) => (
            <div className="corretor-card" key={corretor.id}>
              <div className="corretor-info">
                <p>
                  <strong>Nome:</strong> {corretor.nome}
                </p>
                <p>
                  <strong>Creci:</strong> {corretor.creci}
                </p>
                <p>
                  <strong>Telefone:</strong> {corretor.telefone}
                </p>
                <p>
                  <strong>Endereço:</strong> {corretor.pais}, {corretor.cidade},{" "}
                  {corretor.estado}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-data">Nenhum corretor encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default VisualizarCorretores;
