import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assests/logo.png';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fw-bold bg-info">
  <a className="navbar-brand" href="/index.js"><img src={logo} alt="logo" width={50} height={50} className="m-2 rounded-circle"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/index.jsnavbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/addnumbers">Add Numbers</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">Biography</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/latestnews">3rd party Api</Link>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default NavBar