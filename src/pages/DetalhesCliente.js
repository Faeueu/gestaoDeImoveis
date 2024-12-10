import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/DetalhesCliente.css";

const DetalhesCliente = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cliente, setCliente] = useState(null);

  useEffect(() => {
    const fetchCliente = async () => {
      try {
        const response = await fetch(`http://localhost:5000/clientes/${id}`);
        const data = await response.json();
        setCliente(data);
      } catch (error) {
        console.error("Erro ao buscar cliente:", error);
      }
    };

    fetchCliente();
  }, [id]);

  if (!cliente) {
    return <p>Cliente não encontrado!</p>;
  }

  return (
    <div className="visualizar-clientes">
      <header className="header">
        <button className="back-button" onClick={() => navigate(-1)}>
          &larr;
        </button>
        <h1>Cliente</h1>
      </header>
      <div className="cliente-detalhes">
        <div className="dados">
          <p><strong>Nome:</strong> {cliente.nome}</p>
          <p><strong>Email:</strong> {cliente.email}</p>
          <p><strong>Data de Nascimento:</strong> {cliente.dataNascimento}</p>
          <p><strong>Contato:</strong> {cliente.contato}</p>
          <h2>Endereço:</h2>
        </div>
        <div className="endereco">
          <p><strong>País:</strong> {cliente.endereco.pais}</p>
          <p><strong>Estado:</strong> {cliente.endereco.estado}</p>
          <p><strong>Cidade:</strong> {cliente.endereco.cidade}</p>
        </div>
      </div>
    </div>
  );
};

export default DetalhesCliente;
