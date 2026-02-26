import { Route, Routes } from 'react-router-dom';
import Cabecalho from './componentes/Cabecalho';
import Rodape from './componentes/Rodape';
import PaginaHome from './paginas/PaginaHome';
import PaginaQuemSomos from './paginas/PaginaQuemSomos';
import PaginaContato from './paginas/PaginaContato';
import PaginaDetalheServico from './paginas/PaginaDetalheServico';
import PaginaNaoEncontrada from './paginas/PaginaNaoEncontrada';

function App() {
  return (
    <div className="aplicacao">
      <Cabecalho />
      <main className="conteudo-principal">
        <Routes>
          <Route path="/" element={<PaginaHome />} />
          <Route path="/quem-somos" element={<PaginaQuemSomos />} />
          <Route path="/contato" element={<PaginaContato />} />
          <Route path="/servicos/:id" element={<PaginaDetalheServico />} />
          <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routes>
      </main>
      <Rodape />
    </div>
  );
}

export default App;
