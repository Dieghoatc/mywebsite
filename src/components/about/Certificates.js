import React from "react";

import Modal from "./Modal";
import "./styles/Certificates.css";

import ReactJS from "../../images/certificates/ReactJS.png";
import SqlMySql from "../../images/certificates/Sql-MySql.png";
import FundamentosJavaScript from "../../images/certificates/FundamentosJavaScript.png";

const Certificates = props => {
  return (
    <div className="container CertificatesContainer">
      <h2>Certificados</h2>
      <div className="row m-3">
        <div className="col-md-4">
          <div className="card" onClick={props.onOpenModal}>
            <img src={ReactJS} alt="ReactJS" />
            <div className="card-body">
              <p className="card-text">Curso - ReactJS</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={SqlMySql} alt="SqlMySql" />
            <div className="card-body">
              <p className="card-text">Curso - Sql-MySql</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src={FundamentosJavaScript}
              alt="ReaFundamentosJavaScriptctJS"
            />
            <div className="card-body">
              <p className="card-text">Fundamentos JavaScript</p>
            </div>
          </div>
        </div>
        <Modal isOpen={props.modalIsOpen} onClose={props.onCloseModal}>
          <img className="ModalImg" src={ReactJS} alt="Certificates" />
        </Modal>
      </div>
    </div>
  );
};
export default Certificates;
