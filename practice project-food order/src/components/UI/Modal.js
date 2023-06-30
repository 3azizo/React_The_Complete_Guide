import { createPortal } from "react-dom";
import classses from "./Modal.module.css";
const Backdorp = (props) => {
  return <div className={classses.backdrop} onClick={props.onClose}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classses.modal}>
      <div className={classses.content}>{props.children}</div>
    </div>
  );
};
const PortalEl = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdorp onClose={props.onClose} />, PortalEl)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, PortalEl)}
    </>
  );
};
export default Modal;
