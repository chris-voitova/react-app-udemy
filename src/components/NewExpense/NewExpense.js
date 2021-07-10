import ExpenseForm from "./ExpenseForm/ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenceData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenceData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
