import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    
    return (
        <nav className="w-full bg-[#E8E4D9] shadow ">
            <div className="justify-between  mx-auto lg:items-center lg:flex ">
                <div>
                    <div className="flex items-center justify-between py-1 lg:py-5 lg:block">
                        <a href="" className="relative left-0 ">
                           <img width={70} height={70} src={logo} />
                        </a>
                    
           
        
                        <div className="lg:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-lg outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-[#6D625C]"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-[#6D625C]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="pt-2 items-center justify-center space-y- lg:grid grid-cols-6 lg:space-x-6 lg:space-y-0">
                        <li
                       className="px-3 py-2  text-white text-center bg-red-500 rounded-lg shadow hover:bg-gray-100">
                          <NavLink to="demande">Devis Gratuit</NavLink>
                        </li>
                      
                        <NavLink to="quisommesnous"> <li className="text-[#6D625C]  text-center hover:text-2xl lg:rounded-lg  w-40 lg:px-3 lg:py-2  ">
                           A propos
                            </li></NavLink>
                            <NavLink to="nosservices"> <li className="text-[#6D625C]  text-center hover:text-2xl lg:rounded-lg lg:px-3 lg:py-2  ">
                         Services 
                            </li></NavLink>
                            <NavLink to="notreengagement"> <li className="text-[#6D625C]  text-center hover:text-2xl  lg:rounded-lg lg:px-3 lg:py-2  ">
                         Engagement 
                            </li></NavLink>
                            <NavLink to="postuler"> <li className="text-[#6D625C]  text-center hover:text-2xl  lg:rounded-lg lg:px-3 lg:py-2  ">
                         postuler
                            </li></NavLink>
                          { !isAuthenticated ? <NavLink to="login"><li className="text-[#6D625C]  text-center  hover:text-2xl lg:rounded-lg lg:px-3 lg:py-2  ">
                            Connexion
                               
                            </li></NavLink> :    <NavLink to="dashboard"><li className="text-[#6D625C]  text-center  hover:text-2xl lg:rounded-lg lg:px-3 lg:py-2  ">
                          Tableau de board
                               
                            </li></NavLink> }
                        </ul>

                
                    </div>
                </div>
                <div className="mb-1 hidden space-x-2 lg:inline-block">
           
          
                </div>
            </div>
        </nav>
    );
}