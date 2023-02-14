import React from 'react';
import logo from '../../assets/logo.png';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" width={100} height={100} />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
