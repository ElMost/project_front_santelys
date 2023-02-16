import React from 'react';
import img from '../../assets/lis.png';


export const About = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-8 p-5 d-flex"
          // style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}
        >
          <h1 className="text-white text-center pt-5">Qui sommes-nous ?</h1>
          <ul className="w-4/5  ml-5 md:ml-0  md:w-full  mt-10 space-y-4  text-xl text-justify text-[#6D625C]">
            <li className="font-semibold border border-[#6D625C] py-5 px-4 bg-[#F9F7F4] rounded-md">
              ENTREPRISE D'AIDE A DOMICILE FAMILLIALE
            </li>
            <li className="font-semibold border border-[#6D625C] py-5 px-4 bg-[#F9F7F4] rounded-md">
              DANS LE SECTEUR 95
            </li>
            <li className="font-semibold border border-[#6D625C] py-5 px-4 bg-[#F9F7F4] rounded-md">
              ACTIVITES PRESTATAIRES
            </li>
          </ul>
          <div className="w-4/5  md:w-full ml-5 md:ml-0 mb-20 md:mb-0 space-y-20 font-semibold border border-[#6D625C] py-5 px-4 bg-[#F9F7F4] rounded-md h-5/6 mt-10   text-xl text-justify text-[#6D625C]">
            <p>
              <span className=" text-[#00FF00]">Santélys</span>
              est résolument engagé dans une démarche de qualité et ne cesse
              d'améliorer son offre de services pour répondre au mieux aux
              besoins de tous.
            </p>
            <p>
              <span className=" text-[#00FF00] ">Santélys</span>
              se distingue par ses valeurs de proximité, de disponibilité et de
              réactivité. Nous sommes à votre écoute et nous vous accompagnons
              dans la gestion de votre quotidien.
            </p>
          </div>
        </div>
        <div
          className="col-4 p-5"
          style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}
        ></div>
      </div>
    </div>
  );
};

// export default About;
