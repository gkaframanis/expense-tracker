import "./ExpenseDate.css";

// Don't forget that props is an object, so we can destructure it!!!
const ExpenseDate = ({ date }) => {
    // toLocaleString() to have human readable date.
    const month = date.toLocaleString("en-US", {month: "long"});
    const day = date.toLocaleString("en-US", {day: "2-digit"});
    const year = date.getFullYear();
    return (
        <div className="expense-date">
            <div className="expense-date__month">{ month }</div>
            <div className="expense-date__day">{ day }</div>
            <div className="expense-date__year">{ year }</div>
        </div>
    )

};

export default ExpenseDate;