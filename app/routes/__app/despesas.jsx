import { Link, Outlet, useLoaderData } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";
import expensesStyles from "~/styles/expenses.css";
import { FaPlus, FaDownload } from "react-icons/fa";
import { getExpenses } from "../data/expenses.server";
import { requireUserSession } from "../data/auth.server";

export default function ExpensesLayout() {

    const expenses = useLoaderData();

    const hasExpenses = expenses && expenses.length > 0;

    return (
        <>
            <Outlet />
            <main>
                <section id="expenses-actions">
                    <Link to="adicionar">
                        <span>Adicionar Despesa</span>
                        <FaPlus />
                    </Link>
                    <a href="/despesas/bruto">
                        <FaDownload />
                        <span>Carregar Dados em Bruto</span>
                    </a>
                </section>
                {hasExpenses && 
                    <ExpensesList expenses={expenses} />
                }
                {!hasExpenses && 
                    <section id="no-expenses">
                        <p>Sem despesas registadas.</p>
                        <p>Comece a <Link to="adicionar">adicionar despesas</Link>.</p>
                    </section>
                }
            </main>
        </>
    );
}

export async function loader({ request }) {
  
    const userId = await requireUserSession(request);

    const expenses = await getExpenses(userId);
  
    return expenses;
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: expensesStyles
        }
    ]
}