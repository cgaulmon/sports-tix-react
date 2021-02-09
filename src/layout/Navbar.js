import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

class Navbar extends React.Component {
    constructor() {
        super();
    } 
    render() {
        return (
            <div>
              <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="#">SportsTix</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home
          <span className="sr-only">(current)</span>
        </a>
      </li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><a href="#"><FontAwesomeIcon icon={faUser} /> Sign Up</a></li>
      <li>&nbsp;&nbsp;<a href="#"><FontAwesomeIcon icon={faSignInAlt} /> Login</a></li>
    </ul>
  </div>
</nav>
            </div>
        );
    }
}

export default Navbar;