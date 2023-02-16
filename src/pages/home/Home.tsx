import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../assets/aide.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="container1 ">
      <div className="container ">
        <div className="banner">
          <div className="banner-text">
            <h1 className="text-left text-xs-center text-md-start mb-4  h1">
              Avec <span className="text-success">Santélys.</span> je peux
              compter sur une aide à domicile de qualité 24h/24 et 7j/7
            </h1>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 d-flex flex-column flex-md-row img">
          <div className="col-md-12 col-sm-12 description">
            <h3>
              Découvrez les avantages de faire appel à {''}
              <span className="text-success">Santélys</span> pour l'aide à
              domicile.
            </h3>
            <p className="text-justify mb-2">
              Chaque jour, nos auxiliaires de vie vous accompagnent dans tous
              les gestes de la vie quotidienne. Nous vous proposons des
              prestations de qualité, adaptées à vos besoins et à votre budget.
            </p>
            <h3 className="text-success">
              {' '}
              <span className="text-success">Santélys.</span>
            </h3>
            <p className="mb-0"></p>
            <p className="mb-0">Professionnels de l'aide à domicile</p>
            <p className="mb-0">Santé, bien-être et autonomie</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
