import { Form, Link, useSearchParams, useTransition } from '@remix-run/react';
import { FaLock, FaUserPlus } from 'react-icons/fa';

function AuthForm() {

  const [searchParams,] = useSearchParams();

  const navigation = useTransition();

  const authMode = searchParams.get('modo') || 'entrar';

  const submitButtonCaption = authMode === 'entrar' ? 'Entrar' : 'Criar Utilizador/a';

  const toggleButtonCaption = authMode === 'entrar' ? 'Criar Novo Utilizador/a' : 'Entrar com utilizador/a existente';

  const isSubmitting = navigation.state !== 'idle';

  return (
    <Form method="post" className="form" id="auth-form">
      <div className="icon-img">
        { authMode === 'entrar' ? <FaLock /> : <FaUserPlus /> }
      </div>
      <p>
        <label htmlFor="email">Endereço eletrónico</label>
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" name="password" minLength={7} />
      </p>
      <div className="form-actions">
        <button disabled={isSubmitting}>{isSubmitting ? 'Em autenticação...' : submitButtonCaption}</button>
        <Link to={authMode === 'entrar' ? '?modo=registar' : '?modo=entrar' }>{toggleButtonCaption}</Link>
      </div>
    </Form>
  );
}

export default AuthForm;
