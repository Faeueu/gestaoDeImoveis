import React from "react";
import "../styles/CadastroCliente.css"; 

const CadastroCliente = () => {
  return (
    <div className="cadastro-cliente">
      <h1>Cadastro de Cliente</h1>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <div>
          <input type="date" placeholder="Data de Nascimento" />
          <input type="text" placeholder="Contato" />
        </div>
        <h3>Endereço</h3>
        <div>
          <input type="text" placeholder="País" />
          <input type="text" placeholder="Estado" />
          <input type="text" placeholder="Cidade" />
        </div>
        <button type="button" onClick={() => alert("Cliente cadastrado com sucesso!")}>
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CadastroCliente;
