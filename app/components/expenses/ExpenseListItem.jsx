import { Form, Link, useFetcher, useSubmit } from "@remix-run/react";

function ExpenseListItem({ id, title, amount }) {

  const fetcher = useFetcher();

  function deleteExpenseItemHandler() {

    const deleteAuth = confirm(`Tem a certeza que pretende eliminar a despesa "${title}"?`);

    if (!deleteAuth) return;

    fetcher.submit(null, {
      method: 'delete',
      action: `/despesas/${id}`
    });
  }

  if (fetcher.state !== 'idle') {
    return (
      <article className="expense-item locked">
        <p>Despesa a ser eliminada...</p>
      </article>
    );
  }

  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title">{title}</h2>
        <p className="expense-amount">{amount.toFixed(2)} €</p>
      </div>
      <menu className="expense-actions">
        <button onClick={deleteExpenseItemHandler}>Apagar</button>
        {/*<Form method='delete' action={`/despesas/${id}`}>
          <button>Apagar</button>
          </Form>*/}
        <Link to={id}>Editar</Link>
      </menu>
    </article>
  );
}

export default ExpenseListItem;
