import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { NavLink } from 'react-router-dom';





export default function Navbar() {
  return (
    <>
      <div id="head">

        <div id="header">

          <div id="head1" >

            <ul className="nav justify-content-end">

              <li class="nav-item">
                <NavLink class="nav-link disabled" to="/reach" tabindex="-1" aria-disabled="true" id="head1" ><h3>Follow us:</h3></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/reach" id="head1"><FacebookIcon /> </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="#" id="head1"><TwitterIcon /></a>
              </li>

              <li className="nav-item">
                <a className="nav-link" to="#" id="head1"><InstagramIcon /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="#" id="head1"><LinkedInIcon /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="#" id="head1"><WhatsAppIcon /></a>
              </li>









              <li className="nav-item">
                <a className="nav-link" to="#" id="head1">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="#" id="head1">FAQ</a>
              </li>

              <li class="nav-item">
                <a class="nav-link disabled" to="#" tabindex="-1" aria-disabled="true" id="head1" >210,19-A, MPSEDC IT Park, Electronic Complex,Indore(MP)</a>
              </li>
            </ul>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/"><img src="https://www.engineermaster.in/assets/img/emaster-blue.png" alt="em logo" id="emlogo" /></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="d-flex">

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                  <li className="nav-item">
                    <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink class="nav-link" to="/blog">blog</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink class="nav-link" to="/reach">reach us</NavLink>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Call us: +18587269115</a>
                  </li>









                </ul>

              </div>
            </div>
          </div>
        </nav>
      </div>






    </>
  )
}
