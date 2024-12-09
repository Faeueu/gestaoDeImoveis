import React from "react";
import { useNavigate } from "react-router-dom";
import { clientes } from "../db/ClientesData"; // Importar os dados
import "../styles/VisualizarClientes.css";

const VisualizarClientes = () => {
  const navigate = useNavigate();

  const handleCadastrarCliente = () => {
    navigate("/cadastro-cliente");
  };

  const handleClienteClick = (clienteId) => {
    navigate(`/cliente/${clienteId}`);
  };

  return (
    <div className="visualizar-clientes">
      <header className="header">
        <h1>Visualização de Clientes</h1>
      </header>
      <div className="clientes-lista">
        {clientes.map((cliente) => (
          <div
            key={cliente.id}
            className="cliente-card"
            onClick={() => handleClienteClick(cliente.id)}
          >
            <p>
              <strong>Nome</strong>: {cliente.nome}
            </p>
            <p>
              <strong>Data de Nascimento</strong>: {cliente.dataNascimento}
            </p>
          </div>
        ))}

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
