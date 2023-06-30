import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./mealItemForm.module.css";
const MealItemForm = (props) => {
  const [amountIsvalid, setamountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHanler = (event) => {
    event.preventDefault();
    const enteredAmount = +amountInputRef.current.value;
    console.log(enteredAmount);
    if (
      enteredAmount.toString().trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setamountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmount);
  };
  return (
    <form className={classes.form} onSubmit={submitHanler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsvalid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};
export default MealItemForm;
