import React from 'react'
import user from '../images/user.jpg';
function Welcome() {
    return (
        <>
            <section id="welcome-section" className="welcome-section">
                <div className="welcome-image-div">
                    <img className="img-welcome" src={user} alt="" />
                </div>

                <div className="welcome-infoText">
                    <h1>¡Hola a todos!</h1>
                    <h3>Soy Yadier Caicedo </h3>
                    <p>
                        Developer que le encanta implementar diseños que
                        inspiran y atraen a las personas.
                    </p>
                    <i className="fas fa-arrow-down"></i>
                </div>
            </section>

        </>
    )
}

export default Welcome
