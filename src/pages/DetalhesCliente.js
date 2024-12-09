import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { clientes } from "../db/ClientesData"; // Importar os dados
import "../styles/VisualizarClientes.css";

const DetalhesCliente = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const cliente = clientes.find((cliente) => cliente.id === parseInt(id));

  if (!cliente) {
    return <p>Cliente não encontrado!</p>;
  }

  return (
    <div className="visualizar-clientes">
      <header className="header">
        <button className="back-button" onClick={() => navigate(-1)}>&larr;</button>
        <h1>Cliente</h1>
      </header>
      <div className="cliente-detalhes">
        <p><strong>Nome</strong>: {cliente.nome}</p>
        <p><strong>Email</strong>: {cliente.email}</p>
        <p><strong>Data de Nascimento</strong>: {cliente.dataNascimento}</p>
        <p><strong>Contato</strong>: {cliente.contato}</p>
        <p><strong>Endereço</strong>:</p>
        <p>País: {cliente.endereco.pais}</p>
        <p>Estado: {cliente.endereco.estado}</p>
        <p>Cidade: {cliente.endereco.cidade}</p>
      </div>
    </div>
  );
};

export default DetalhesCliente;
