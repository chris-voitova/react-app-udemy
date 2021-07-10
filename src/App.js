import React, { useState, useEffect } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const valueToString = (item) => item.toString();

const INITIAL_EXPENSES = [
  {
    id: valueToString(Math.random()),
    title: "Toiler Paper",
    amount: 9.12,
    date: new Date(2021, 5, 14),
  },
  {
    id: valueToString(Math.random()),
    title: "Car Insurance next year",
    amount: 94.15,
    date: new Date(2022, 5, 17),
  },
  {
    id: valueToString(Math.random()),
    title: "Car Insurance",
    amount: 94.15,
    date: new Date(2021, 5, 17),
  },
  {
    id: valueToString(Math.random()),
    title: "Iphone",
    amount: 999.99,
    date: new Date(2021, 5, 20),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);
  const [selectedYear, setSelectedYear] = useState("2021");

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
    const ExpenseDate = expense.date.getFullYear().toString();
    setSelectedYear(ExpenseDate);
  };
  const yearSelectHandler = (year) => {
    setSelectedYear(year);
  };

  const filterExpenses = (selectedYear) => {
    const filteredArr = expenses.filter(
      ({ date }) => date.getFullYear().toString() === selectedYear
    );
    setFilteredExpenses(filteredArr);
  };

  useEffect(() => {
    setFilteredExpenses(expenses);
    filterExpenses(selectedYear);
    // eslint-disable-next-line
  }, [expenses, selectedYear]);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        expenses={filteredExpenses}
        onFilter={filterExpenses}
        onYearSelect={yearSelectHandler}
        selectedYear={selectedYear}
      />
    </div>
  );
};

export default App;
