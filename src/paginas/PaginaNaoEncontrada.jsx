import { Link } from 'react-router-dom';

function PaginaNaoEncontrada() {
  return (
    <section className="secao container estado-vazio">
      <h1>Página não encontrada</h1>
      <p>Ops! O conteúdo que você tentou acessar não existe.</p>
      <Link className="botao" to="/">
        Ir para o início
      </Link>
    </section>
  );
}

export default PaginaNaoEncontrada;
