import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CadastroImovelVenda from "./pages/CadastroImovelVenda";
import CadastroImovelAluguel from "./pages/CadastroImovelAlugar";
import CadastroCliente from "./pages/CadastroCliente"; 
import DetalhesImovel from "./pages/DetalhesImovel";
import DetalheComprador from "./pages/DetalheComprador";


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
        <Route path="/cadastro-cliente" element={<CadastroCliente />} />
        <Route path="/detalhes-imovel" element={<DetalhesImovel />} />
        <Route path="/detalhes-comprador" element={<DetalheComprador />} />
      </Routes>
    </Router>
  );
};

export default App;
