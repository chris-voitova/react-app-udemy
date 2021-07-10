import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenceItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = ({ expenses, onFilter, onYearSelect, selectedYear }) => {

  const filterChangeHandler = (selectedYear) => {
    onFilter(selectedYear);
    onYearSelect(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenses.map(({ id, ...itemExpenses }) => (
        <ExpenseItem key={id} {...itemExpenses} />
      ))}
    </Card>
  );
};

export default Expenses;
