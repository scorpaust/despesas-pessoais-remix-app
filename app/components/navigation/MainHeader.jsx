import { Link, NavLink } from '@remix-run/react';
import Logo from '../util/Logo';

function MainHeader() {
  return (
    <header id="main-header">
      <Logo />
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink to="/">Início</NavLink>
          </li>
          <li>
            <NavLink to="/planos-pagamento">Subscrições</NavLink>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav">
        <ul>
          <li>
            <Link to="/aut" className="cta">
              Entrar
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
