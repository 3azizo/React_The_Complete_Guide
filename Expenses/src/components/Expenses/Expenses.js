import Card from "../UI/Card";
// import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpenseItem.css";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
let filteredExpenses;

function Expenses(props) {
  const [filteredYear, setfilterdYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setfilterdYear(selectedYear);
  };
  if (filteredYear === "all") {
    filteredExpenses = props.items;
  } else {
    filteredExpenses = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear;
    });
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />

      <ExpenseList items={filteredExpenses} />
    </Card>
  );
}
export default Expenses;
