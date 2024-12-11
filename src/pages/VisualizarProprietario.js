import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import "../styles/VisualizarClientes.css"; // Utilizando o mesmo CSS fornecido

const VisualizarProprietarios = () => {
  const [proprietarios, setProprietarios] = useState([]); // Todos os proprietários
  const [searchTerm, setSearchTerm] = useState(""); // Termo de pesquisa
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProprietarios = async () => {
      try {
        const response = await fetch("http://localhost:5000/proprietarios");
        const data = await response.json();
        setProprietarios(data);
      } catch (error) {
        console.error("Erro ao buscar proprietários:", error);
      }
    };

    fetchProprietarios();
  }, []);

  // Filtra os proprietários com base no nome
  const filteredProprietarios = proprietarios.filter((proprietario) =>
    proprietario.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCadastrarProprietario = () => {
    navigate("/cadastro-proprietario");
  };

  const handleProprietarioClick = (proprietarioId) => {
    navigate(`/proprietario/${proprietarioId}`);
  };

  const handleDeleteProprietario = async (proprietarioId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/proprietarios/${proprietarioId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setProprietarios((prevProprietarios) =>
          prevProprietarios.filter(
            (proprietario) => proprietario.id !== proprietarioId
          )
        );
        console.log("Proprietário deletado com sucesso.");
      } else {
        console.error("Erro ao deletar proprietário.");
      }
    } catch (error) {
      console.error("Erro ao deletar proprietário:", error);
    }
  };

  return (
    <div className="visualizar-clientes">
      <header className="header">
        <h1>Visualização de Proprietários</h1>
      </header>

      {/* Barra de Pesquisa */}
      <div className="search-bar-visu">
        <input
          type="text"
          placeholder="Pesquisar pelo nome do proprietário"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="clientes-lista">
        {filteredProprietarios.length > 0 ? (
          filteredProprietarios.map((proprietario) => (
            <div key={proprietario.id} className="cliente-card">
              <div
                className="cliente-info"
                onClick={() => handleProprietarioClick(proprietario.id)}
              >
                <p>
                  <strong>Nome</strong>: {proprietario.nome}
                </p>
                <p>
                  <strong>Tipo de Imóvel</strong>: {proprietario.tipoImovel}
                </p>
              </div>
              <button
                className="btn-delete"
                onClick={() => handleDeleteProprietario(proprietario.id)}
                title="Deletar Proprietário"
              >
                <FaTrash />
              </button>
            </div>
          ))
        ) : (
          <p>Nenhum proprietário encontrado</p>
        )}
        <div className="action">
          <button className="btn-primary" onClick={handleCadastrarProprietario}>
            Cadastrar Proprietário
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisualizarProprietarios;
