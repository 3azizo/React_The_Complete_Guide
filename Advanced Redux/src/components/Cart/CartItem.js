import classes from "./CartItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";
const CartItem = (props) => {
  const { id, name: title, quantity, totalPrice: total, price } = props.item;
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items);

  const addHandler = () => {
    dispatch(cartAction.addItemToCart(props.item));
  };

  const removeHandler = () => {
    dispatch(cartAction.removeItemFromCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeHandler}>-</button>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
