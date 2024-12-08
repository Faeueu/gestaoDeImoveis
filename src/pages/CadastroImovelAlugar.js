import React, { useState } from "react";
import "../styles/CadastroImovel.css";

const CadastroImovelVenda = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleCadastrar = (event) => {
    event.preventDefault(); // Previne o reload da página
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000); // Esconde a mensagem após 3 segundos
  };

  return (
    <div className="container">
      <header className="headerCi">
        <h1>Cadastro do Imóvel para Aluguel</h1>
      </header>

      <div className="form-container">
        <form onSubmit={handleCadastrar}>
          <section>
            <h3>Dados do Imóvel</h3>
            <div className="form-group">
              <input type="text" placeholder="Tipo do Imóvel" required />
              <input type="text" placeholder="Área do Imóvel" required />
              <input type="number" placeholder="Quantidade de Cômodos" required />
            </div>
              <h3>Endereço</h3>
            <div className="form-group">
              <input type="text" placeholder="País" required />
              <input type="text" placeholder="Estado" required />
              <input type="text" placeholder="Cidade" required />
            </div>
          </section>

          <section>
            <h3>Proprietário</h3>
            <div className="form-group">
              <input type="text" placeholder="Nome" required />
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Contato" required />
            </div>
          </section>

          <section>
            <h3>Corretor</h3>
            <div className="form-group">
              <input type="text" placeholder="Nome" required />
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Contato" required />
            </div>
          </section>

          <div className="form-actions">
            <button type="submit" className="btn-submit">
              Cadastrar Imóvel
            </button>
          </div>
        </form>

        {showMessage && (
          <div className="confirmation-message">
            Imóvel cadastrado com sucesso!
          </div>
        )}
      </div>
    </div>
  );
};

export default CadastroImovelVenda;
