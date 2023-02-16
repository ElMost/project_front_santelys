// import React, { useState } from 'react';
// import { Form, Button, Row, Col } from 'react-bootstrap';

// const Devis = () => {
//   const [data, setData] = useState({});
//   const [checked, setChecked] = useState();

//   interface CheckboxItem {
//     value: string;
//     ischecked: boolean;
//   }

//   const [checkboxItems, setCheckboxItems] = useState<CheckboxItem[]>([]);

//   const handleCheckboxChange = (index: number) => {
//     const newCheckboxItems = [...checkboxItems];
//     newCheckboxItems[index].ischecked = !newCheckboxItems[index].ischecked;
//     setCheckboxItems(newCheckboxItems);
//     console.log(checked);
//   };

//   const serviceData = [
//     // defined serviceData with an array of objects
//     { nom: 'Entretien au Domicile', type: 'Domicile' },
//     { nom: 'Sortie', type: 'Domicile' },
//     { nom: 'Repassage', type: 'Domicile' },
//     { nom: 'Déplacement au domicile', type: 'Domicile' },
//     { nom: 'Surveillance', type: 'Domicile' },
//     { nom: 'Aide au lever/coucher', type: 'Autonomie' },
//     { nom: 'Préparation des repas', type: 'Autonomie' },
//     { nom: 'aide prise de medicament', type: 'Autonomie' },
//     { nom: 'aide à la prise des repas', type: 'Autonomie' },
//     { nom: 'aide à la toilette', type: 'Autonomie' },
//     { nom: 'Garde de jour/nuit', type: 'Autonomie' },
//   ];

//    const getServiceID = (serviceName: any) => {
//      const service = serviceData.find((s) => s.nom === serviceName);
//      return service ? service.id : '51db37d9-8992-490a-b849-404fa6008e9d';
//    };

//    const getServiceType = (serviceName: any) => {
//      const service = serviceData.find((s) => s.nom === serviceName);
//      return service ? service.type : 'bug de type';
//    };

//   return (
//     <Form>
//       <Form.Group>
//         <Form.Label>
//           Services <span className="text-[#00FF00]">Santélys</span> souhaités:
//         </Form.Label>
//         <Row>
//           {serviceData.slice(0, 6).map((service: any, index: React.Key | null | undefined) => (
//             <Col key={index}>
//               <Form.Check
//                 type="checkbox"
//                 label={service.name}
//                 onChange={() => handleCheckboxChange(!index)}
//               />
//             </Col>
//           ))}
//         </Row>
//         <Form.Check
//           type="checkbox"
//           label="Autres"
//           id="default-checkbox"
//           className="text-[#6D625C]"
//         />
//       </Form.Group>

//       <Form.Group>
//         <Form.Label>Combien de fois par semaine :</Form.Label>
//         <Row>
//           <Col>
//             <Form.Check type="checkbox" label="une fois par semaine" />
//           </Col>
//         </Row>
//       </Form.Group>

//       <Form.Group>
//         <Form.Control type="text" placeholder="Adresse" />
//       </Form.Group>

//       <Row>
//         <Form.Group as={Col}>
//           <Form.Control type="text" placeholder="Ville" />
//         </Form.Group>

//         <Form.Group as={Col}>
//           <Form.Control type="text" placeholder="Email" />
//         </Form.Group>

//         <Form.Group as={Col}>
//           <Form.Control type="text" placeholder="Téléphone" />
//         </Form.Group>
//       </Row>

//       <Form.Group>
//         <Form.Control as="textarea" rows={6} placeholder="Message" />
//       </Form.Group>

//       <Button variant="primary" type="submit">
//         Envoyer
//       </Button>
//     </Form>
//   );
// };

// export default Devis;

// import React, { useState } from 'react';
// import { Form, Button, Row, Col } from 'react-bootstrap';

// interface CheckboxItem {
//   value: string;
//   isChecked: boolean;
// }

// const Devis = () => {
//   const [data, setData] = useState({});
//   const [checked, setChecked] = useState<boolean>();

