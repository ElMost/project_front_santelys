import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import '../navbar/NavBar.css';

const NavBar = () => {
  const [navBar, setNavBar] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const handleLogin = () => {
    setIsConnected(!isConnected);
  };

  return (
    <nav className="navbar navbar-expand-lg  shadow contain">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" width={80} height={80} />
        </a>
        <div className="nb-1 me-1 mx-2">
          <NavLink to="/devis" className="btn btn-danger">
            Devis gratuit
          </NavLink>
        </div>
        <button
          className="navbar-toggler me-3"
          type="button"
          onClick={() => setNavBar(!navBar)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${navBar ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to={'about'} className="nav-link">
                Qui sommes-nous ?
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'nos_services'} className="nav-link">
                Nos services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'engagement'} className="nav-link">
                Notre engagement
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'postuler'} className="nav-link">
                Postuler
              </NavLink>
            </li>
            {isConnected ? (
              <li className="nav-item">
                <NavLink to={'dashboard'} className="nav-link">
                  Tableau de bord
                </NavLink>
              </li>
            ) : null}
          </ul>
          <div className="d-flex ">
            {!isConnected ? (
              <div className="nb-1 me-2">
                <NavLink to={'/login'} className="btn btn-outline-primary">
                  Connexion
                </NavLink>
              </div>
            ) : null}
            {/* <div className="nb-1 me-2">
              <NavLink to="demande" className="btn btn-danger">
                Devis gratuit{' '}
              </NavLink>
            </div> */}
          </div>
          {isConnected ? (
            <button className="btn btn-outline-danger" onClick={handleLogin}>
              Déconnexion
            </button>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
