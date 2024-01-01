import React, { useEffect, useState } from "react";
import "./weather.css";
import Climate from "./Climate";
import Forcast from "./Forcast";
const autoComplete = (city) =>
  `https://api.weatherapi.com/v1/search.json?key=c1ff9cef51ab404d8ab85618232212&q=${city}`;
const currentClimateURL = (city) =>
  `https://api.weatherapi.com/v1/forecast.json?key=c1ff9cef51ab404d8ab85618232212&q=${city}&days=7&aqi=no&alerts=no`;

function Weather() {
  const [val, setVal] = useState("");
  const [area, setArea] = useState([null]);
  const [clicked, setClicked] = useState(false);
  const [climate, setClimate] = useState("");
  const [location, setLocation] = useState("");
  const [forecast, setForecast] = useState("");
  const [imgage, setImages] = useState("");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      const autoCompleteData = async () => {
        const resp = await fetch(autoComplete(val));
        const data = await resp.json();
        const suggestionData = data.map(
          (currentCity) =>
            `${currentCity.name},${currentCity.region},${currentCity.country}`
        );
        setArea(suggestionData);
      };
      if (!clicked && val.length > 2) {
        autoCompleteData();
      } else {
        setArea([]);
        setClicked(false);
      }
    }, 1000);

    return () => clearTimeout(timeOut);
  }, [val,clicked]);

  const handleClick = async (city) => {
    setVal(city);
    setArea([null]);
    setClicked(true);

    const resp = await fetch(currentClimateURL(val));
    const data = await resp.json();
    setClimate(data.current);
    setLocation(data.location.name);
    setForecast(data.forecast);
    setImages(data.current.condition.icon);
  };

  return (
    <div className="weather">
      <div>
        <input
          type="text"
          required
          value={val}
          onChange={(event) => setVal(event.target.value)}
          onKeyDown={(e)=>{if(e.key === "Enter")  handleClick(area)}}
          placeholder="Enter the Place"
          className="inputbox"
        />
        {area.length > 0 && (
          <div className="area">
            {area.map((place, index) => (
              <div
                className="places"
                key={index}
                onClick={() => handleClick(place)}
              >
                <p>{place}</p>
              </div>
            ))}
          </div>
        )}
        {climate && (
          <Climate current={climate} location={location} Img={imgage} />
        )}
        {forecast && (
          <div>
            <Forcast forecast={forecast} location={location} />
          </div>
        )}
      
      </div>
    
    </div>
  );
}

export default Weather;
