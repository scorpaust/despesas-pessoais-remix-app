import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart";

const DUMMY_EXPENSES = [
    {
        id: 'd1',
        title: 'Gasolina',
        amount: 25.10,
        date: new Date().toISOString()
    },
    {
        id: 'd2',
        title: 'Renda da Casa',
        amount: 500.00,
        date: new Date().toISOString()
    }
];

export default function ExpensesAnalysisPage() {
    return (
        <main>
            <Chart expenses={DUMMY_EXPENSES} />
            <ExpenseStatistics expenses={DUMMY_EXPENSES} />
        </main>
    );
}