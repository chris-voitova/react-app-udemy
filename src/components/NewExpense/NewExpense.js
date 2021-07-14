import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [formOpen, setFormOpen] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenceData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenceData);
    switchFormState();
  };

  const switchFormState = () => setFormOpen(!formOpen);

  return (
    <div className="new-expense">
      {!formOpen && (
        <button onClick={() => switchFormState()}>Add New Expense</button>
      )}
      {formOpen && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClose={switchFormState}
        />
      )}
    </div>
  );
};

export default NewExpense;
