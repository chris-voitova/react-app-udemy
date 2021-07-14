import React from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = ({
  expenses,
  onFilterExpenses,
  onYearSelect,
  selectedYear,
}) => {
  const filterChangeHandler = (selectedYear) => {
    onFilterExpenses(selectedYear);
    onYearSelect(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList expenses={expenses} />
    </Card>
  );
};

export default Expenses;
