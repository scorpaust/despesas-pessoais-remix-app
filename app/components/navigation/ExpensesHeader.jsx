import { Form, NavLink } from '@remix-run/react';

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
        <Form method="post" action="/sair" id="logout-form">
          <button className="cta">Sair</button>
        </Form>
      </nav>
    </header>
  );
}

export default ExpensesHeader;