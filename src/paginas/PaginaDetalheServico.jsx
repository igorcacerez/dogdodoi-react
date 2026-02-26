import { Link, useParams } from 'react-router-dom';
import { dadosServicos } from '../dados/dadosServicos';

function PaginaDetalheServico() {
  const { id } = useParams();
  const servico = dadosServicos.find((item) => item.id === id);

  if (!servico) {
    return (
      <section className="secao container estado-vazio">
        <h1>Serviço não encontrado</h1>
        <p>Não encontramos o serviço solicitado. Talvez ele tenha sido movido ou não exista.</p>
        <Link className="botao" to="/">
          Voltar para a Home
        </Link>
      </section>
    );
  }

  return (
    <section className="secao container detalhe-servico">
      <img src={servico.imagem} alt={servico.nome} className="imagem-destaque" />
      <h1>{servico.nome}</h1>
      <p>{servico.descricaoLonga}</p>

      <h2>Benefícios</h2>
      <ul className="lista-diferenciais">
        {servico.beneficios.map((beneficio) => (
          <li key={beneficio}>{beneficio}</li>
        ))}
      </ul>

      <h2>Como funciona</h2>
      <p>
        Após o agendamento, nossa equipe realiza uma triagem inicial, define o melhor protocolo de
        atendimento e acompanha todo o processo para garantir segurança e bem-estar ao seu pet.
      </p>

      <div className="informacoes-servico">
        <p>
          <strong>Tempo médio:</strong> {servico.tempoMedio}
        </p>
        <p>
          <strong>Preço a partir de:</strong> {servico.precoBase || 'Consulte valores'}
        </p>
      </div>

      <a
        className="botao"
        href="https://wa.me/5511999990000?text=Olá!%20Quero%20agendar%20um%20serviço%20na%20Dog%20Dodói"
        target="_blank"
        rel="noreferrer"
      >
        Agendar pelo WhatsApp
      </a>
    </section>
  );
}

export default PaginaDetalheServico;
