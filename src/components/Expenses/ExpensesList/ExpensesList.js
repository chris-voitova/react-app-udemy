import React from "react";
import ExpenseItem from "../ExpenceItem";
import "./ExpensesList.css";

const ExpensesList = ({ expenses }) => {
  if (expenses.length === 0) {
    return (
      <p className="expenses-list__fallback">No expenses for this period</p>
    );
  }

  return (
    <div className="expenses-list">
      {expenses.map(({ id, ...itemExpenses }) => (
        <ExpenseItem key={id} {...itemExpenses} />
      ))}
    </div>
  );
};

export default ExpensesList;
