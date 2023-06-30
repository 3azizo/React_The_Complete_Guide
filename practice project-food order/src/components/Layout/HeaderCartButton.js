import { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const [btnIsHighligted, setBtnIsHighligted] = useState(false);
  const ctx = useContext(CartContext);
  const { items } = ctx;

  const numberItems = ctx.items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighligted ? classes.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) return;
    setBtnIsHighligted(true);
    const timer = setTimeout(() => {
      setBtnIsHighligted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberItems}</span>
    </button>
  );
};
export default HeaderCartButton;
