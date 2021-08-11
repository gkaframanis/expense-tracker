import "./NewExpense.css";

import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = props => {
	const saveExpenseDataHandler = enteredExpenseData => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
	};

	return (
		<div className="new-expense">
			{/* To pass data from the child (ExpenseForm) to the parent (New Expense) */}
			{/* We start it with "on" to make it clear that the value is a function */}
			{/* We pass a pointer to a function */}
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	);
};
export default NewExpense;
