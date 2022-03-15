import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const dummyExpenseData = [
  {
    id: 'e1',
    title: 'Home Insurance',
    amount: 50.45,
    date: new Date(2022, 2, 21),
  },
  { id: 'e2', title: 'Rent', amount: 600.0, date: new Date(2022, 2, 24) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'Electricity',
    amount: 75.0,
    date: new Date(2022, 2, 30),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenseData);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
