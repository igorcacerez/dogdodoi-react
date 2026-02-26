function PaginaQuemSomos() {
  return (
    <section className="secao container pagina-quem-somos">
      <h1>Quem Somos</h1>
      <p>
        A Dog Dodói nasceu do sonho de oferecer um atendimento veterinário humano, acessível e
        eficiente. Desde 2016, cuidamos de centenas de famílias com respeito, empatia e
        compromisso com a saúde animal.
      </p>

      <div className="bloco-missao-visao">
        <article>
          <h2>Missão</h2>
          <p>Promover saúde e qualidade de vida para pets com cuidado individualizado.</p>
        </article>
        <article>
          <h2>Visão</h2>
          <p>
            Ser referência em atendimento veterinário na região, unindo carinho, tecnologia e
            excelência.
          </p>
        </article>
        <article>
          <h2>Valores</h2>
          <p>Ética, amor aos animais, transparência, atualização constante e responsabilidade.</p>
        </article>
      </div>

      <img
        className="imagem-destaque"
        src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1200&q=80"
        alt="Veterinária examinando um cachorro em consultório"
      />

      <h2>Equipe</h2>
      <div className="grade-equipe">
        <article className="cartao-equipe">
          <h3>Dra. Camila Souza</h3>
          <p className="cargo">Médica Veterinária Clínica Geral</p>
          <p>Especialista em medicina preventiva e acompanhamento de filhotes e idosos.</p>
        </article>
        <article className="cartao-equipe">
          <h3>Dr. Rafael Menezes</h3>
          <p className="cargo">Cirurgião Veterinário</p>
          <p>Atua em cirurgias de tecidos moles e ortopedia com foco em recuperação segura.</p>
        </article>
        <article className="cartao-equipe">
          <h3>Mariana Alves</h3>
          <p className="cargo">Técnica em Enfermagem Veterinária</p>
          <p>Responsável pelo acolhimento, suporte em exames e cuidado no pós-atendimento.</p>
        </article>
      </div>
    </section>
  );
}

export default PaginaQuemSomos;
