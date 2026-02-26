import { NavLink } from 'react-router-dom';

function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="container cabecalho-conteudo">
        <NavLink className="marca" to="/">
          🐶 Dog Dodói
        </NavLink>
        <nav aria-label="Navegação principal">
          <ul className="menu">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'ativo' : '')} end>
                Início
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/quem-somos"
                className={({ isActive }) => (isActive ? 'ativo' : '')}
              >
                Quem Somos
              </NavLink>
            </li>
            <li>
              <NavLink to="/contato" className={({ isActive }) => (isActive ? 'ativo' : '')}>
                Contato
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Cabecalho;
