import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList expenses={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
