import CartaoServico from './CartaoServico';

function ListaServicos({ servicos }) {
  return (
    <div className="grade-servicos">
      {servicos.map((servico) => (
        <CartaoServico key={servico.id} servico={servico} />
      ))}
    </div>
  );
}

export default ListaServicos;
