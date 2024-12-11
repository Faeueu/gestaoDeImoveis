import React, { useState } from "react";
import "../styles/CadastroProprietario.css";

const CadastroProprietario = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [tipoImovel, setTipoImovel] = useState("");
  const [descricaoImovel, setDescricaoImovel] = useState("");
  const [pais, setPais] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const novoProprietario = {
      nome,
      telefone,
      tipoImovel,
      descricaoImovel,
      localizacao: { pais, estado, cidade }
    };

    try {
      const response = await fetch("http://localhost:5000/proprietarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoProprietario),
      });

      if (response.ok) {
        alert("Proprietário cadastrado com sucesso!");
      } else {
        alert("Erro ao cadastrar proprietário!");
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  };

  return (
    <div className="cadastro-proprietario">
      <h1>Cadastro de Proprietário</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <div>
          <input
            type="text"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Tipo de Imóvel"
            value={tipoImovel}
            onChange={(e) => setTipoImovel(e.target.value)}
          />
        </div>
        <textarea
          placeholder="Descrição dos Imóveis"
          value={descricaoImovel}
          onChange={(e) => setDescricaoImovel(e.target.value)}
        />
        <h3>Localização dos Imóveis</h3>
        <div>
          <input
            type="text"
            placeholder="País"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
          />
          <input
            type="text"
            placeholder="Estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          />
          <input
            type="text"
            placeholder="Cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroProprietario;
