import React from 'react'

function Services() {
    return (
        <>
         <section id="services" className="services-section">
  <h2>Servicios</h2>
  <div className="services-cards">
    <div className="card-service">
      <h3>Diseño</h3>
      <p>Experiencia de usuario</p>
      <p>Interfaz de usuario</p>
      <p>Aplicaciones web</p>
      <p>Prueba de concepto</p>
      <button>Ver servicios de diseño <i className="fas fa-arrow-right"></i></button>
    </div>
    <div  className="card-service">
      <h3>Desarrollo</h3>
      <p>Aplicaciones móviles</p>
      <p>Sitios web</p>
      <p>Aplicaciones web progresivas</p>
      <button>Ver servicios de diseño <i className="fas fa-arrow-right"></i></button>
    </div>
    <div  className="card-service">
      <h3>Marca</h3>
      <p>Identidad de la marca</p>
      <p>Estrategia de marca</p>
      <button>Ver servicios de diseño <i className="fas fa-arrow-right"></i></button>
      
    </div>
  </div>
</section>
        </>
    )
}

export default Services
