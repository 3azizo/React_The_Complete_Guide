import { useContext, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout"
const Cart = (props) => {
  const [showForm,setShowForm]=useState(false);
  const [isSubmitting,setSubmitting]=useState(false);
  const[didSubmit,setDidSubmit]=useState(false)
  const ctx = useContext(CartContext);
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const hasItems = ctx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };

  const orderHandler=()=>{
    setShowForm(true)
  }
  const submitOrderHandler= async(userData)=>{
    setSubmitting(true);
     await fetch("https://react-http-b91fc-default-rtdb.firebaseio.com/orders.json",{
      method:"POST",
      body:JSON.stringify({
        user:userData,
        orderItems:ctx.items,
      })
    })
    setSubmitting(false);
    setDidSubmit(true);
    ctx.clearCart();
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const modalActions=<div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onHideCart}>
              Close
            </button>
            {hasItems && <button className={classes.button} onClick={orderHandler} >Order</button>}
        </div>

  const cartModalContent=<>
      {cartItems}
      <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
    {showForm&&<Checkout onConfirm={submitOrderHandler} onCancel={props.onHideCart}/>}
    {!showForm&&modalActions}
  </>

const isSubmittingModalContent=<p>sending order data...</p>;
const didSubmitModelContent=<>
    <p>Successfully sent the order!</p>;
    <div className={classes.actions}>
    <button className={classes.button} onClick={props.onHideCart}>Close</button>
    </div>
</> 
  return (
    <Modal onClose={props.onHideCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModelContent}
    </Modal>
  );
};
export default Cart;
