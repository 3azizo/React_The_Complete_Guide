import useInput from "../hooks/use-input";
const BasicForm = (props) => {
  const {
    value:enteredName,
    isValid:nameIsvalid,
    hasError:nameHasError,
    valueChangeHandler:nameChangeHandler,
    inputBlurHandler:nameBlurHandler,
    reset:resetNameInput
  }=useInput((value)=>value.trim()!=="");
  const {
    value:enteredLast,
    isValid:lastIsvalid,
    hasError:lastHasError,
    valueChangeHandler:lastChangeHandler,
    inputBlurHandler:lastBlurHandler,
    reset:resetLastInput
  }=useInput((value)=>value.trim()!=="");
  const {
    value:enteredEmail,
    isValid:emailIsvalid,
    hasError:emailHasError,
    valueChangeHandler:emailChangeHandler,
    inputBlurHandler:emailBlurHandler,
    reset:resetEmailInput
  }=useInput((value)=>value.includes("@"));

  let formIsValid=false;

  if(nameIsvalid &&emailIsvalid&&lastIsvalid){
    formIsValid=true;
  }

const SubmitHandler=(e)=>{
  e.preventDefault()
  if(!formIsValid)return;
  formIsValid=false;
  console.log("Submitted!");
  console.log(enteredName,enteredLast,enteredEmail)
  resetNameInput();
  resetLastInput();
  resetEmailInput();
}

let nameClasses=nameHasError?"form-control invalid":"form-control"
let lastClasses=lastHasError?"form-control invalid":"form-control"
let emailClasses=emailHasError?"form-control invalid":"form-control"
  return (
    <form onSubmit={SubmitHandler}>
      <div className='control-group'>
        <div className={nameClasses}>
          <label htmlFor='name'>First Name</label>
          <input value={enteredName} type='text' id='name' 
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          />
          {nameHasError&& <p className="error-text">Enter Your Name</p>}
        </div>
        <div className={lastClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name'  onChange={lastChangeHandler} value={enteredLast} onBlur={lastBlurHandler}  />
        {lastHasError&&<p className="error-text">Enter Last Name</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail}/>
        {emailHasError&& <p className="error-text">Enter Valid E-mail include "@"</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
