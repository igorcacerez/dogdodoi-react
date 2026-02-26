import { Link } from 'react-router-dom';

function CartaoServico({ servico }) {
  return (
    <article className="cartao-servico">
      <img src={servico.imagem} alt={servico.nome} />
      <div className="cartao-corpo">
        <h3>{servico.nome}</h3>
        <p>{servico.descricaoCurta}</p>
        <Link className="link-detalhe" to={`/servicos/${servico.id}`}>
          Ver detalhes
        </Link>
      </div>
    </article>
  );
}

export default CartaoServico;
