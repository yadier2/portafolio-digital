import React, { Component } from 'react'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'
import Services from '../pages/Services'
import Welcome from '../pages/Welcome'

export default class Main extends Component {

    constructor({children}){
        super()
    }


    render() {
        return (
            <>
           <Welcome/>
           <Projects/>
           <Services/>
           <Contact/>
            </>
        )
    }
}
