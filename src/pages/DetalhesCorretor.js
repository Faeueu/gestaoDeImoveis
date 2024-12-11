import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import "../styles/VisualizarCorretor.css";

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

  const handleDelete = async (id) => {
    const confirmacao = window.confirm("Deseja realmente excluir este corretor?");
    if (!confirmacao) return;

    try {
      const response = await fetch(`http://localhost:5000/corretores/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Corretor excluído com sucesso!");
        setCorretores(corretores.filter((corretor) => corretor.id !== id));
      } else {
        alert("Erro ao excluir corretor.");
      }
    } catch (error) {
      alert("Erro ao excluir corretor.");
    }
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
              <button
                className="button-delete"
                onClick={() => handleDelete(corretor.id)}
              >
                <FaTrash />
              </button>
            </div>
          ))
        ) : (
          <p className="no-data">Nenhum corretor encontrado.</p>
        )}
      </div>

      <div className="actions">
        <button
          className="button-secondary"
          onClick={() => navigate("/cadastrar-corretores")}
        >
          Cadastrar Corretores
        </button>
      </div>
    </div>
  );
};

export default VisualizarCorretores;