import React from "react";

import "./styles/About.css";

import Avatar from "../../images/Dieghoatc.jpg";

const About = props => {
    return (
        <div className="container">
        <div className="row">
          <div className="col-12 mt-3 About-Content">
            <img className = "About-Img mt-3 mb-3" src={Avatar} alt="Avatar" />
            <h2 className = "AboutName">Diego Armando Tejedor Cortés</h2>
            <h2 className = "About2">Software Developer</h2>
            <p className = "AboutProfession">Estudiante de por vida, con gusto por el desarrollo de software, apasionado por la investigación y aprendizaje de nuevas tecnologías que me permitan un crecimiento personal y profesional, para aportar el conocimiento a nuestra sociedad. Desarrollando las funciones en equipo, con iniciativa, innovación, capacidad de análisis, adaptabilidad a los cambios, planificación y orientación al resultado.</p>
            <p className = "AboutLocation">Bogotá DC - Colombia</p>
          </div>
        </div>
      </div>
    );
  }

export default About