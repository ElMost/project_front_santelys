// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import logo from '../../assets/logo.png';
// import '../navbar/NavBar.css';

// const NavBar = () => {
//   const [navBar, setNavBar] = useState(false);
//   const [isConnected, setIsConnected] = useState(false);

//   const handleLogin = () => {
//     setIsConnected(!isConnected);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg  fixed-top shadow contain">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="/">
//           <img src={logo} alt="logo" width={100} height={100} />
//         </a>
//         <div className="nb-1 me-1 mx-2">
//           <NavLink to="/devis" className="btn btn-danger">
//             Devis gratuit
//           </NavLink>
//         </div>
//         <button
//           className="navbar-toggler me-3"
//           type="button"
//           onClick={() => setNavBar(!navBar)}
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className={`collapse navbar-collapse ${navBar ? 'show' : ''}`}>
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <NavLink to={'about'} className="nav-link">
//                 Qui sommes-nous ?
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink to={'nos_services'} className="nav-link">
//                 Nos services
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink to={'notre_engagement'} className="nav-link">
//                 Notre engagement
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink to={'postuler'} className="nav-link">
//                 Postuler
//               </NavLink>
//             </li>
//             {isConnected ? (
//               <li className="nav-item">
//                 <NavLink to={'dashboard'} className="nav-link">
//                   Tableau de bord
//                 </NavLink>
//               </li>
//             ) : null}
//           </ul>
//           <div className="d-flex ">
//             {!isConnected ? (
//               <div className="nb-1 me-2">
//                 <NavLink to={'/login'} className="btn btn-outline-primary">
//                   Connexion
//                 </NavLink>
//               </div>
//             ) : null}
//             {/* <div className="nb-1 me-2">
//               <NavLink to="demande" className="btn btn-danger">
//                 Devis gratuit{' '}
//               </NavLink>
//             </div> */}
//           </div>
//           {isConnected ? (
//             <button className="btn btn-outline-danger" onClick={handleLogin}>
//               Déconnexion
//             </button>
//           ) : null}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;


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
    <nav className="navbar navbar-expand-lg  fixed-top shadow contain">
      <div className="container-fluid px-0">
        <div className="d-flex align-items-center justify-content-between w-100">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" width={85} height={85} />
          </a>
          <div className="ms-auto me-4">
            <NavLink to="/devis" className="btn btn-danger">
              Devis gratuit
            </NavLink>
          </div>
          <button
            className="navbar-toggler order-3"
            type="button"
            onClick={() => setNavBar(!navBar)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className={`collapse navbar-collapse ${navBar ? 'show' : ''}`}>
         <ul className="navbar-nav ms-auto mb-2 mb-lg-0 custom-nav">

            <li className="nav-item">
              <NavLink to={'about'} className="nav-link">
                A propos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'nos_services'} className="nav-link">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'engagement'} className="nav-link">
                Engagement
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
                  Mes services
                </NavLink>
              </li>
            ) : null}
          </ul>
          <div className="d-flex">
            {!isConnected ? (
              <div className="nb-1 me-2">
                <NavLink to={'/login'} className="btn btn-outline-primary">
                  Connexion
                </NavLink>
              </div>
            ) : null}
          </div>
          {isConnected ? (
            <button
              className="btn btn-outline-danger me-2"
              onClick={handleLogin}
            >
              Déconnexion
            </button>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
