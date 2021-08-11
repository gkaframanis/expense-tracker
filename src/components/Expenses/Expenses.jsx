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

	return (
		<Card className="expenses">
            {/* ExpensesFilter is a controlled component. It's controlled by the Expenses Component. */}
			<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
			<ExpenseItem {...props.items[0]} />
			<ExpenseItem {...props.items[1]} />
			<ExpenseItem {...props.items[2]} />
			<ExpenseItem {...props.items[3]} />
		</Card>
	);
};

export default Expenses;
