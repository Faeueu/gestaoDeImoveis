import React, { useState } from "react";
import "../styles/CadastroCorretor.css";

const CadastroCorretor = () => {


  const [formData, setFormData] = useState({
    nome: "",
    creci: "",
    telefone: "",
    pais: "",
    estado: "",
    cidade: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/corretores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Corretor cadastrado com sucesso!");
        setFormData({
          nome: "",
          creci: "",
          telefone: "",
          pais: "",
          estado: "",
          cidade: "",
        });
      } 
    } catch (error) {
      alert("Erro na comunicação com o servidor.");
    }
  };

  return (
    <div className="container-corretor">
      <h1>Cadastro de Corretor</h1>
      <form onSubmit={handleSubmit}>
      <section> 
      <h3>Dados do Corretor</h3>
        <div className="form-row">
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="creci"
            placeholder="CRECI"
            value={formData.creci}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="telefone"
            placeholder="Telefone"
            value={formData.telefone}
            onChange={handleInputChange}
            required
          />
        </div>
        </section> 

        <div className="form-row">
  
          <input
            type="text"
            name="pais"
            placeholder="País"
            value={formData.pais}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="estado"
            placeholder="Estado"
            value={formData.estado}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="cidade"
            placeholder="Cidade"
            value={formData.cidade}
            onChange={handleInputChange}
            required
          />
        </div>
        <button className="button" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CadastroCorretor;
