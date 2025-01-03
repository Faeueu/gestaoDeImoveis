import React, { useState} from "react";
import "../styles/DetalhesComprador.css";
import verifyIcon from "../assets/images/Verify.png";
import { useNavigate } from "react-router-dom";

const DetalhesComprador = () => {

  const navigate = useNavigate();

  const handleConcluirVenda = () => {
    navigate("/comprar"); 
  };

  const [showMessage, setShowMessage] = useState(false);

  const handleCadastrar = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000); // Esconde a mensagem após 3 segundos
  };

  return (
    <div className="detalhes-comprador">
      {/* Cabeçalho */}
      <div className="header">
        <h1>Dados do Comprador</h1>
        <div className="status">
          <img src={verifyIcon} alt="Verificado" className="verify-icon" />
          <span>À VENDA</span>
        </div>
      </div>

      {/* Dados do Imóvel */}
      <div className="section">
        <h2>Dados do Imóvel</h2>
        <div className="form-group">
          <label>País</label>
          <input type="text" value="Brasil" readOnly />
        </div>
        <div className="form-group">
          <label>Estado</label>
          <input type="text" value="Paraíba" readOnly />
        </div>
        <div className="form-group">
          <label>Cidade</label>
          <input type="text" value="Cajazeiras" readOnly />
        </div>
        <div className="form-group">
          <label>Área</label>
          <input type="text" value="200 m²" readOnly />
        </div>
        <div className="form-group">
          <label>Cômodos</label>
          <input type="text" value="2" readOnly />
        </div>
        <div className="form-group">
          <label>Tipo</label>
          <input type="text" value="Residencial" readOnly />
        </div>
      </div>

      {/* Adicionar dados do comprador */}
      <div className="section">
        <h2>Adicionar dados do comprador</h2>
        <div className="form-group">
          <label>Nome</label>
          <input type="text" placeholder="João Silva" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="joao.silva@gmail.com" />
        </div>
        <div className="form-group">
          <label>Data de Nascimento</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Contato</label>
          <input type="text" placeholder="83999999999" />
        </div>
        <div className="form-group">
          <label>País</label>
          <input type="text" value="Brasil" />
        </div>
        <div className="form-group">
          <label>Estado</label>
          <input type="text" value="Paraíba" />
        </div>
        <div className="form-group">
          <label>Cidade</label>
          <input type="text" placeholder="Sousa" />
        </div>
      </div>

      {/* Botão Vender */}
      <div className="action">
          <button className="btn-primary" onClick={handleConcluirVenda}>
            Finalizar Compra
          </button>
        </div>

        {showMessage && (
          <div className="confirmation-message">
            Venda finalizada!
          </div>
        )}

    </div>
  );
};

export default DetalhesComprador;
