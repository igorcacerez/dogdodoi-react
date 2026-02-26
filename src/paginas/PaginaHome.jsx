import BannerPrincipal from '../componentes/BannerPrincipal';
import ListaServicos from '../componentes/ListaServicos';
import { dadosServicos } from '../dados/dadosServicos';

function PaginaHome() {
  return (
    <>
      <BannerPrincipal />

      <section className="secao container">
        <h2>Sobre a Dog Dodói</h2>
        <p>
          Somos uma clínica veterinária apaixonada por cuidar da saúde e bem-estar dos animais.
          Nosso objetivo é oferecer atendimento de qualidade, acolhimento e confiança para tutores
          e pets em todas as fases da vida.
        </p>
      </section>

      <section className="secao container" id="servicos">
        <h2>Serviços</h2>
        <ListaServicos servicos={dadosServicos.slice(0, 4)} />
      </section>

      <section className="secao container">
        <h2>Diferenciais</h2>
        <ul className="lista-diferenciais">
          <li>Atendimento 24h para urgências e emergências.</li>
          <li>Equipe especializada em clínica, cirurgia e diagnóstico.</li>
          <li>Exames no local para mais agilidade no tratamento.</li>
          <li>Ambiente acolhedor e preparado para reduzir o estresse dos pets.</li>
        </ul>
      </section>
    </>
  );
}

export default PaginaHome;
