import classes from './Checkout.module.css';
import { useState,useRef } from 'react';

const isEmpty=value=>value.trim()==="";
const isFiveChars=value=>value.trim().length===5;

const Checkout = (props) => {
    const [formInputIsValidity,setFormInputIsValidity]=useState({
        name:true,
        street:true,
        city:true,
        postalCode:true,
    })

    const nameRef=useRef(); 
    const streetRef=useRef(); 
    const postalRef=useRef(); 
    const cityRef=useRef(); 

    const confirmHandler = (event) => {
        event.preventDefault();
  
        const enteredName=nameRef.current.value;
        const enteredStreet=streetRef.current.value;
        const enteredPostal=postalRef.current.value;
        const enteredcity=cityRef.current.value;
    
        const enteredNameIsValid=!isEmpty(enteredName); 
        const enteredStreetIsValid=!isEmpty(enteredStreet); 
        const enteredPostalIsValid=!isEmpty(enteredPostal); 
        const enteredCityIsValid=isFiveChars(enteredcity);

        setFormInputIsValidity({
            name:enteredNameIsValid,
            street:enteredStreetIsValid,
            city:enteredCityIsValid,
            postalCode:enteredPostalIsValid,
        })

        const formIsValid= enteredNameIsValid&&
        enteredStreetIsValid&&
        enteredPostalIsValid&&
        enteredCityIsValid;

        if(!formIsValid){
            return;
        }
        //submit cart data
        props.onConfirm({
            name:enteredName,
            street:enteredStreet,
            city:enteredStreet,
            postalCode:enteredPostal
        });
    };

    const nameClasses=`${classes.control} ${formInputIsValidity.name?"":classes.invalid}`;
    const streetClasses=`${classes.control} ${formInputIsValidity.street?"":classes.invalid}`;
    const postalClasses=`${classes.control} ${formInputIsValidity.postalCode?"":classes.invalid}`;
    const cityClasses=`${classes.control} ${formInputIsValidity.city?"":classes.invalid}`;
    console.log(nameClasses);

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameRef} type='text' id='name' />
        {!formInputIsValidity.name&&<p>Enter your name</p>}
      </div>
      <div className={streetClasses}>
        <label htmlFor='street'>Street</label>
        <input ref={streetRef} type='text' id='street' />
        {!formInputIsValidity.street&&<p>Enter your street</p>}
      </div>
      <div className={postalClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input ref={postalRef} type='text' id='postal' />
        {!formInputIsValidity.postalCode&&<p>postal Code must de 5 number</p>}
      </div>
      <div className={cityClasses}>
        <label htmlFor='city'>City</label>
        <input ref={cityRef} type='text' id='city' />
        {!formInputIsValidity.city&&<p>Enter your city</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;