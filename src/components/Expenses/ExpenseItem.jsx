import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// A component is just a JavaScript function.
// We destructure the props object.
const ExpenseItem = ({ date, title, amount }) => {
    // We must have only one root element per return statement!!!
    return (
        // Inside the {} we can inject basic JavaScript expressions.
        <Card className="expense-item">
            <ExpenseDate date={ date } />
            <div className="expense-item__description">
                <h2>{ title }</h2>
            </div>
            <div className="expense-item__price">${ amount }</div>
        </Card>
    )
};

export default ExpenseItem;