import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

interface CheckboxItem {
  value: string;
  isChecked: boolean;
  type: string;
}

interface DevisData {
  services: string[];
  // serviceIDs: number[];
  serviceTypes: string[];
  frequency: { frequency: Number }; // frequency is an object with a key of type string and a value of type number;
}

const Devis = () => {
const [frequency, setFrequency] = useState({ frequency: 0 });

  
  
  const [data, setData] = useState<DevisData>({
    services: [],
    // serviceIDs: [],
    serviceTypes: [],
    frequency:frequency,
  });
  const [checked, setChecked] = useState<boolean>();
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

  const frequencyData = [
    // defined frequencyData with an array of objects
    { nom: '1 fois par semaine', value: 1 },
    { nom: '2  à 5 fois par semaine', value: 2 },
    { nom: ' Tous les jours de la semaine', value: 3 },
  ];
 
  // const getServiceID = (serviceName: any) => {
  //   const service = serviceData.find((s) => s.nom === serviceName);
  //   return service ? serviceData.indexOf(service) : -1;
  // };

  const getServiceType = (serviceName: any) => {
    const service = serviceData.find((s) => s.nom === serviceName);
    return service ? service.type : 'bug de type';
  };

  const getFrequencyValue = (frequencyName: any) => {
    const frequency = frequencyData.find((f) => f.nom === frequencyName);
    return frequency ? frequency.value : -1;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const services = checkboxItems
      .filter((item) => item.isChecked)
      .map((item) => item.value);
    // const serviceIDs = services.map((service) => getServiceID(service));
    const serviceTypes = services.map((service) => getServiceType(service));
    // const frequency = services.map((service) => getFrequencyValue(service));

    // )) => getFrequencyValue(frequency), {
    //   '1 fois par semaine': 0,
    //   '2  à 5 fois par semaine': 0,
    //   'Tous les jours de la semaine': 0,

    // });

    setData({ services, serviceTypes, frequency: { frequency: 0 } });
    setChecked(true);

    console.log(data);
  };

  return (
    <div className="containerDevis col-12 mt-5 mb-5 p-0 ">
      <div className="d-flex flex-wrap justify-content-center pb-5 p-2

      ">
        <div className="col-md-8 col-lg-6">
          <div className="border pb-0 p-2 mt-5 ">
            <p className="mt-1 text-lg mb-2 m-0 font-bold  text-dark">
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
              <div className="text-center mt-2 mb-5">
                <Button variant="success" type="submit">
                  Valider
                </Button>
              </div>
            </Form>
          </div>
        </div>
        <div className="col-md-8 col-lg-6">
          {checked && (
            <div className="border p-2 mt-5">
              <p className="mt-2 text-2xl mb-4 font-bold  text-dark">
                Services <span className="text-success">Santélys</span>{' '}
                sélectionnés :
              </p>
              <ul>
                {data.services.map((service: string, index: number) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>

              <hr />
              {/* <p className="mt-5 text-2xl mb-4 font-bold text-center text-dark">
                Identifiants des services sélectionnés :
              </p>
              <ul>
                {data.serviceIDs.map((id: number, index: number) => (
                  <li key={index}>{id}</li>
                ))}
              </ul> */}
              <p className="mt-2 text-2xl mb-4 font-bold text-dark">
                Types des services sélectionnés :
              </p>
              <ul>
                {data.serviceTypes.map((type: string, index: number) => (
                  <li key={index}>{type}</li>
                ))}
              </ul>
              <hr />
              {/* <p className="mt-5 text-2xl mb-4 font-bold text-center text-dark">
                Fréquence des services sélectionnés :
              </p>
              <ul>
                {data.services.map((service: string, index: number) => (
                  <li key={index}></li>
                ))}
              </ul> */}
              <Form onSubmit={handleSubmit}>
                <div className="mt-4">
                  <p className="mt-2 text-lg mb-2 m-0 font-bold  text-dark ">
                    Fréquence des services sélectionnés:
                  </p>
                  <div className='d-flex flex-column'>
                    <Form.Check
                      inline
                      label="1 fois par semaine"
                      name="group1"
                      type="radio"
                      onChange={() => setChecked(true)}
                      checked={checked === true}
                    />
                    <Form.Check
                      inline
                      label="2 à 5 fois par semaine"
                      name="group1"
                      type="radio"
                      onChange={() => setChecked(false)}
                      checked={checked === true}
                    />
                    <Form.Check
                      inline
                      label="Tous les jours de la semaine"
                      name="group1"
                      type="radio"
                      onChange={() => setChecked(false)}
                      checked={checked === true}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-4">
                  <Button type="submit" variant="primary" onClick={() => {
                    setChecked(true);
                    console.log(data)
                  }}>
                    Envoyer la demande
                  </Button>
                </div>
              </Form>
            </div>
          )}
        </div>
      </div>
      <div style={{ widows: '300px' }}> '' ''</div>
    </div>
  );
};

export default Devis;
