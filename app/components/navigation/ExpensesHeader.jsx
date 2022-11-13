import { NavLink } from '@remix-run/react';

import Logo from '../util/Logo';

function ExpensesHeader() {
  return (
    <header id="main-header">
      <Logo />
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink to="/despesas" end>
              Gerir Despesas
            </NavLink>
          </li>
          <li>
            <NavLink to="/despesas/analise">Analisar Despesas</NavLink>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav">
        <button className="cta">Sair</button>
      </nav>
    </header>
  );
}

export default ExpensesHeader;