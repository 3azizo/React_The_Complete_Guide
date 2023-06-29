import { useState, useRef } from "react";
import styles from "./InputForm.module.css";
import ErrorModal from "./UI/ErrorModal";
const InputForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  //befor useing useRef hook
  // const [userName, setUserName] = useState("");
  // const [age, setAge] = useState("");
  const [isError, setIsError] = useState();
  const AddData = (e) => {
    e.preventDefault();
    const enterdName = nameInputRef.current.value;
    const enterdAge = ageInputRef.current.value;
    if (enterdName.trim().length === 0 || enterdAge.trim().length === 0) {
      setIsError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-emty values).",
      });
      return;
    }
    if (+enterdAge < 1) {
      setIsError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    // let dataObject = {
    //   id: Date.now(),
    //   name: userName,
    //   age: age,
    // };
    // props.onGetData(dataObject);
    props.onGetData(enterdName, enterdAge);
    // setUserName("");
    // setAge("");
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };
  const errorHandler = () => {
    setIsError(null);
  };

  return (
    <>
      {isError && (
        <ErrorModal
          title={isError.title}
          message={isError.message}
          onClicked={errorHandler}
        />
      )}
      <div className={styles.card}>
        <form onSubmit={AddData}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            // value={userName}
            // onChange={(e) => setUserName(e.target.value)}
            ref={nameInputRef}
          />
          <label htmlFor="age"> Age</label>
          <input
            id="age"
            type="number"
            // value={age}
            // onChange={(e) => setAge(e.target.value)}
            ref={ageInputRef}
          />

          <button type="submit" className={styles.button}>
            Add User
          </button>
        </form>
      </div>
    </>
  );
};
export default InputForm;
