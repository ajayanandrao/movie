import React from 'react'
import './Navbar.scss';
import NavImg from './img/r.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid ">
          <Link className="navbar-brand" id="ajay" to="/">
            <img src={NavImg} width="40" className="navImg" alt="" />
            Movies</Link>

          <button className="navbar-toggler" id="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="navul">
              <div className="c" id="c">
                <ul className="navbar-nav " id="ul">
                  <li className="nav-item">
                    <Link className="nav-link " to="/">Disclaimer
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./About.html">
                      Join Our Group !</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="./Signin.html">Movie Request Page</a>
                  </li>

                </ul>
              </div>
            </div>

            <div className="navbar-collapse justify-content-end"></div>

          </div>

        </div>
      </nav>
    </>
  )
}

export default Navbar