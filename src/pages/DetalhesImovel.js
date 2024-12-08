import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DetalhesImovel.css";
import verifyIcon from "../assets/images/Verify.png";


const DetalhesImovel = () => {
  const navigate = useNavigate();

  const handleContinuarCompra = () => {
    navigate("/detalhes-comprador"); // Navegar para a página DetalhesComprador
  };


  const location = useNavigate();
  const {
    type = "Residencial",
    rooms = 2,
    area = 200,
    //address = "Cajazeiras - Paraíba - Brazil",
    owner = { name: "Marcos Santos", email: "marcos.santos@gmail.com" },
    realtor = {
      name: "Joãozinho da Costa",
      email: "joaozinho.costa@gmail.com",
      contact: "83999999999",
    },
  } = location.state || {};

  return (
    <div className="detalhe-imovel">
      <div className="header">
        <h1>Dados do Imóvel</h1>
        <div className="status">
          <img src={verifyIcon} alt="Verificado" className="verify-icon" />
          <span>À VENDA</span>
        </div>
      </div>

      <div className="content">
        {/* Dados do Imóvel */}
        <section className="dados-imovel">
          <div className="imovel-info">
            <div>
              <p>
                <strong>País:</strong> Brasil
              </p>
              <p>
                <strong>Estado:</strong> Paraíba
              </p>
              <p>
                <strong>Cidade:</strong> Cajazeiras
              </p>
            </div>
            <div>
              <p>
                <strong>Área:</strong> {area} m²
              </p>
              <p>
                <strong>Cômodos:</strong> {rooms}
              </p>
              <p>
                <strong>Tipo:</strong> {type}
              </p>
            </div>
          </div>
        </section>

        {/* Dados do Proprietário */}
        <section className="proprietario">
          <h2>Proprietário:</h2>
          <p>
            <strong>Nome:</strong> {owner.name}
          </p>
          <p>
            <strong>Email:</strong> {owner.email}
          </p>
        </section>

        {/* Dados do Corretor */}
        <section className="corretor">
          <h2>Corretor:</h2>
          <p>
            <strong>Nome:</strong> {realtor.name}
          </p>
          <p>
            <strong>Email:</strong> {realtor.email}
          </p>
          <p>
            <strong>Contato:</strong> {realtor.contact}
          </p>
        </section>

        {/* Botão de Ação */}

        <div className="action">
          <button className="btn-primary" onClick={handleContinuarCompra}>
            Continuar Compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetalhesImovel;
