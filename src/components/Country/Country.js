import React from "react";
import "./Country.css";

const Country = (props) => {
  console.log(props);
  const { country, countryInfo, cases, recovered, deaths } = props.country;
  return (
    <div className="country">
      <img src={countryInfo.flag} alt="" />
      <h3>{country}</h3>
      <h4>Total Cases: {cases / 1000}k</h4>
      <h4>Total Recovered: {recovered / 1000}k</h4>
      <h4>Total Deaths: {deaths / 1000}k</h4>
    </div>
  );
};

export default Country;
