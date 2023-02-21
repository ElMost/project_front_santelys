import React from 'react';
import './Engagement.css';
import img from '../../assets/services.png';

const Engagement = () => {
  return (
    <div className="p-0 py-md-1">
      <div className="engagementBanner mt-0">
        <img className=" m-auto" src={img} alt="" />
      </div>
      <div className="m-auto mt-0 engagement">
        <div className=" m-auto  ">
          <h1 className="mt-2  font-weight-bold ">
            Notre engagement <span className="text-[#007C00]">Santélys</span>
          </h1>
          <ul className="mt-2 p-0 mx-auto mx-md-0 lg:flex ulEngagement  ">
            <div>
              <li>Savoir faire</li>
              <li>Sécurité et qualité de service</li>
              <li>Proximité et disponibilité</li>
              <li>Une réactivité sous 48H</li>
              <li>Un service 7j/7 et 24H/24</li>
              <li>Contrôle et suivi qualité régulier</li>
              <li>Accompagnement adapté et prestations personnalisée</li>
            </div>
            <div>
              <li>Paiements possibles par CESU</li>
              <li>Des tarifs justes, clairs et détaillés</li>
              <li>
                Une continuité de prestation les week-ends et jours fériés
              </li>
              <li>Des intervenants qualifiés et diplômés</li>
              <li>Une écoute et une évaluation personnalisée de vos besoins</li>
              <li>Une visite mensuelle au domicile du client</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Engagement;
