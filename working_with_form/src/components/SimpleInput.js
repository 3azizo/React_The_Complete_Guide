import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
const{
  value:enterdName,
  isValid:enteredNameIsValid,
  hasError:nameInputHasError,
  valueChangeHandler:nameChangeHandler,
  inputBlurHandler:nameBlurHandler
,reset:nameReset}= useInput(value => value.trim() !== "");
const{
  value:enterdEmail,
  isValid:enteredEmailIsValid,
  hasError:emailInputHasError,
  valueChangeHandler:emailChangeHandler,
  inputBlurHandler:emailBlurHandler,
  reset:emailReset}= useInput(value => value.includes("@"));

let formIsValid=false;

  if(enteredNameIsValid&&enteredEmailIsValid){
    formIsValid=true;
  }
const formSubmitHandler=(e)=>{
  e.preventDefault(); 
  if(!enteredNameIsValid||!enteredEmailIsValid)return;
  formIsValid=false
  nameReset();
  emailReset();
}

const nameInputClasses=nameInputHasError?"form-control invalid":"form-control";
const emailInputClasses=emailInputHasError?"form-control invalid":"form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input value={enterdName} type='text' id='name' onBlur={nameBlurHandler} onChange={nameChangeHandler} />
        {nameInputHasError&&<p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your email</label>
        <input value={enterdEmail} type='text' id='email' onBlur={emailBlurHandler} onChange={emailChangeHandler} />
        {emailInputHasError&&<p className="error-text">E-mail must not be empty and include @.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
