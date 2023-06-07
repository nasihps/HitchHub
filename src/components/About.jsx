import React from 'react'

export default function About() {
  return (
    <div>
        <section id="about">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/assets/about1.jpg" alt="About" className="w-75 mt-5" />
                    </div>
                    <div className="col-md-6">
                        <h3 className="fs-5 mb-0 pt-5">About Us</h3>
                        <h1 className="display-6 mb-2">Who <b>We</b> Are</h1>
                        <hr className="w-50"/>
                        <p className="lead mb-4">A joint platform connects hitchhikers and automobile travelers, reducing uncertainty in their journeys and potentially replacing traditional taxi systems. It allows people to travel together at little or no cost, providing companionship and alleviating solitude. This platform aims to make hitchhiking easier and could become a popular mode of transportation in the future.</p>
                        <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
                        <button className="btn btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
