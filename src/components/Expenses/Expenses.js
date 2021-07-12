import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenceItem";
import ExpensesFilter from "./ExpensesFilter";
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
  const isExpensesExist = expenses.length;

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onChangeFilter={filterChangeHandler}
      />
      {console.log(!!expenses.length)}
      {isExpensesExist ? (
        expenses.map(({ id, ...itemExpenses }) => (
          <ExpenseItem key={id} {...itemExpenses} />
        ))
      ) : (
        <div className="empty-state-text">No expenses for this period</div>
      )}
    </Card>
  );
};

export default Expenses;
