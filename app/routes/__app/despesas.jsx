import { Link, Outlet, useLoaderData } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";
import expensesStyles from "~/styles/expenses.css";
import { FaPlus, FaDownload } from "react-icons/fa";
import { getExpenses } from "../data/expenses.server";

export default function ExpensesLayout() {

    const expenses = useLoaderData();

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
                <ExpensesList expenses={expenses} />
            </main>
        </>
    );
}

export async function loader() {
    return getExpenses();
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: expensesStyles
        }
    ]
}