import React from 'react'

import './styles/DrawerToggleButton.css'

class DrawerToggleButton extends React.Component{
    render()   {
        return (
            <button className = "toogle-button" onClick = {this.props.click}>
                <div className="toogle-button_line"></div>
                <div className="toogle-button_line"></div>
                <div className="toogle-button_line"></div>
            </button>
        )
    }

}
export default DrawerToggleButton;