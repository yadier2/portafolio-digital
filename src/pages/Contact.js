import React from 'react'
import { useForm } from '@formspree/react';
function ContactForm() {
    const [state, handleSubmit] = useForm("xleajrrg");
    if (state.succeeded) {
        return <h2 className="registrado">¡Gracias por unirte!</h2>;
    } 
    return (
        <form onSubmit={handleSubmit}>
        <p>Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto.</p>
        <input
         type="text"
         id="name"
         name="name"
         required 
         placeholder="Nombre completo" />
         

        <input
         id="email"
         type="email" 
         name="email"
         required
        placeholder="Correo electrónico" />
        
        <textarea
        id="message"
        name="message"
        required
        rows="5" 
        placeholder="Mensaje"
        />
      
        <input className="enviar" type="submit" value="Enviar mensaje" disabled={state.submitting}/>
    </form>

    )
}

function Contact() {
    return (
        <>
            <section id="contact" className="contact-section">
                <div className="contact-section-header">
                    <h2>Trabajemos juntos...</h2>
                    <p>¿Cómo se toma su café?</p>
                </div>
                <div className="contact-links">

                    <a
                        id="profile-link"
                        href="https://github.com/yadier2/"
                        target="_blank" rel="noreferrer"
                        className="btn contact-details"
                    ><i className="fab fa-github"></i> GitHub</a
                    >
                    <a
                        href="https://github.com/yadier2/"
                        target="_blank" rel="noreferrer"
                        className="btn contact-details"
                    ><i className="fab fa-twitter"></i> Twitter</a
                    >
                    <a href="mailto:" className="btn contact-details"
                    ><i className="fas fa-at"></i> Send a mail</a
                    >
                    <a href="tel:3117552266" className="btn contact-details"
                    ><i className="fas fa-mobile-alt"></i> Call me</a
                    >
                </div>
               {/*  form*/}
               <ContactForm />
            </section>
        </>
    )
}

export default Contact
