import { redirect } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { deleteExpense, updateExpense } from "~/routes/data/expenses.server";
import { validateExpenseInput } from "~/routes/data/validation.server";

export default function UpdateExpensesPage() {
    
    const navigate = useNavigate();

    function closeHandler() {
        navigate('..');
    }
    
    return (
        <Modal onClose={closeHandler}>
            <ExpenseForm />
        </Modal>
    );
}

/* export async function loader({ params }) {
    const expenseId = params.indice;

    const expense = await getExpense(expenseId);

    return expense;
} */

export async function action({ params, request }) {
    const expenseId = params.indice;

    if (request.method === 'PATCH') {
        
        const formData = await request.formData();

        const expenseData = Object.fromEntries(formData);

        try {
            validateExpenseInput(expenseData);
        } catch(error) {
            return error;
        }

        await updateExpense(expenseId, expenseData);

        return redirect('/despesas');
    } else {
        await deleteExpense(expenseId);

        return { deletedId: expenseId};
    }   
}

export function meta({ params, location, data, parentsData }) {
    
    const expense = parentsData['routes/__app/despesas'].find((expense) => expense.id === params.indice);
    
    return {
        title: expense.title,
        despription: 'Atualizar Despesa'
    }
}