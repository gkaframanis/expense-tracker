import {useState} from "react";
import "./NewExpense.css";

import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = props => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {/* To pass data from the child (ExpenseForm) to the parent (New Expense) */}
            {/* We start it with "on" to make it clear that the value is a function */}
            {/* We pass a pointer to a function */}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    );
};
export default NewExpense;
