import React from "react";
import ReactDOM from "react-dom";

import "./styles/Modal.css";
const Modal = props => {
  if (!props.isOpen) {
    return null;
  }
  return (
    <div className="container" onClick = {props.onClose}>
      <div className="row">
        <div className="col">
          {ReactDOM.createPortal(
            <div className="Modal">
              <div className="ModalContainer">
                <button onClick = {props.onClose} className="ModalClose">x</button>
                {props.children}
              </div>
            </div>,
            document.getElementById("modal")
          )}
        </div>
      </div>
    </div>
  );
};
export default Modal;
