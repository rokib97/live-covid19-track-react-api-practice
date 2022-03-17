import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountrie] = useState([]);
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((data) => setCountrie(data));
  }, []);
  return (
    <div>
      <h1>Global COVID-19 Tracker</h1>
      <p>Mask Up, Sanitize and Stay Home Stay Safe</p>
      <div className="countries">
        {countries.map((country) => (
          <Country name={country.country} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