//   const [checkboxItems, setCheckboxItems] = useState<CheckboxItem[]>([
//     { value: 'Entretien au Domicile', isChecked: false },
//     { value: 'Sortie', isChecked: false },
//     { value: 'Repassage', isChecked: false },
//     { value: 'Déplacement au domicile', isChecked: false },
//     { value: 'Surveillance', isChecked: false },
//     { value: 'Aide au lever/coucher', isChecked: false },
//     { value: 'Préparation des repas', isChecked: false },
//     { value: 'aide prise de medicament', isChecked: false },
//     { value: 'aide à la prise des repas', isChecked: false },
//     { value: 'Garde de jour/nuit', isChecked: false },
//   ]);

//   const handleCheckboxChange = (index: number) => {
//     const newCheckboxItems = [...checkboxItems];
//     newCheckboxItems[index].isChecked = !newCheckboxItems[index].isChecked;
//     setCheckboxItems(newCheckboxItems);
//     console.log(newCheckboxItems[index]);
//   };

//   const serviceData = [
//     // defined serviceData with an array of objects
//     { nom: 'Entretien au Domicile', type: 'Domicile' },
//     { nom: 'Sortie', type: 'Domicile' },
//     { nom: 'Repassage', type: 'Domicile' },
//     { nom: 'Déplacement au domicile', type: 'Domicile' },
//     { nom: 'Surveillance', type: 'Domicile' },
//     { nom: 'Aide au lever/coucher', type: 'Autonomie' },
//     { nom: 'Préparation des repas', type: 'Autonomie' },
//     { nom: 'aide prise de medicament', type: 'Autonomie' },
//     { nom: 'aide à la prise des repas', type: 'Autonomie' },
//     { nom: 'Garde de jour/nuit', type: 'Autonomie' },
//   ];
//   const getServiceID = (serviceName: any) => {
//     const service = serviceData.find((s) => s.nom === serviceName);
//     return service ? serviceData.indexOf(service) : -1;
//   };

//   const getServiceType = (serviceName: any) => {
//     const service = serviceData.find((s) => s.nom === serviceName);
//     return service ? service.type : 'bug de type';
//   };

//   return (
//     <div className="container-fluid">
//   <div className="row">
//     <div className="col-md-6">
//       <div className="border p-2 mt-5">
//         <p className="mt-5 text-2xl mb-4 font-bold text-center text-dark">
//           Services <span className="text-success">Santélys</span> souhaités :
//         </p>
//         {serviceData.slice(0, 6).map((service, index) => (
//           <div className="form-check mb-3" key={index}>
//             <input
//               type="checkbox"
//               className="form-check-input"
//               id={`checkbox-${index}`}
//               onChange={() => handleCheckboxChange(index)}
//             />
//             <label
//               className="form-check-label font-weight-bold"
//               htmlFor={`checkbox-${index}`}
//             >
//               {service.nom}
//             </label>
//           </div>
//         ))}
//         <div className="form-check">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id="default-checkbox"
//           />
//           <label
//             className="form-check-label font-weight-bold"
//             htmlFor="default-checkbox"
//           >
//             Autre
//           </label>
//         </div>
//       </div>
//       <div className="border p-2 mt-5 mb-5">
//         <p className="mt-5 text-2xl mb-4 font-bold text-center text-dark">
//           Combien de fois par semaine :
//         </p>
//         <div className="form-check mb-3">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id="once-per-week"
//           />
//           <label
//             className="form-check-label font-weight-bold"
//             htmlFor="once-per-week"
//           >
//             une fois par semaine
//           </label>
//         </div>
//         <div className="form-check mb-3">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id="twice-to-five-per-week"
//           />
//           <label
//             className="form-check-label font-weight-bold"
//             htmlFor="twice-to-five-per-week"
//           >
//             2 à 5 fois par semaine
//           </label>
//         </div>
//         <div className="form-check mb-3">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id="everyday"
//           />
//           <label
//             className="form-check-label font-weight-bold"
//             htmlFor="everyday"
//           >
//             tous les jours
//           </label>
//         </div>
//       </div>
//     </div>
//     <div className="col-md-6">
//       <form>
//         <div className="mb-3">
//           <input
//             type="text"
//             id="nom"
//             name="nom"
//             className="form-control"
//             placeholder="Nom"
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             type="text"
//             id="prenom"
//             name="prenom"
//             className="form-control"
//             placeholder="Prénom"
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             type="text"
//             id="code"
//             name="code"
//             className="form-control"
//             placeholder="Code postal pour le service"
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             type="email"
//             id="email"
//             name="email"
//             className="form-control"
//             placeholder="E-mail"
//           />
//         </div>
//         <div className="mb-3">
//                 <input
//         type="tel"
//         id="telephone"
//         name="telephone"
//         className="form-control"
//         placeholder="Téléphone"
//       />
//     </div>
//     <div className="mb-3">
//       <textarea
//         id="message"
//         name="message"
//         className="form-control"
//         placeholder="Message"
//         rows="4"
//       ></textarea>
//     </div>
//     <div className="d-grid gap-2 mt-4">
//       <button
//         className="btn btn-success btn-lg"
//         type="submit"
//         onClick={handleSubmit}
//       >
//         Envoyer
//       </button>
//     </div>
//   </form>
// </div>

