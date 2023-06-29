import React from "react";
import styles from "../InputForm.module.css";
import { createPortal } from "react-dom";
import classes from "./ErrorModal.module.css";
const ErrorModal = (props) => {
  return createPortal(
    <div>
      <div className={classes.backdrop} onClick={props.onClicked}></div>
      <div className={`${styles.card} ${classes.modal}`}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <button className={styles.button} onClick={props.onClicked}>
            Okay
          </button>
        </footer>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};
export default ErrorModal;
