import React, { Component } from 'react'

export default class Header extends Component {
  constructor() {
    super()
    this.menuLista = React.createRef()
    this.menuToggleIcon = React.createRef()
    this.state = {isToggleOn: false};
}

changeIcon =() => {
  this.setState(state => ({
    isToggleOn: !state.isToggleOn
  }));
} 

  render() {

    return (
      <>
      <header>
        <div className="menu-toggle" onClick={this.changeIcon}>
        <i className={this.state.isToggleOn ? 'fa fa-times':'fa fa-bars'}></i>
      </div>      
 <div className="logo">
     <a href="#welcome-section">Yadier</a>
 </div>
 <nav id="navbar" className="nav" >
   <ul className={this.state.isToggleOn ? 'nav-list show' :"nav-list"}
    onClick={ this.state.isToggleOn ? this.changeIcon: null }  >
     <li>
       <a href="#welcome-section">Hola</a>
     </li>
     <li>
       <a href="#projects">Proyectos</a>
     </li>
     <li>
       <a href="#services">Servicios</a>
     </li>
     <li>
       <a href="#contact">Contacto</a>
     </li>
   </ul>
   
 </nav>
 <button>Descargar currículum</button>
 
 </header>
         </>
    )
  }
}

