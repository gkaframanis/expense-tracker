// Component that acts like a shell around the Expenses or the ExpenseItem component.

import "./Card.css";

// Wrapper Component
const Card = props => {
    // We are making sure that any value set on the className prop it's added to this string
    // of classNames which is finally set on the div } so we can use the style of the other classes
    // to our custom component.
    const classes = "card " + props.className;
    // Children is reserved word and its value is the content between opening and closing custom components.
    return <div className={classes}>{props.children}</div>;
};

export default Card;
