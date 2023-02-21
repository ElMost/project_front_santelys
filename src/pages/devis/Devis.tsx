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
    frequency: 0,
  });
  const [checked, setChecked] = useState<boolean>();
  const [checkboxItems, setCheckboxItems] = useState<CheckboxItem[]>(
    serviceDataCheckboxItems
  );

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

    setData({ services, serviceTypes, frequency: frequency });
    console.log(frequency);
    setChecked(true);

    console.log(data);
  };

  return (
    <div className=" w-full  mt-0 mb-5 p-0 flex  justify-center">
      <div
        className="w-11/12 flex flex-wrap justify-between  pb-2 

      "
      >
        <div className="w-full lg:w-5/12  ">
          <div className="border pb-0 p-2 mt-2 ">
            <p className="mt-2 text-2xl mb-4 font-bold  text-dark">
              Services <span className="text-[#007C00]">Santélys</span>{' '}
              souhaités :
            </p>
            <form>
              <div className="mt-2 ">
                {checkboxItems.map((item, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      className="text-black"
                      checked={item.isChecked}
                      onChange={() => handleCheckboxChange(index)}
                    />
                    <label className="ml-2 text-dark">{item.value}</label>
                  </div>
                ))}
              </div>
              <div className="text-center mt-2 mb-5">
                <Button
                  className="button bg-green-500 text-white p-1 w-full"
                  onClick={() => handleSubmit()}
                >
                  Valider
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full lg:w-5/12  ">
          {checked && (
            <div className="border p-2 mt-2">
              <p className="mt-2 text-2xl mb-4 font-bold  text-dark">
                Services <span className="text-[#007C00]">Santélys</span>{' '}
                sélectionnés :
              </p>
              <div>
                <table className="table-auto p-2 mb-3">
                  <thead>
                    <tr>
                      <th className="w-8/12">Service</th>
                      <th className="w-40">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.services.map((service: string, index: number) => (
                      /*     <li key={index}>
                    {service}
                    {data.serviceTypes[index]}
                  </li> */

                      <tr key={index}>
                        <td className="w-40"> {service}</td>
                        <td className="w-40 text-center">
                          {' '}
                          {data.serviceTypes[index]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <hr />

              <form className='mt-0 mb-5'>
                <div className="mt-4">
                  <p className="mt-2 text-2xl mb-4 font-bold  text-dark">
                    Fréquence des services sélectionnés:
                  </p>
                  <div className="flex flex-col">
                    <div>
                      <input
                        name="group1"
                        type="radio"
                        value={frequencyData[0].value}
                        onChange={() => setFrequency(0)}
                      />
                      <label className="ml-2 text-dark">
                        {frequencyData[0].nom}
                      </label>
                    </div>
                    <div>
                      <input
                        name="group1"
                        type="radio"
                        value={frequencyData[1].value}
                        onChange={() => setFrequency(2)}
                      />
                      <label className="ml-2 text-dark">
                        {frequencyData[1].nom}
                      </label>
                    </div>

                    <div>
                      <input
                        name="group1"
                        type="radio"
                        value={frequencyData[2].value}
                        onChange={() => setFrequency(1)}
                      />
                      <label className="ml-2 text-dark">
                        {frequencyData[0].nom}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-4">
                  <Button
                    className="button bg-blue-500 text-white p-1 w-full mb-5"
                    onClick={() => {
                      setChecked(true);
                      handleSubmit();
                    }}
                  >
                    Envoyer
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Devis;
