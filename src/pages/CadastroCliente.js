import React, { useState } from "react";
import "../styles/CadastroCliente.css"; 

const CadastroCliente = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [contato, setContato] = useState("");
  const [pais, setPais] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const novoCliente = {
      nome,
      email,
      dataNascimento,
      contato,
      endereco: { pais, estado, cidade }
    };

    try {
      const response = await fetch("http://localhost:5000/clientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(novoCliente)
      });
      
      if (response.ok) {
        alert("Cliente cadastrado com sucesso!");
      } else {
        alert("Erro ao cadastrar cliente!");
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  };

  return (
    <div className="cadastro-cliente">
      <h1>Cadastro de Cliente</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <div>
          <input type="date" placeholder="Data de Nascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
          <input type="text" placeholder="Contato" value={contato} onChange={(e) => setContato(e.target.value)} />
        </div>
        <h3>Endereço</h3>
        <div>
          <input type="text" placeholder="País" value={pais} onChange={(e) => setPais(e.target.value)} />
          <input type="text" placeholder="Estado" value={estado} onChange={(e) => setEstado(e.target.value)} />
          <input type="text" placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroCliente;
