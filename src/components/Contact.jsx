import React from 'react'

export default function Contact() {
  return (
    <div>
        <section id="contact">
            <div className="container my-5 py-5">
                <div className="row mb-5">
                    <div className="col-12">
                        <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                        <h1 className="display-6 text-center mb-4">Have Some <b>Question?</b></h1>
                        <hr className="w-25 mx-auto"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src="/assets/contact.jpg" alt="Contact" className="w-75"/>
                    </div>
                    <div className="col-md-6">
                        <p className="lead mb-4">Email</p>
                        <p className="lead mb-4">Contact No</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
