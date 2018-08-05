import React from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './header.css';
import api from '../../api/user';
import { Route, Link, Switch } from 'react-router-dom';


/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: []
    },
      api.loadUser();
  }

  handleLogoutClick(e) {
    api.logout()
  }
  render() {
    return (
      <nav className="teal lighten-1">
        <div className="nav-wrapper">
          <a href="" className="brand-logo left">
          <img src={require('../../images/farmer.png')} width="50" height="50" />
          </a>
          <a href="#" data-activates="mobile-demo" className="button-collapse right">
            <i className="material-icons">menu</i>
          </a>
          <ul id="mobile-demo" className="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/appointment">Appointment</Link>
            </li>
            <li>

              <Link to="/service">service</Link>
            </li>
            <li>
              {!api.isLoggedIn() && <Link to="/Register">Register</Link>}
              </li>
              <li>
              {!api.isLoggedIn() && <Link to="/loginPage">Login</Link>}
              </li>
              <li>
              {api.isLoggedIn() && <Link to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</Link>}
            </li>
          </ul>
        </div>
      </nav>
    );
  };
}




export default Header;