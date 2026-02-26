import { useState } from 'react';

const estadoInicial = {
  nome: '',
  email: '',
  telefone: '',
  mensagem: '',
};

function PaginaContato() {
  const [formulario, setFormulario] = useState(estadoInicial);
  const [erros, setErros] = useState({});
  const [enviado, setEnviado] = useState(false);

  const atualizarCampo = (evento) => {
    const { name, value } = evento.target;
    setFormulario((anterior) => ({ ...anterior, [name]: value }));
  };

  const validarFormulario = () => {
    const novosErros = {};

    if (!formulario.nome.trim()) novosErros.nome = 'Informe seu nome.';
    if (!formulario.email.trim()) {
      novosErros.email = 'Informe seu e-mail.';
    } else if (!/\S+@\S+\.\S+/.test(formulario.email)) {
      novosErros.email = 'Digite um e-mail válido.';
    }
    if (!formulario.telefone.trim()) novosErros.telefone = 'Informe seu telefone.';
    if (!formulario.mensagem.trim()) novosErros.mensagem = 'Escreva sua mensagem.';

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const enviarFormulario = (evento) => {
    evento.preventDefault();
    setEnviado(false);

    if (!validarFormulario()) return;

    setEnviado(true);
    setFormulario(estadoInicial);
    setErros({});
  };

  return (
    <section className="secao container pagina-contato">
      <h1>Contato</h1>
      <div className="grade-contato">
        <article className="bloco-contato">
          <h2>Fale com a Dog Dodói</h2>
          <p>
            <strong>Telefone:</strong> (11) 4002-8922
          </p>
          <p>
            <strong>WhatsApp:</strong> (11) 99999-0000
          </p>
          <p>
            <strong>E-mail:</strong> contato@dogdodoi.com.br
          </p>
          <p>
            <strong>Endereço:</strong> Rua das Patinhas, 123 - Centro, São Paulo - SP
          </p>
        </article>

        <form className="formulario" onSubmit={enviarFormulario} noValidate>
          <h2>Envie sua mensagem</h2>

          <label htmlFor="nome">Nome</label>
          <input id="nome" name="nome" value={formulario.nome} onChange={atualizarCampo} />
          {erros.nome && <span className="erro">{erros.nome}</span>}

          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formulario.email}
            onChange={atualizarCampo}
          />
          {erros.email && <span className="erro">{erros.email}</span>}

          <label htmlFor="telefone">Telefone</label>
          <input
            id="telefone"
            name="telefone"
            value={formulario.telefone}
            onChange={atualizarCampo}
          />
          {erros.telefone && <span className="erro">{erros.telefone}</span>}

          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows="4"
            value={formulario.mensagem}
            onChange={atualizarCampo}
          />
          {erros.mensagem && <span className="erro">{erros.mensagem}</span>}

          <button className="botao" type="submit">
            Enviar mensagem
          </button>

          {enviado && (
            <p className="sucesso" role="status">
              Mensagem enviada com sucesso! Em breve entraremos em contato.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default PaginaContato;
