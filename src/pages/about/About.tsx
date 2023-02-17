import React, { useMemo } from 'react';
// import img from '../../assets/lis.png';
import './About.css';
import  { FC } from 'react';



// interface CardProps {
//   content: string;
//   className: string;
// }

// const Card: FC<CardProps> = ({ className, content }) => {
//   return (
//     <div className={`card ${className}`}>
//       <div className="card-body">{content}</div>
//     </div>
//   );
// };

export const About = () => {
    return (
      <div className="container-fluide">
        <div className="bannerAbout">
          <div className="banner-text">
            <h1 className="text-left text-xs-center text-md-start mb-4  h1">
              Qui sommes-nous ?
            </h1>
          </div>
        </div>
        {/* <div className="row col-12"> */}
        <div className="class=col-md-5 col-md-offset-2 d-flex grid md:grid-cols-2 gap-4">
    <ul className="w-4/5 mt-10 space-y-4 text-xl text-justify text-[#6D625C]">
      <li
        className="font-semibold border border-[#6D625C] py-5 px-4 bg-[#F9F7F4] rounded-md"
        style={{ listStyleType: 'none' }}
      >
        ENTREPRISE D'AIDE A DOMICILE FAMILLIALE
      </li>
      <li
        className="font-semibold border border-[#6D625C] py-5 px-4 bg-[#F9F7F4] rounded-md"
        style={{ listStyleType: 'none' }}
      >
        DANS LE SECTEUR 95
      </li>
      <li
        className="font-semibold border border-[#6D625C] py-5 px-4 bg-[#F9F7F4] rounded-md"
        style={{ listStyleType: 'none' }}
      >
        ACTIVITES PRESTATAIRES
      </li>
    </ul>

    <div className="w-4/5 space-y-20 font-semibold border border-[#6D625C] py-5 px-4 bg-[#F9F7F4] rounded-md h-5/6 mt-10 text-xl text-justify text-[#6D625C]">
      <p>
        <span className="text-[#00FF00]">Santélys</span>
        est résolument engagé dans une démarche de qualité et ne cesse
        d'améliorer son offre de services pour répondre au mieux aux besoins
        de tous.
      </p>
      <p>
        <span className="text-[#00FF00]">Santélys</span>
        se distingue par ses valeurs de proximité, de disponibilité et de
        réactivité. Nous sommes à votre écoute et nous vous accompagnons
        dans la gestion de votre quotidien.
      </p>
    </div>
  </div>

        {/* </div> */}
        {/* <div
            className="col-4 p-5"
            style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}
          ></div> */}
        {/* </div> */}
      </div>
    );
  };

  // export default About;


//   type textAboutCard = {
//     card1: string;
//     card2: string;
//     card3: string;
//     card4: JSX.Element;
//   };

//   const textCards: textAboutCard = useMemo(() => {
//     const card1: string = `ENTREPRISE D’AIDE A DOMICILE FAMILLIALE`;
//     const card2: string = 'DANS LE SECTEUR 95';
//     const card3: string = 'ACTIVITÉS PRESTATAIRES';
//     const card4: JSX.Element = (
//       <div>
//         <p>
//           <label>Santélys</label> est résolument engagé dans une démarche de
//           qualité et ne cesse d’améliorer son offre pour répondre aux besoins de
//           tous.
//         </p>
//         <p>
//           <label>Santélys</label> se distingue par ses valeurs de proximité et
//           de personnalisation de l’offre de service.
//         </p>
//       </div>
//     );

//     return {
//       card1,
//       card2,
//       card3,
//       card4,
//     };
//   }, []);

//   return (
//     <div className="about__style">
//       <h1>Qui sommes-nous ?</h1>
//       <div className="card__about__style">
//         {Object.keys(textCards).map((card: string, index: number) => {
//           return (
//             <Card
//               key={index}
//               className={card}
//               //@ts-ignore
//               content={textCards[card]}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default About;
