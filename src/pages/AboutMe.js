import React from 'react'

import './styles/AboutMe.css'

class AboutMe extends React.Component {
    render(){
        return(
            <div className="container mt-3">
                <div className="row">
                    <div className="col-3">
                    </div>
                    <div className="col-7 aboutme">
                        <h1>About me</h1>
                        <p>My name is Diego, im from Bogotá - Colombia for the world. Student for life and i love the phrase "Life long learn". Im Telecommunications engineer and Software Developer, and like practice the football and tennis. With musical tastes since Popular Music, i love Electronic Music, Punk, Reggae Music, Salsa, Rap and Rock and at school , i listened a lot Vallenato. "Solo practicaba mi ingles" :v</p>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        );
    }
}
export default AboutMe
