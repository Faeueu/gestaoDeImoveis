import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CadastroImovelVenda from "./pages/CadastroImovelVenda";
import CadastroImovelAluguel from "./pages/CadastroImovelAlugar";
import DetalhesImovel from "./pages/DetalhesImovel";
import DetalheComprador from "./pages/DetalheComprador";
import VisualizarClientes from "./pages/VisualizarClientes";
import DetalhesCliente from "./pages/DetalhesCliente";
import CadastroCliente from "./pages/CadastroCliente";
import VisualizarCorretores from "./pages/DetalhesCorretor";
import CadastroCorretor from "./pages/CadastroCorretores";
import VisualizarProprietarios from "./pages/VisualizarProprietario";
import DetalhesProprietario from "./pages/DetalhesProprietario";
import CadastroProprietario from "./pages/CadastroProprietario";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comprar" element={<Home />} />

        <Route path="/vender" element={<CadastroImovelVenda />} /> 
        <Route path="/alugar" element={<CadastroImovelAluguel />} />

        <Route path="/visualizar-corretores" element={<VisualizarCorretores/>} />
        <Route path="/cadastrar-corretores" element={<CadastroCorretor />} />

        <Route path="/visualizar-clientes" element={<VisualizarClientes />} />
        <Route path="/cadastro-cliente" element={<CadastroCliente />} />
        <Route path="/cliente/:id" element={<DetalhesCliente />} />

        <Route path="/detalhes-imovel" element={<DetalhesImovel />} />
        <Route path="/detalhes-comprador" element={<DetalheComprador />} />

        <Route path="/visualizar-proprietarios" element={<VisualizarProprietarios />} />
        <Route path="/cadastro-proprietario" element={<CadastroProprietario />} />
        <Route path="/proprietario/:id" element={<DetalhesProprietario />} />

      </Routes>
    </Router>
  );
};

export default App;