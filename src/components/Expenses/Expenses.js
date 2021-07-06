import Card from "../UI/Card";
import ExpenseItem from "./ExpenceItem/ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expences }) => {
  return (
    <Card className="expenses">
      {expences.map(({ id, ...itemExpences }) => (
        <ExpenseItem key={id} {...itemExpences} />
      ))}
    </Card>
  );
};

export default Expenses;
