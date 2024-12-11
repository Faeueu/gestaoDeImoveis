import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import "../styles/VisualizarClientes.css";

const VisualizarClientes = () => {
  const [clientes, setClientes] = useState([]); // Todos os clientes
  const [searchTerm, setSearchTerm] = useState(""); // Termo de pesquisa
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await fetch("http://localhost:5000/clientes");
        const data = await response.json();
        setClientes(data);
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      }
    };

    fetchClientes();
  }, []);

  // Filtra os clientes com base no nome
  const filteredClientes = clientes.filter((cliente) =>
    cliente.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCadastrarCliente = () => {
    navigate("/cadastro-cliente");
  };

  const handleClienteClick = (clienteId) => {
    navigate(`/cliente/${clienteId}`);
  };

  const handleDeleteCliente = async (clienteId) => {
    try {
      const response = await fetch(`http://localhost:5000/clientes/${clienteId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setClientes((prevClientes) =>
          prevClientes.filter((cliente) => cliente.id !== clienteId)
        );
        console.log("Cliente deletado com sucesso.");
      } else {
        console.error("Erro ao deletar cliente.");
      }
    } catch (error) {
      console.error("Erro ao deletar cliente:", error);
    }
  };

  return (
    <div className="visualizar-clientes">
      <header className="header">
        <h1>Visualização de Clientes</h1>
      </header>

      {/* Barra de Pesquisa */}
      <div className="search-bar-visu">
        <input
          type="text"
          placeholder="Pesquisar pelo nome do cliente"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="clientes-lista">
        {filteredClientes.length > 0 ? (
          filteredClientes.map((cliente) => (
            <div key={cliente.id} className="cliente-card">
              <div
                className="cliente-info"
                onClick={() => handleClienteClick(cliente.id)}
              >
                <p>
                  <strong>Nome</strong>: {cliente.nome}
                </p>
                <p>
                  <strong>Data de Nascimento</strong>: {cliente.dataNascimento}
                </p>
              </div>
              <button
                className="btn-delete"
                onClick={() => handleDeleteCliente(cliente.id)}
                title="Deletar Cliente"
              >
                <FaTrash />
              </button>
            </div>
          ))
        ) : (
          <p>Nenhum cliente encontrado</p>
        )}
        <div className="action">
          <button className="btn-primary" onClick={handleCadastrarCliente}>
            Cadastrar Cliente
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisualizarClientes;
