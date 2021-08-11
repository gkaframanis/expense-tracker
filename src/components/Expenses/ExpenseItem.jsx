import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
// Allows us to define values as state where changes to these values should reflect 
// in the component function called again. It's a React hook.
// It must called ONLY inside the component functions or inside nested functions in the component function.
import { useState } from "react";

// A component is just a JavaScript function.
// We destructure the props object.
const ExpenseItem = ({ date, title, amount }) => {
    // Regular variables DON'T trigger a re-evaluation.
    // useState returns an array where the first value is the variable
    // itself and the second value is the function we can use to update the variable.
    // It's PER COMPONENT instance the React hook.
    const [curTitle, setTitle] = useState(title);

    const clickHandler = () => {
        setTitle("Updated!");
        console.log(curTitle);
    };

    // We must have only one root element per return statement!!!
    return (
        // Inside the {} we can inject basic JavaScript expressions.
        <Card className="expense-item">
            <ExpenseDate date={ date } />
            <div className="expense-item__description">
                <h2>{ curTitle }</h2>
            </div>
            <div className="expense-item__price">${ amount }</div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
};

export default ExpenseItem;