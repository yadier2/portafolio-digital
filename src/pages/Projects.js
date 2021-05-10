import React from 'react'
import mascota from '../images/app-mascota.png';
import imc from '../images/app-imc.png';
import documentacion from '../images/app-documentacion.png';

function Projects() {
    return (
        <>
          <section id="projects" className="projects-section">
    <div className="infoText-projects">
        <h2 className="projects-section-header">Parece magia, funciona con código.</h2>
        <p>A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles.</p>
    </div>

  <div className="projects-grid">
    <div className="card1">
      <img
        className="project-image"
        src={mascota}
        alt="project"
      />
      <p className="project-title">
        <span className="code">&lt;</span>
        Mascotas App 
        <span className="code">&#47;&gt;</span>
      </p>
      <div className="action-ver-project">
          <h2>Mascotas Adopcion</h2>
          <p>Mascotas adopcion es una app en la que podrar conacer y adoptar mascotas. Compartirás bellos
            momentos con estos amiguitos fieles, tiernos y llenos
            de amor para regalar.</p>
          <div className="project-enlaces">
            <a
            href="https://yadier2.github.io/mascotas/"
            target="_blank"  rel="noreferrer"
            className="project project-tile btn "
          > Ver proyecto completo </a>
             
              <a
              href="https://github.com/yadier2/mascotas"
              target="_blank"  rel="noreferrer"
              className="project project-tile btn2 "
            > Ver código </a>
          </div>
      </div>
    </div>
    <div className="card2">
        <img
          className="project-image"
          src={imc}
          alt="project"
        />
        <p className="project-title">
          <span className="code">&lt;</span>
          IMC Page
          <span className="code">&#47;&gt;</span>
        </p>
        <div className="action-ver-project">
            <h2>IMC</h2>
            <p>IMC es una aplicacion web en la que podra obtener su índice de masa corporal de manera rapida.</p>
            <div className="project-enlaces">
              <a
              href="https://imc-app-react.vercel.app/"
              target="_blank"  rel="noreferrer"
              className="project project-tile btn"
            > Ver proyecto completo </a>
               
                <a
                href="https://github.com/yadier2/imc-app-react"
                target="_blank"  rel="noreferrer"
                className="project project-tile btn2 "
              > Ver código </a>
            </div>
        </div>
      </div>
      <div className="card3">
        <img
          className="project-image"
          src={documentacion}
          alt="project"
        />
        <p className="project-title">
          <span className="code">&lt;</span>
          Documentacion Page
          <span className="code">&#47;&gt;</span>
        </p>
        <div className="action-ver-project">
            <h2>Documentacion Git</h2>
            <p>Documentacion Git es una guia en la que podras conocer de forma rapida y eficiente como trabajar con un sistema de control de versiones.</p>
            <div className="project-enlaces">
              <a
              href="https://yadier2.github.io/documentacion-tecnica/
              "
              target="_blank"  rel="noreferrer"
              className="project project-tile btn "
            > Ver proyecto completo </a>
               
                <a
                href="https://github.com/yadier2/documentacion-tecnica"
                target="_blank"  rel="noreferrer"
                className="project project-tile btn2"
              > Ver código </a>
            </div>
        </div>
      </div>
  </div>

  <a
    href="https://github.com/yadier2/"
    className="btn btn-show-all"
    target="_blank"  rel="noreferrer"
    >Ver más proyectos <i className="fas fa-chevron-right"></i></a>
</section>  
        </>
    )
}

export default Projects
