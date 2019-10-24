import React from "react";

import Modal from "./Modal";
import "./styles/Certificates.css";

import ReactJS from "../../images/certificates/ReactJS.png";
import SqlMySql from "../../images/certificates/Sql-MySql.png";
import FundamentosJavaScript from "../../images/certificates/FundamentosJavaScript.png";

class Certificates extends React.Component {
state = {
  img: ReactJS,
  modalIsOpen: false
}

onOpenModal1 = e => {
  this.setState({
    img: ReactJS,
    modalIsOpen: true
  })
  console.log("prueba1")
}
onOpenModal2 = e => {
  this.setState({
    img: SqlMySql,
    modalIsOpen: true
    
  })
  console.log("prueba2")
}
onOpenModal3 = e => {
  this.setState({
    img: FundamentosJavaScript,
    modalIsOpen: true
  })
  console.log("prueba3")
}
onCloseModal = e => {
  this.setState({
    modalIsOpen: false
  })
}

  render() {
    return (
      <div className="container CertificatesContainer">
        <h2>Certificados</h2>
        <div className="row m-3">
          <div className="col-12 col-md-4 mt-3">
            <div className="card Certifiacatescard" onClick={this.onOpenModal1}  >
              <img src={ReactJS} alt="ReactJS" />
              <div className="card-body">
                <p className="card-text">ReactJS</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mt-3">
            <div className="card Certifiacatescard" onClick={this.onOpenModal2}>
              <img src={SqlMySql} alt="SqlMySql" />
              <div className="card-body">
                <p className="card-text">Sql - MySql</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mt-3">
            <div className="card Certifiacatescard" onClick={this.onOpenModal3}>
              <img
                src={FundamentosJavaScript}
                alt="ReaFundamentosJavaScriptctJS"
              />
              <div className="card-body">
                <p className="card-text">Fundamentos JavaScript</p>
              </div>
            </div>
          </div>
          <Modal isOpen={this.state.modalIsOpen} onClose={this.onCloseModal}>
            <img className="ModalImg" src={this.state.img} alt="Certificates" />
          </Modal>
        </div>
      </div>
    );
  }
}
export default Certificates;
