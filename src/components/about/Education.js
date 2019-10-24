import React from "react";

import './styles/Education.css'

const Education = props => {
  return (
    <div className="container EducationContainer">
      <div className="row">
        <h2>Educación</h2>
        <div className="col-12 mt-3">
          <h3>Ingeniero en Telecomunicaciones</h3>
          <p>Universidad Distrital Francisco José de Caldas</p>
        </div>
        <div className="col">
          <h3>Tecnólogo Electronico</h3>
          <p>Universidad Distrital Francisco José de Caldas 2015</p>
        </div>
      </div>
    </div>
  );
};
export default Education;
