import { Form, Link, useActionData, useTransition, useMatches, useParams } from "@remix-run/react";

function ExpenseForm() {
  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10

  //const expenseData = useLoaderData();
  const matches = useMatches();

  const params = useParams();

  const expenses = matches.find((match) => match.id === 'routes/__app/despesas').data;

  const expenseData = expenses.find((expense) => expense.id === params.indice);

  const validationErrors = useActionData();

  const navigation = useTransition();

  const isSubmitting = navigation.state !== 'idle';

  const defaultValues = expenseData ? {
    title: expenseData.title,
    amount: expenseData.amount,
    date: expenseData.date
  } : {
    title: '',
    amount: '',
    date: ''
  };

  /* const submit = useSubmit();

  function submitHandler(event) {
    event.preventDefault();

    // perform another client validation of my own

    submit(event.target, {
      method: 'post'
    });
  } */

  return (
    <Form method="post" className="form" id="expense-form" /* onSubmit={submitHandler} */>
      <p>
        <label htmlFor="title">Despesa</label>
        <input type="text" id="title" name="title" required maxLength={30} defaultValue={defaultValues.title} required />
      </p>

      <div className="form-row">
        <p>
          <label htmlFor="amount">Montante</label>
          <input
            type="number"
            id="amount"
            name="amount"
            min="0"
            step="0.01"
            defaultValue={defaultValues.amount}
            required
          />
        </p>
        <p>
          <label htmlFor="date">Data</label>
          <input type="date" id="date" name="date" max={today} defaultValue={defaultValues.date ? defaultValues.date.slice(0,10) : ''} required />
        </p>
      </div>
      <div className="form-actions">
        <button disabled={isSubmitting}>{isSubmitting ? 'A guardar...' : 'Guardar Despesa'}</button>
        <Link to="..">Cancelar</Link>
      </div>
      {validationErrors && <ul>
          {Object.values(validationErrors).map((error) => 
            <li key={error}>{error}</li>
          )}
        </ul>}
    </Form>
  );
}

export default ExpenseForm;
