import axios from "axios";
import React, { useEffect, useState } from "react";
import './veri.css'

const Veri = () => {
  const [data, setData] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people?page=1")
      .then((res) => setData(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (person) => {
    if (selectedPerson === person) {
      setSelectedPerson(null);
    } else {
      setSelectedPerson(person);
    }
  };

  return (
    <div className="ana-div">
      {data &&
         data.map((person) => (
          <div className="veri-divi" key={person.url}>
            <div className="veri-divi-1">
            <h2 className="veriler">{person.name}</h2>
            <button className="veriler cerceve" onClick={() => handleClick(person)}>
              {person.birth_year}
            </button> </div>
            {selectedPerson === person && (
             <div className="veriler-1">
                <p>Height: {person.height}</p>
                <p>Mass: {person.mass}</p>
                <p>Hair color: {person.hair_color}</p>
              </div>
            )}
          </div>
        ))}
   </div>
  );
};

export default Veri;
