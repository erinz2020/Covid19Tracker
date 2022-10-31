import React, {useState,useEffect} from "react";
import './App.css';
import Header from "./Components/Header";
import InfoBox from "./Components/InfoBox";
import Map from "./Components/Map";
import Table from "./Components/Table";
import {Card, CardContent} from "@material-ui/core"
import {sortData} from "./Components/util";
import LineGraph from "./Components/LineGraph";

function App() {
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState("worldwide");
    const [countryInfo, setCountryInfo] = useState({});
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/all')
            .then(res => res.json())
            .then(data => setCountryInfo(data));
    },[])

    useEffect( () => {
        const getData = async () => {
            await fetch("https://disease.sh/v3/covid-19/countries")
                .then(res => res.json())
                .then(data => {

                    const countries = data.map( country => (
                        {
                            name: country.country,
                            value: country.countryInfo.iso2
                        }
                    ))

                    setCountries(countries);
                    setTableData(sortData(data));
                    // console.log(data);
                });
        }
        getData();
    },[])

    const onCountryChange = async (e) => {

        const countryCode = e.target.value;

         const url = countryCode === "worldwide"
                    ? "https://disease.sh/v3/covid-19/all"
                    :  `https://disease.sh/v3/covid-19/countries/${countryCode}`
         await fetch(url)
             .then(res => res.json())
             .then(data => {

                setCountry(countryCode);
                setCountryInfo(data);
                // console.log(countryInfo);
             });

    }

  return (
    <div className="App">
      <div className="app__left">


                  <Header countries={countries} onCountryChange={onCountryChange} country={country}/>
                  <div className="app__stats">
                      <InfoBox title={"Coronavirus cases"} today={countryInfo.todayCases} total={countryInfo.cases}/>
                      <InfoBox title={"Recovered"} today={countryInfo.todayRecovered} total={countryInfo.recovered}/>
                      <InfoBox title={"Death"} today={countryInfo.todayDeaths} total={countryInfo.deaths}/>
                  </div>
                  <Map />



      </div>
      <div className="app__right">
          <Card>
              <CardContent>
                  <h2>Worldwide cases</h2>
                  <Table countries={tableData}/>
              </CardContent>
              <CardContent>
                  <LineGraph/>
              </CardContent>
          </Card>
      </div>
    </div>
  );
}

export default App;
