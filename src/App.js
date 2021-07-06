import Expenses from "./components/Expenses";

const App = () => {
  const expences = [
    {
      id: "ex1",
      title: "Toiler Paper",
      amount: 9.12,
      date: new Date(2021, 5, 14),
    },
    {
      id: "ex2",
      title: "Car Insurance",
      amount: 94.15,
      date: new Date(2021, 5, 17),
    },
    {
      id: "ex3",
      title: "Iphone",
      amount: 999.99,
      date: new Date(2021, 5, 20),
    },
  ];

  return (
    <div>
      <Expenses expences={expences} />
    </div>
  );
};

export default App;
