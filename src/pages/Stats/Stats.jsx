import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Stats.css";

const StatsPage = () => {
  const [dataStats, setDataStats] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getData = () => {
    setIsLoading(true);
    axios
      .get(
        "https://corona.lmao.ninja/v2/countries/kz?yesterday=true&strict=true&query"
      )
      .then((response) => {
        setIsLoading(false);
        setDataStats(response.data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  };
  useEffect(() => getData(), []);

  return (
    <>
      {isLoading && <div>Please wait loading</div>}
      {error && <div>Oops error</div>}
      {!isLoading && !error && (
        <div>
          <ul>
            <li>active: {dataStats.active}</li>
            <li>activePerOneMillion: {dataStats.activePerOneMillion}</li>
            <li>Cases: {dataStats.cases}</li>
            <li>casesPerOneMillion: {dataStats.casesPerOneMillion}</li>
            <li>continent: {dataStats.continent}</li>
            <li>country: {dataStats.country}</li>
          </ul>
          {dataStats.countryInfo && (
            <ul>
              <li>
                flag: <img src={dataStats.countryInfo.flag} alt="flag" />
              </li>
              <li>iso2: {dataStats.countryInfo.iso2}</li>
              <li>iso3: {dataStats.countryInfo.iso3}</li>
              <li>lat: {dataStats.countryInfo.lat}</li>
              <li>long: {dataStats.countryInfo.long}</li>
              <li>_id: {dataStats.countryInfo._id}</li>
            </ul>
          )}
          <ul>
            <li>critical: {dataStats.critical}</li>
            <li>criticalPerOneMillion: {dataStats.criticalPerOneMillion}</li>
            <li>deaths: {dataStats.deaths}</li>
            <li>deathsPerOneMillion: {dataStats.deathsPerOneMillion}</li>
            <li>oneCasePerPeople: {dataStats.oneCasePerPeople}</li>
            <li>oneDeathPerPeople: {dataStats.oneDeathPerPeople}</li>
            <li>oneTestPerPeople: {dataStats.oneTestPerPeople}</li>
            <li>population: {dataStats.population}</li>
            <li>recovered: {dataStats.recovered}</li>
            <li>recoveredPerOneMillion: {dataStats.recoveredPerOneMillion}</li>
            <li>tests: {dataStats.tests}</li>
            <li>testsPerOneMillion: {dataStats.testsPerOneMillion}</li>
            <li>todayCases: {dataStats.todayCases}</li>
            <li>todayDeaths: {dataStats.todayDeaths}</li>
            <li>todayRecovered: {dataStats.todayRecovered}</li>
            <li>updated: {dataStats.updated}</li>
          </ul>
        </div>
      )}
    </>
  );
};
export default StatsPage;
