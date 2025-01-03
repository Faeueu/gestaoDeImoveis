import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/DetalhesProprietario.css"; // CSS fornecido

const DetalhesProprietarios = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [proprietario, setProprietario] = useState(null);

  useEffect(() => {
    const fetchProprietario = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/proprietarios/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setProprietario(data);
        } else {
          console.error("Erro ao buscar os detalhes do proprietário.");
        }
      } catch (error) {
        console.error("Erro ao buscar o proprietário:", error);
      }
    };

    fetchProprietario();
  }, [id]);

  const handleVoltar = () => {
    navigate(-1);
  };

  if (!proprietario) {
    return <p>Carregando os detalhes do proprietário...</p>;
  }

  return (
    <div className="visualizar-proprietarios">
      {/* Cabeçalho */}
      <header className="header">
        <button className="back-button" onClick={handleVoltar}>
          &#8592;
        </button>
        <h1>Detalhes do Proprietário</h1>
      </header>

      {/* Seção de Detalhes */}
      <div className="proprietarios-detalhes">
        <div className="dados">
          <label>Nome:</label>
          <input type="text" value={proprietario.nome} readOnly />
        </div>
        <div className="dados">
          <label>Telefone:</label>
          <input type="text" value={proprietario.telefone} readOnly />
        </div>
        <div className="dados">
          <label>Tipo de Imóvel:</label>
          <input type="text" value={proprietario.tipoImovel} readOnly />
        </div>
        <div className="dados">
          <label>Descrição:</label>
          <textarea
            value={proprietario.descricaoImovel}
            readOnly
            style={{
              width: "100%",
              height: "100px",
              border: "1px solid #333",
              borderRadius: "5px",
              padding: "8px",
              fontSize: "14px",
              color: "#333",
              resize: "none",
            }}
          />
        </div>

        {/* Seção de Endereço */}
        <div className="endereco">
          <div>
            <label>Pais:</label>
            <input type="text" value={proprietario.localizacao.pais} readOnly />
          </div>
          <div>
            <label>Cidade:</label>
            <input
              type="text"
              value={proprietario.localizacao.cidade}
              readOnly
            />
            <div>

              <label>Estado:</label>
              <input
                type="text"
                value={proprietario.localizacao.estado}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalhesProprietarios;
