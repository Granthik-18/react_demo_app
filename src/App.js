import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { title: 'Cars', amount: 25666, date: new Date(2025, 0, 27) },
    { title: 'Shoes', amount: 56866, date: new Date(2025, 0, 28) },
    { title: 'Pc', amount: 20566, date: new Date(2025, 0, 29) },
    { title: 'Phones', amount: 65366, date: new Date(2025, 0, 30) },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello !!!</h2>
        <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
        <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
      </header>
    </div>
  );
}

export default App;
