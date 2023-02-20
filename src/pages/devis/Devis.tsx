import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { frequencyData } from '../../data/FrequenceData';
import { serviceData, serviceDataCheckboxItems } from '../../data/ServiceData';
import { CheckboxItem } from '../../interfaces/CheckboxItem';
import { DevisData } from '../../interfaces/DevisData';



const Devis = () => {
const [frequency, setFrequency] = useState(0);

  
  
  const [data, setData] = useState<DevisData>({
    services: [],
    // serviceIDs: [],
    serviceTypes: [],
    frequency:0
  });
  const [checked, setChecked] = useState<boolean>();
  const [checkboxItems, setCheckboxItems] = useState<CheckboxItem[]>(serviceDataCheckboxItems);

  const handleCheckboxChange = (index: number) => {
    const newCheckboxItems = [...checkboxItems];
    newCheckboxItems[index].isChecked = !newCheckboxItems[index].isChecked;
    setCheckboxItems(newCheckboxItems);
    console.log(newCheckboxItems[index]);
  };




  // const getServiceID = (serviceName: any) => {
  //   const service = serviceData.find((s) => s.nom === serviceName);
  //   return service ? serviceData.indexOf(service) : -1;
  // };

  const getServiceType = (serviceName: any) => {
    const service = serviceData.find((s) => s.nom === serviceName);
    return service ? service.type : 'bug de type';
  };

/*   const getFrequencyValue = (frequencyName: any) => {
    const frequency = frequencyData.find((f) => f.nom === frequencyName);
    return frequency ? frequency.value : -1;
  }; */







  const handleSubmit = () => {

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

    setData({ services, serviceTypes, frequency: frequency});
    console.log(frequency)
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
            <Form >
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
                <Button variant="success" onClick={() => handleSubmit()}>
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
              <Form >
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
                      value={frequencyData[0].value}
                      onChange={() => setFrequency(0) }
                    />
                    <Form.Check
                      inline
                      label="2 à 5 fois par semaine"
                      name="group1"
                      type="radio"
                      value={frequencyData[1].value}
                      onChange={() => setFrequency(2)}
                    />
                    <Form.Check
                      inline
                      label="Tous les jours de la semaine"
                      name="group1"
                      type="radio"
                      value={frequencyData[2].value}
                      onChange={() => setFrequency(1)}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-4">
                  <Button  variant="primary" onClick={() => {
                    setChecked(true);
                    handleSubmit();
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
