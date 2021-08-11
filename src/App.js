import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
// Our root component
function App(props) {
	const expenses = [
		{ id: "e1", title: "Car Insurance", amount: 294.67, date: new Date(2021, 7, 14) },
		{ id: "e2", title: "TV", amount: 799.49, date: new Date(2021, 2, 12) },
		{ id: "e3", title: "Laptop", amount: 1000, date: new Date(2021, 2, 28) },
		{ id: "e4", title: "Desk", amount: 450, date: new Date(2021, 5, 12) },
	];

	const addExpenseHandler = expense => {
		console.log("In App.js");
		console.log(expense);
	};

	// JSX Syntax: JavaScript XML
	return (
		<div>
			{/* Custom components should start with capital letter, so that React can detect them. */}
			{/* Props are not restricted to dynamically set data. */}

			{/* We can use this format if there isn't any content between opening and closing tags */}
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
