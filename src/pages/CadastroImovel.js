import React, { useState } from "react";
import "../styles/CadastroImovel.css";

const CadastroImovel = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleCadastrar = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000); // Esconde a mensagem após 3 segundos
  };

  return (
    <div className="cadastro-imovel">
      <h1>Cadastro de Imóvel</h1>
      <form>
        <h3>Dados do Imóvel</h3>
        <input type="text" placeholder="Tipo do Imóvel" />
        <input type="text" placeholder="Área do Imóvel" />
        <input type="number" placeholder="Quantidade de Cômodos" />
        <input type="text" placeholder="Imóvel à venda?" />
        <input type="text" placeholder="Imóvel alugado?" />
        <div>
          <input type="text" placeholder="País" />
          <input type="text" placeholder="Estado" />
          <input type="text" placeholder="Cidade" />
        </div>

        <h3>Proprietário</h3>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <input type="date" placeholder="Data de Nascimento" />
        <input type="text" placeholder="Contato" />
        <div>
          <input type="text" placeholder="País" />
          <input type="text" placeholder="Estado" />
          <input type="text" placeholder="Cidade" />
        </div>

        <h3>Corretor</h3>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <input type="date" placeholder="Data de Nascimento" />
        <input type="text" placeholder="Contato" />
        <div>
          <input type="text" placeholder="País" />
          <input type="text" placeholder="Estado" />
          <input type="text" placeholder="Cidade" />
        </div>

        <div className="buttonCadastro">
        <button type="button" onClick={handleCadastrar}>
          Cadastrar
        </button>
        </div>
      </form>

      {showMessage && (
        <div className="confirmation-message">
          Imóvel cadastrado com sucesso!
        </div>
      )}
    </div>
  );
};

export default CadastroImovel;
