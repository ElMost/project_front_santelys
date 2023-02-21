import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.png';
function Footer() {
  return (
    <footer className="bottom-0 fixed overflow-hidden  w-full    bg-[#E8E4D9] rounded-lg shadow md:px-6 md:py-3  mt-5">
      <div className="flex sm:items-center justify-between">
        <ul className=" items-center mb-6 text-sm text-[#6D625C] justify-center sm:mb-0 ">
    
          <li>
            <NavLink to="contact">Nous contacter </NavLink>
          </li>
          <li>
            <NavLink to="postuler">postuler</NavLink>
          </li>
        </ul>

            <img src={logo} alt="logo santélys"  width={90}/>
      
      </div>
    </footer>
  );
}

export default Footer;
