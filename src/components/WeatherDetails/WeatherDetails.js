import './WeatherDetails.css'


const WeatherDetails = ({data, degToCompass, displayedText}) => {
  // console.log('DATA: ', data)
  return (
    <div className="info-div">
      <h1 className="city-name">{data.name}</h1>
      <h2>{data.main.temp.toFixed()}°F</h2>
      <h2 className="weather-description">
        {data.weather[0].description
          .split(' ')
          .map((word) => word[0].toUpperCase() + word.substring(1))
          .join(' ')}
      </h2>
      <p>
        <b>High: </b>
        {data.main.temp_max.toFixed()}°F | <b>Low: </b>
        {data.main.temp_min.toFixed()}°F
      </p>
      <div className="display-box">
        <div>
          <p>{data.main.feels_like.toFixed()}°F</p>
          <p className="feels-like">Feels Like</p>
        </div>
        <div>
          <p>{data.main.humidity}% </p>
          <p className="humidity">Humidity</p>
        </div>
        <div>
          <p>{`${data.wind.speed.toFixed()} mph ${degToCompass(
            data.wind.deg
          )} `}</p>
          <p className="wind-speed">Wind Speed</p>
        </div>
      </div>
      <p className="rude-text">{displayedText}</p>
    </div>
  );
};

export default WeatherDetails;
