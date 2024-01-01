import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import './forecast.css';

function Forcast({ location, forecast:{forecastday} }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="forecast">
      <div className="heading">
        <h3>Forecast For {location}</h3>
      </div>
        <div className="day">
        {forecastday.map((curCast) =>{
          const {date,day,hour}=curCast;
          const{avgtemp_c,mintemp_c,daily_chance_of_rain,condition:{icon,text}}=day
          return(
            <Accordion expanded={expanded === date} onChange={handleChange(date)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '20%', flexShrink: 0 }}>
              <img src={icon} alt={text} className="imgIcon"/>
              </Typography>            
              <Typography sx={{ width: '20%', flexShrink: 0 }}>
              {date} <br /> ({text})
              </Typography>
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
              <b>Temp</b>: Min: {avgtemp_c}&deg;C  Max:{mintemp_c}&deg;C
              </Typography>
              <Typography sx={{ width: '37%', flexShrink: 0 }}>
              <b>{daily_chance_of_rain}%</b> possible to Rain
              </Typography>
             
            </AccordionSummary>
            <AccordionDetails>
           {
            hour.map((hourly,index)=>{
              const {temp_c,wind_kph,wind_dir} = hourly
              return(
                <div className="hour">             
                <AccordionSummary
                  aria-controls="panel1bh-content"
                   id="panel1bh-header"  key={index}>                
                <Typography sx={{ width: '20%', flexShrink: 0 }}>
                {index} :00
                </Typography>
                 <Typography sx={{ width: '25%', flexShrink: 0 }} >
                 <b>Temp</b>: <br /> {temp_c}&deg;C
                 </Typography>
                 <Typography sx={{ width: '30%', flexShrink: 0 }} >
                 <b>Wind Speed</b>: <br />{wind_kph}Kph
                 </Typography>
                 <Typography sx={{ width: '25%', flexShrink: 0 }}>
                <b> Wind direction:</b>  <br />{wind_dir}
                </Typography>
                 </AccordionSummary> 
                 </div>                  
              )
            })
           }
            </AccordionDetails>
          </Accordion>
          
        )
        } )}
      </div>
    </div>
  );
}

export default Forcast;
