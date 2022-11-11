// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
// import { Route, Switch, Link } from 'react-router-dom';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import Form from './components/Form/Form';
import insults from './data/data';
console.log(insults.hot);
function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [displayedText, setDisplayedText] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}, ${location}&units=imperial&appid=b6e9ecfee4aba217e2be8eaff32c5160`;

  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        displayTempText(response.data.main.temp, response.data.weather[0].main);
      });
      e.preventDefault();
      setLocation('');
      setData({});
    }
  };

  const displayTempText = (temp, weather) => {
    if (temp >= 85) {
      setDisplayedText(
        insults.hot[
          Math.floor(Math.random(insults.hot) * insults.hot.length)
        ]
      );
    }else if (temp >= 72 && temp < 85) {
      setDisplayedText(
        insults.warmToHot[
          Math.floor(Math.random(insults.warmToHot) * insults.warmToHot.length)
        ]
      );
    } else if (temp >= 60 && temp < 72) {
      setDisplayedText(
        insults.midRange[
          Math.floor(Math.random(insults.midRange) * insults.midRange.length)
        ]
      );
    } else if (temp >= 50 && temp < 60) {
      setDisplayedText(
        insults.coldToMid[
          Math.floor(Math.random(insults.coldToMid) * insults.coldToMid.length)
        ]
      );
    } else if (temp < 50) {
      setDisplayedText(insults.cold[
        Math.floor(Math.random(insults.cold) * insults.cold.length)
      ]);
    }
  };

  const degToCompass = (num) => {
    var val = Math.floor(num / 22.5 + 0.5);
    var arr = [
      'N',
      'NNE',
      'NE',
      'ENE',
      'E',
      'ESE',
      'SE',
      'SSE',
      'S',
      'SSW',
      'SW',
      'WSW',
      'W',
      'WNW',
      'NW',
      'NNW',
    ];
    return arr[val % 16];
  };
  return (
    <div className="App">
      <header className="App-header">WEATHER-TUDE</header>
      <div>
        <Form
          location={location}
          setLocation={setLocation}
          searchLocation={searchLocation}
        />
        {!data.main ? (
          <h1 className="loading">Search for something, dum-dum!</h1>
        ) : data.name ? (
          <WeatherDetails
            data={data}
            degToCompass={degToCompass}
            displayedText={displayedText}
          />
        ) : (
          <h1>Nope</h1>
        )}
      </div>
    </div>
  );
}

export default App;
