import React from 'react'

import './styles/SideDrawer.css'

class SideDrawer extends React.Component {
    
    render() {
        return (
           <nav className ="side-drawer">
               <ul>
                   <li>
                       <a href="/">Inicio</a>
                   </li>
                   <li>
                       <a href="/">Sobre miS</a>
                   </li>
                   <li>
                       <a href="/">Portafolio</a>
                   </li>
               </ul>
           </nav>
        );
    }
}

export default SideDrawer;