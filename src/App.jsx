import { API } from '../utils/constants.json'
import React, { useState } from 'react'
import dateBuilder from '../utils/dateBuilder'

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  
  const search = evt => {
    
    if (evt.key === "Enter"){
      fetch(`${API.base}weather?q=${query}&units=metric&APPID=${API.key}`)
      .then(result => result.json())
      .then(res => 
        {
          setQuery('');
          setWeather(res);
        })
        
    }
  }

  return (
    <div className= {(typeof weather.main != 'undefined') ? ((weather.main.temp > 20) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className='search-box'>
          <input type='text' className='search-bar' placeholder='Search...' 
          onChange={e => setQuery(e.target.value)} value={query} 
          onKeyPress={search}/>
        </div>
        {(typeof weather.main != "undefined") ? (<div> 
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">{Math.round(weather.main.temp)}°C</div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
          </div>) : ('')}
      </main>
    </div>
  )
}

export default App
