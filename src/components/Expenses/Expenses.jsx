import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = props => {
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

	const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear)

	// We can store JSX in variables.
	// 3rd way
	let expensesContent = <p>No expenses found</p>;

	if(filteredExpenses.length > 0){
		expensesContent = filteredExpenses.map(expense => <ExpenseItem key={expense.id} {...expense}/>);
	}
	
	return (
		<Card className="expenses">
			{/* ExpensesFilter is a controlled component. It's controlled by the Expenses Component. */}
			<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
			{/* We transform our array to an array of JSX elements */}
			{/* Always use the key prop when you mapping out items. */}

			{/* ------- Creating a conditional Content ----------*/}

			{/* 1st Way */}
			{/* {filteredExpenses.length === 0
				? <p>No expenses found</p> 
				: filteredExpenses.map(expense => <ExpenseItem key={expense.id} {...expense}/>)}	 */}
			{/* If the first condition is true then the second is executed. */}

			{/* 2nd Way */}
			{/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
			{filteredExpenses.length > 0 && filteredExpenses.map(expense => <ExpenseItem key={expense.id} {...expense}/>)} */}
			{expensesContent}
		</Card>
	)
};

export default Expenses;
