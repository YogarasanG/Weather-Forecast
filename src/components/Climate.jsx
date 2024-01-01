import React from 'react';
import './climate.css';

function Climate({current,location,Img}) {
  return (
    <div>
    <div className='climate'>
      <div className="location">
        <h5 className='heading'>{location} Weather</h5>
      </div>
      <div className="ImageIcon">     
      <b><img src={current.condition.icon} alt={current.condition.text} /></b>
      <p>{current.condition.text}</p>
      </div>
      <p className='deg'>{current.temp_c}&deg;C</p>
      <div className="Tem">       
        <p> Fell like <b> {current.feelslike_c}&deg;C</b></p>
          <p>Wind : <b> {current.wind_kph} Kph</b></p>
      </div>     
    </div>
    </div>
  )
}

export default Climate
