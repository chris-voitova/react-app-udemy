import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses({ expences }) {
  return (
    <div className="expenses">
      {expences.map(({ id, ...itemexpences }) => (
        <ExpenseItem key={id} {...itemexpences} />
      ))}
    </div>
  );
}

export default Expenses;
