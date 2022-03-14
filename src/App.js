import Expenses from './components/Expenses';

function App() {
  const expenses = [
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

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
