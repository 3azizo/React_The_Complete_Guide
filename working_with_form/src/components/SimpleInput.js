import {useState, useEffect} from "react"
const SimpleInput = (props) => {
const [enterdName,setEnterdName]=useState("");
const [enteredNameISvalid,setEnteredNameIsvalid]=useState(false);
const [enteredNameTouched,setEnteredNameTouched]=useState(false)

useEffect(()=>{
  if(enteredNameISvalid){
    console.log("Name Input iS valid!");
  }
},[enteredNameISvalid])
const inputChangeHandler=(e)=>{
  setEnterdName(e.target.value);
}

const nameInputBlurHandler=event=>{
  setEnteredNameTouched(true);
  if(enterdName.trim() ===""){
    setEnteredNameIsvalid(false);

    return;
  }
  setEnteredNameIsvalid(true)
}

const formSubmitHandler=(e)=>{
  e.preventDefault(); 
  //    setEnteredNameTouched(true);
  // if(enterdName.trim() ===""){
  //   setEnteredNameIsvalid(false);
  //   return
  // };
  // setEnteredNameIsvalid(true);
  // console.log(enterdName);
  setEnterdName("");
}
const nameInputInvalid=!enteredNameISvalid&&enteredNameTouched
const nameInputClasses=nameInputInvalid?"form-control invalid":"form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input value={enterdName} type='text' id='name' onBlur={nameInputBlurHandler} onChange={inputChangeHandler} />
        {nameInputInvalid&&<p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
