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


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comprar" element={<Home />} />
        <Route path="/vender" element={<CadastroImovelVenda />} /> 
        <Route path="/alugar" element={<CadastroImovelAluguel />} />
        <Route path="/corretores" element={<div>Corretores Page</div>} />
        <Route path="/detalhes-imovel" element={<DetalhesImovel />} />
        <Route path="/detalhes-comprador" element={<DetalheComprador />} />
        <Route path="/visualizar-clientes" element={<VisualizarClientes />} />
        <Route path="/cliente/:id" element={<DetalhesCliente />} />
        <Route path="/cadastro-cliente" element={<CadastroCliente />} />
      </Routes>
    </Router>
  );
};

export default App;
