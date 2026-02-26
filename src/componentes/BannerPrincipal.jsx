import { Link } from 'react-router-dom';

function BannerPrincipal() {
  return (
    <section className="banner-principal">
      <div className="container banner-conteudo">
        <h1>Cuidando com carinho do seu melhor amigo</h1>
        <p>
          Atendimento veterinário completo para cães e gatos, com tecnologia, amor e uma equipe
          pronta para cuidar do seu pet em todos os momentos.
        </p>
        <Link className="botao" to="/contato">
          Agende uma visita
        </Link>
      </div>
    </section>
  );
}

export default BannerPrincipal;