// </div>
// </div>

//   );
// };

// export default Devis;


import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

interface CheckboxItem {
  value: string;
  isChecked: boolean;
  type: string;
}

interface DevisData {
  services: string[];
  serviceIDs: number[];
  serviceTypes: string[];
  frequency: { [key: string]: number };
}



const Devis = () => {
const [data, setData] = useState<DevisData>({
  services: [],
  serviceIDs: [],
  serviceTypes: [],
  frequency: {},
});  const [checked, setChecked] = useState<boolean>();
const [checkboxItems, setCheckboxItems] = useState<CheckboxItem[]>([
  { value: 'Entretien au Domicile', isChecked: false, type: 'Domicile' },
  { value: 'Sortie', isChecked: false, type: 'Domicile' },
  { value: 'Repassage', isChecked: false, type: 'Domicile' },
  { value: 'Déplacement au domicile', isChecked: false, type: 'Domicile' },
  { value: 'Surveillance', isChecked: false, type: 'Domicile' },
  { value: 'Aide au lever/coucher', isChecked: false, type: 'Autonomie' },
  { value: 'Préparation des repas', isChecked: false, type: 'Autonomie' },
  { value: 'aide prise de medicament', isChecked: false, type: 'Autonomie' },
  { value: 'aide à la prise des repas', isChecked: false, type: 'Autonomie' },
  { value: 'Garde de jour/nuit', isChecked: false, type: 'Autonomie' },
]);

  const handleCheckboxChange = (index: number) => {
    const newCheckboxItems = [...checkboxItems];
    newCheckboxItems[index].isChecked = !newCheckboxItems[index].isChecked;
    setCheckboxItems(newCheckboxItems);
    console.log(newCheckboxItems[index]);
  };

  const serviceData = [
    // defined serviceData with an array of objects
    { nom: 'Entretien au Domicile', type: 'Domicile' },
    { nom: 'Sortie', type: 'Domicile' },
    { nom: 'Repassage', type: 'Domicile' },
    { nom: 'Déplacement au domicile', type: 'Domicile' },
    { nom: 'Surveillance', type: 'Domicile' },
    { nom: 'Aide au lever/coucher', type: 'Autonomie' },
    { nom: 'Préparation des repas', type: 'Autonomie' },
    { nom: 'aide prise de medicament', type: 'Autonomie' },
    { nom: 'aide à la prise des repas', type: 'Autonomie' },
    { nom: 'Garde de jour/nuit', type: 'Autonomie' },
  ];

 const getServiceID = (serviceName: any) => {
  const service = serviceData.find((s) => s.nom === serviceName);
  return service ? serviceData.indexOf(service) : -1;
};

const getServiceType = (serviceName: any) => {
  const service = serviceData.find((s) => s.nom === serviceName);
  return service ? service.type : 'bug de type';
};

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   const services = checkboxItems
     .filter((item) => item.isChecked)
     .map((item) => item.value);
   const serviceIDs = services.map((service) => getServiceID(service));
   const serviceTypes = services.map((service) => getServiceType(service));
    const frequency = services.reduce((acc, service) => {
      // acc[service] = 0;
      return acc;
    }, {});

   setData({ services, serviceIDs, serviceTypes, frequency });
   setChecked(true);
 };


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="border p-2 mt-5">
            <p className="mt-5 text-2xl mb-4 font-bold text-center text-dark">
              Services <span className="text-success">Santélys</span> souhaités
              :
            </p>
            <Form onSubmit={handleSubmit}>
              <Row>
                {checkboxItems.map((item, index) => (
                  <Col key={index} md={6}>
                    <Form.Check
                      type="checkbox"
                      label={item.value}
                      checked={item.isChecked}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </Col>
                ))}
              </Row>
              <div className="text-center mt-4">
                <Button variant="success" type="submit">
                  Valider
                </Button>
              </div>
            </Form>
          </div>
        </div>
        <div className="col-md-6">
          {checked && (
            <div className="border p-2 mt-5">
              <p className="mt-5 text-2xl mb-4 font-bold text-center text-dark">
                Services <span className="text-success">Santélys</span>{' '}
                sélectionnés :
              </p>
              <ul>
                {data.services.map((service: string, index: number) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
              <p className="mt-5 text-2xl mb-4 font-bold text-center text-dark">
                Identifiants des services sélectionnés :
              </p>
              <ul>
                {data.serviceIDs.map((id: number, index: number) => (
                  <li key={index}>{id}</li>
                ))}
              </ul>
              <p className="mt-5 text-2xl mb-4 font-bold text-center text-dark">
                Types des services sélectionnés :
              </p>
              <ul>
                {data.serviceTypes.map((type: string, index: number) => (
                  <li key={index}>{type}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Devis;


// import React, { useState } from 'react';
// import { Form, Button, Row, Col } from 'react-bootstrap';

// interface CheckboxItem {
// value: string;
// isChecked: boolean;
// type: string;
// }

// interface DevisData {
// services: string[];
// serviceIDs: number[];
// serviceTypes: string[];
// frequency: { [key: string]: number };
// }

// const Devis = () => {
//   const [data, setData] = useState<DevisData>({
//     services: [],
//     serviceIDs: [],
//     serviceTypes: [],
//     frequency: {},
//   });

//   const [checked, setChecked] = useState<boolean>(false);

//   const [checkboxItems, setCheckboxItems] = useState<CheckboxItem[]>([
//     { value: 'Entretien au Domicile', isChecked: false, type: 'Domicile' },
//     { value: 'Sortie', isChecked: false, type: 'Domicile' },
//     { value: 'Repassage', isChecked: false, type: 'Domicile' },
//     { value: 'Déplacement au domicile', isChecked: false, type: 'Domicile' },
//     { value: 'Surveillance', isChecked: false, type: 'Domicile' },
//     { value: 'Aide au lever/coucher', isChecked: false, type: 'Autonomie' },
//     { value: 'Préparation des repas', isChecked: false, type: 'Autonomie' },
//     { value: 'aide prise de medicament', isChecked: false, type: 'Autonomie' },
//     { value: 'aide à la prise des repas', isChecked: false, type: 'Autonomie' },
//     { value: 'Garde de jour/nuit', isChecked: false, type: 'Autonomie' },
//   ]);
  

//   const [frequency, setFrequency] = useState<{ [key: string]: number }>({});


//   const handleCheckboxChange = (index: number) => {
//     const newCheckboxItems = [...checkboxItems];
//     newCheckboxItems[index].isChecked = !newCheckboxItems[index].isChecked;
//     setCheckboxItems(newCheckboxItems);
//     console.log(newCheckboxItems[index]);
//   };

//   const serviceData = [
//     { nom: 'Entretien au Domicile', type: 'Domicile' },
//     { nom: 'Sortie', type: 'Domicile' },
//     { nom: 'Repassage', type: 'Domicile' },
//     { nom: 'Déplacement au domicile', type: 'Domicile' },
//     { nom: 'Surveillance', type: 'Domicile' },
//     { nom: 'Aide au lever/coucher', type: 'Autonomie' },
//     { nom: 'Préparation des repas', type: 'Autonomie' },
//     { nom: 'aide prise de medicament', type: 'Autonomie' },
//     { nom: 'aide à la prise des repas', type: 'Autonomie' },
//     { nom: 'Garde de jour/nuit', type: 'Autonomie' },
//   ];

//   const getServiceID = (serviceName: any) => {
//     const service = serviceData.find((s) => s.nom === serviceName);
//     return service ? serviceData.indexOf(service) : -1;
//   };

//   const getServiceType = (serviceName: any) => {
//     const service = serviceData.find((s) => s.nom === serviceName);
//     return service ? service.type : 'bug de type';
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const selectedServices = checkboxItems
//       .filter((item) => item.isChecked)
//       .map((item) => {
//         return item.value;
//       });

//     const serviceIDs = checkboxItems
//       .filter((item) => item.isChecked)
//       .map((item) => {
//         return getServiceID(item.value);
//       });

//     const serviceTypes = checkboxItems
//       .filter((item) => item.isChecked)
//       .map((item) => {
//         return getServiceType(item.value);
//       });

//     const frequencyValues = Object.values(frequency);
//     const frequencyKeys = Object.keys(frequency);

//     if (selectedServices.length > 0 && frequencyValues.length > 0) {
// setData({
// services: selectedServices.map((item) => item.value),
// serviceIDs: serviceIDs,
// serviceTypes: serviceTypes,
// frequency: frequencyKeys.reduce((acc, key, index) => {
// return { ...acc, [serviceIDs[index]]: frequencyValues[index] };
// }, {}),
// });

//     setData({
//       services,
//       serviceIDs,
//       serviceTypes,
//       frequency: {},
//     });
//     setChecked(true);
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Row>
//         {checkboxItems.map((item, index) => (
//           <Col key={index} md={6}>
//             <Form.Check
//               type="checkbox"
//               label={item.value}
//               checked={item.isChecked}
//               onChange={() => handleCheckboxChange(index)}
//             />
//           </Col>
//         ))}
//       </Row>
//       <Button variant="primary" type="submit">
//         Obtenir un devis
//       </Button>
//       {checked && (
//         <div>
//           <p>Services sélectionnés:</p>
//           <ul>
//             {data.services.map((service, index) => (
//               <li key={index}>{service}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </Form>
//   );
// };
// export default Devis;


// // import React, { useState } from 'react';
// // import { Form, Button, Row, Col } from 'react-bootstrap';

// // interface CheckboxItem {
// // value: string;
// // isChecked: boolean;
// // type: string;
// // }

// // interface DevisData {
// // services: string[];
// // serviceIDs: number[];
// // serviceTypes: string[];
// // frequency: { [key: string]: number };
// // }

// // const Devis = () => {
// // const [data, setData] = useState<DevisData>({
// // services: [],
// // serviceIDs: [],
// // serviceTypes: [],
// // frequency: {},
// // });
// // const [checked, setChecked] = useState<boolean>(false);

// // const [checkboxItems, setCheckboxItems] = useState<CheckboxItem[]>([
// // { value: 'Entretien au Domicile', isChecked: false, type: 'Domicile' },
// // { value: 'Sortie', isChecked: false, type: 'Domicile' },
// // { value: 'Repassage', isChecked: false, type: 'Domicile' },
// // { value: 'Déplacement au domicile', isChecked: false, type: 'Domicile' },
// // { value: 'Surveillance', isChecked: false, type: 'Domicile' },
// // { value: 'Aide au lever/coucher', isChecked: false, type: 'Autonomie' },
// // { value: 'Préparation des repas', isChecked: false, type: 'Autonomie' },
// // { value: 'aide prise de medicament', isChecked: false, type: 'Autonomie' },
// // { value: 'aide à la prise des repas', isChecked: false, type: 'Autonomie' },
// // { value: 'Garde de jour/nuit', isChecked: false, type: 'Autonomie' },
// // ]);


// // const [frequency, setFrequency] = useState<{ [key: string]: number }>({});

// // const handleCheckboxChange = (index: number) => {
// // const newCheckboxItems = [...checkboxItems];
// // newCheckboxItems[index].isChecked = !newCheckboxItems[index].isChecked;
// // setCheckboxItems(newCheckboxItems);
// // };

// // const serviceData = [
// // { nom: 'Entretien au Domicile', type: 'Domicile' },
// // { nom: 'Sortie', type: 'Domicile' },
// // { nom: 'Repassage', type: 'Domicile' },
// // { nom: 'Déplacement au domicile', type: 'Domicile' },
// // { nom: 'Surveillance', type: 'Domicile' },
// // { nom: 'Aide au lever/coucher', type: 'Autonomie' },
// // { nom: 'Préparation des repas', type: 'Autonomie' },
// // { nom: 'aide prise de medicament', type: 'Autonomie' },
// // { nom: 'aide à la prise des repas', type: 'Autonomie' },
// // { nom: 'Garde de jour/nuit', type: 'Autonomie' },
// // ];

// // const getServiceID = (serviceName: any) => {
// // const service = serviceData.find((s) => s.nom === serviceName);
// // return service ? serviceData.indexOf(service) : -1;
// // };

// // const getServiceType = (serviceName: any) => {
// // const service = serviceData.find((s) => s.nom === serviceName);
// // return service ? service.type : 'bug de type';
// // };

// // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
// // e.preventDefault();
// // const selectedServices = checkboxItems.filter((item) => item.isChecked);
// // const serviceIDs = selectedServices.map((item) => getServiceID(item.value));
// // const serviceTypes = selectedServices.map((item) => getServiceType(item.value));
// // const frequencyValues = Object.values(frequency);
// // const frequencyKeys = Object.keys(frequency);

// // if (selectedServices.length > 0 && frequencyValues.length > 0) {
// // setData({
// // services: selectedServices.map((item) => item.value),
// // serviceIDs: serviceIDs,
// // serviceTypes: serviceTypes,
// // frequency: frequencyKeys.reduce((acc, key, index) => {
// // return { ...acc, [serviceIDs[index]]: frequencyValues[index] };
// // }, {}),
// // });
// // setChecked(true);
// // }
// // };

// // return (

// // <div className="devis-form">
// // <Form onSubmit={handleSubmit}>
// // <Row>
// // {checkboxItems.map((item, index) => (
// // <Col key={index} sm={6} md={4} lg={3}>
// // <Form.Check
// // type="checkbox"
// // label={item.value}
// // checked={item.isChecked}
// // onChange={() => handleCheckboxChange(index)}
// // />
// // </Col>
// // ))}
// // </Row>
// // <Row>
// // {data.services.length > 0 && (
// // <>
// // <Col md={6}>
// // <Form.Label>Fréquence de service</Form.Label>
// // </Col>
// // <Col md={6}>
// // <Form.Label>Nombre d'heures</Form.Label>
// // </Col>
// // </>
// // )}
// // {data.services.map((service, index) => (
// // <React.Fragment key={index}>
// // <Col md={6}>
// // <p>{service}</p>
// // </Col>
// // <Col md={6}>
// // <Form.Control
// // type="number"
// // min={1}
// // defaultValue={1}
// // onChange={(e) =>
// // setFrequency({ ...frequency, [index]: parseInt(e.target.value) })
// // }
// // />
// // </Col>
// // </React.Fragment>
// // ))}
// // </Row>
// // <Button type="submit">Obtenir mon devis</Button>
// // </Form>
// // </div>
// // );
// // };
// // export default Devis;