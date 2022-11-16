import { Form, Link, NavLink, useLoaderData } from '@remix-run/react';
import Logo from '../util/Logo';

function MainHeader() {

  const userId = useLoaderData();

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
            {userId && (<Form method="post" action="/sair" id="logout-form">
              <button className="cta-alt">Sair</button>
              </Form>)}
            {!userId && (<Link to="/aut" className="cta">
              Entrar
            </Link>)}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
