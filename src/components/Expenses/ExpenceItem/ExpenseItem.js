import React, { useState } from "react";
import Card from "../../UI/Card";
import ExpenseDate from "../ExpenseDate";
import "./ExpenceItem.css";

const ExpenseItem = ({ date, title, amount }) => {
  const [dynamicTitle, setDynamicTitle] = useState(title);
  const clickHandler = () => setDynamicTitle("Updated!");

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{dynamicTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
