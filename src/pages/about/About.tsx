
import './About.css';





export const About = () => {
  return (
    <div className="row g-0 ">
      <div className="col-md-6 p-0 ">
        <div className="p-5 ">
          <h2 className=" mb-0 text-center text-md-start text-3xl fw-bold text-[#6D625C]">Qui sommes-nous</h2>
          <ul className="borderT w-4/5 ms-5 mt-5  text-xl text-justify fixedHeight ">
            <li className="fw-bold border  py-5 px-4  rounded-md">ENTREPRISE D'AIDE A DOMICILE FAMILLIALE</li>
            <li className="fw-bold border  py-5 px-4  rounded-md">DANS LE SECTEUR 95</li>
            <li className="fw-bold border  py-5 px-4  rounded-md">ACTIVITÉS PRESTATAIRES</li>
          </ul>
        </div>
      </div>
      <div className="col-md-6 p-0 ">
        <div className="p-5 ">
          <h2 className="invisible mb-0 text-center text-md-start text-3xl fw-bold text-[#6D625C]">Qui sommes-nous</h2>
          <div className="borderT w-4/5 ms-5 mt-5  text-xl text-justify fixedHeight ">
          <p>
<span className=' greenText'>Santélys.</span> est résolument engagé
dans une démarche de qualité et ne
cesse d'améliorer son offre pour
répondre aux besoins de tous.</p>
<p>
<span className=' greenText '>Santélys.</span> se distingue par ses
valeurs de proximité et de
personnalisation de l'offre de
service.
</p>
          </div>
        </div>
      </div>
    </div>
  );
  };


