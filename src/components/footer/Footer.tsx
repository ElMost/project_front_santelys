import React from 'react';
import { NavLink } from 'react-router-dom';
import '../footer/Footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer
      className="
    bg-light rounded-lg shadow footer "
    >
      <div
        className="
      row d-flex justify-content-between align-items-center flex-row flex-md-row 
      foot"
      >
        <div className="col-8 text-start text-md-start mb-3 mb-md-0">
          <ul className="list-unstyled justify-content-center justify-content-md-start mb-0 text-muted">
            <li>
              <NavLink
                to="notreengagement"
                className="bg-white rounded-lg shadow text-muted navlink"
              >
                Nous contacter
              </NavLink>
            </li>
            <li>
              <NavLink
                to="postuler"
                className="bg-white rounded-lg shadow text-muted navlink"
              >
                Postuler
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-4  text-end text-md-end">
          <img src={logo} alt="logo" width={100} height={100} />
        </div>
      </div>
      <p className="col-12 mb-0 text-center copyright">
        © 2021 Santelys. Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
