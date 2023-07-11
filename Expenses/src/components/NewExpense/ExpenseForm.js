import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isValid,setIsvalid]=useState(true);

  // multiple sates in one stat
  //   const [usersInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);

    //working with multiple status for example
    // setUserInput({
    //   ...usersInput,
    //   enteredTitle: e.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value };
    // });
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submithandler = (e) => {
    e.preventDefault();
    if(enteredTitle===''||enteredAmount===""||enteredDate===""){
      setIsvalid(false)
      return;
    }
    setIsvalid(true)
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  let [addExpense, setAddExpense] = useState(false);

  return (
    <form onSubmit={submithandler}>
      {!addExpense && (
        <button onClick={() => setAddExpense(true)}>Add New Expense</button>
        )}
      {addExpense && (
        <div>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
                />
            </div>

            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number "
                min="0.01"
                step="0.1"
                value={enteredAmount}
                onChange={amountChangeHandler}
                />
            </div>

            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                value={enteredDate}
                max={new Date().toDateString()}
                onChange={dateChangeHandler}
                />
            </div>
          </div>
                {!isValid&&<p>Enter data to form</p>}
          <div className="new-expense__actions">
            <button type="submit" onClick={() => setAddExpense(false)}>
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </div>
      )}
    </form>
  );
};

export default ExpenseForm;
