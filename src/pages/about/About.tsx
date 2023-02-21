import React from 'react';
// import img from '../../assets/lis.png';
import './About.css';


export const About = () => {
  return (
    <div className=''>
      <p className="w-full md:mt-0 md:ml-0 ml-10 text-3xl font-bold text-[#6D625C]">
        Qui sommes-nous
        <br />
      </p>

      <div className=" grid grid-cols-1 md:grid-cols-2 space-x-10 h-full bg-red p-0 mb-0     ">
        <div>
          <div className="w-4/5 h-10/12  md:w-full ml-5 md:ml-0 mb-20 md:mb-0 space-y-20 font-semibold border border-[#6D625C] py-5 px-4 bg-[#F9F7F4] rounded-md h-5/6 mt-10   text-xl text-justify text-[#6D625C]">
            <p>
              <span className=" text-[#00FF00]">Santélys.</span> est résolument
              engagé dans une démarche de qualité et ne cesse d'améliorer son
              offre pour répondre aux besoins de tous.
            </p>

            <p>
              <span className=" text-[#00FF00] ">Santélys.</span> se distingue
              par ses valeurs de proximité et de personnalisation de l'offre de
              service.
            </p>
          </div>
        </div>

        <div className="w-4/5 h-10/12 md:w-full ml-5 md:ml-0 mb-20 md:mb-0 space-y-20 font-semibold border border-[#6D625C] py-5 px-4 bg-[#F9F7F4] rounded-md h-5/6 mt-10   text-xl text-justify text-[#6D625C]">
          <p>
            <span className=" text-[#00FF00]">Santélys.</span> est résolument
            engagé dans une démarche de qualité et ne cesse d'améliorer son
            offre pour répondre aux besoins de tous.
          </p>

          <p>
            <span className=" text-[#00FF00] ">Santélys.</span> se distingue par
            ses valeurs de proximité et de personnalisation de l'offre de
            service.
          </p>
        </div>
      </div>
    </div>
  );
};

// export default About;
