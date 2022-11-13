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

export function loader() {
    return DUMMY_EXPENSES;
}