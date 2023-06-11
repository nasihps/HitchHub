import React from 'react'
import About from './About';
import Contact from './Contact';
import { NavLink } from 'react-router-dom';
export default function Home() {
  return (
    <div>
        <section id="home">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-5 py-5">
                        <h1 className="display-4 fw-bolder mb-4 text-center text-white">Happy Hiking !</h1>
                        <p className="lead text-center fs-4 mb-5 text-white">A platform to connect hitchhikers and travelers together to ease out the uncertainties involved during hitch hiking.</p>
                    <div className="buttons d-flex justify-content-center">
                        <NavLink to="/register" className="btn btn-outline-light me-4 rounded-pill px-4 py-2">Get Started</NavLink>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <About/>
        <Contact/>
    </div>
  )
}   
