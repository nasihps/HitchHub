import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
        <footer className="footer text-white bg-primary">
          <div className="container">
            <footer className="py-5">
              <div className="row">
                <div className="col-10">
                  <h4>HitchHub</h4>
                </div>
                <div className="col-1">
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <NavLink to="/" className="nav-link p-0 text-white">Home</NavLink>
                    </li>
                    <li className="nav-item mb-2">
                      <NavLink to="/about" className="nav-link p-0 text-white">About</NavLink>
                    </li>
                    <li className="nav-item mb-2">
                      <NavLink to="/contact" className="nav-link p-0 text-white">Contact</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-flex justify-content-between pt-4 mt-4 border-top">
                <p>2023 Company, Inc. All rights reserved.</p>
              </div>
            </footer>
          </div>
        </footer>
    </div>
  )
}
