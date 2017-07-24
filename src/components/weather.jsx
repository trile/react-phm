import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';
import ReactSkycons from '../lib/ReactSkycons';

const API_KEY = 'da59c22dcb14a57e3d3d61d7f986db8e';
const FORECAST_URL = `http://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${API_KEY}`;
const CURRENT_WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?units=metric&appid=${API_KEY}`;
const CITY = '1566083';
const ICON_URL = 'http://openweathermap.org/img/w/'

const DARKSKY_API_KEY = 'e475ad34fdb8bf629c28b8e1636581e7'
const PMH_LON = '10.72717'
const PMH_LAT = '106.7134471'
const DARKSKY_BASED = `https://api.darksky.net/forecast/${DARKSKY_API_KEY}`;

const OWMCodeToIcon = {
  '01d': 'CLEAR_DAY',
  '01n': 'CLEAR_NIGHT',
  '02d': 'PARTLY_CLOUDY_DAY',
  '02n': 'PARTLY_CLOUDY_NIGHT',
  '03d': 'CLOUDY',
  '03n': 'CLOUDY',
  '04d': 'CLOUDY',
  '04n': 'CLOUDY',
  '09d': 'RAIN',
  '09n': 'RAIN',
  '10d': 'RAIN',
  '10n': 'RAIN',
  '11d': 'RAIN',
  '11n': 'RAIN',
  '13d': 'SNOW',
  '13n': 'SNOW',
  '50d': 'FOG',
  '50n': 'FOG'
}

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: null,
      forecast: null
    }
  }

  componentDidMount() {
    const forecast_url = `${FORECAST_URL}&id=${CITY}`;
    const current_weather_url = `${CURRENT_WEATHER_URL}&id=${CITY}`;

    axios.get(forecast_url)
      .then(res => {
        this.setState({forecast: res.data});
      });

    axios.get(current_weather_url)
      .then(res => {
        this.setState({weather: res.data});
      });

  }

  renderForecast = (data) => {
    var time = moment.utc(data.dt_txt);
    time.local();
    return (
      <td key={data.dt_txt}>
        <div className='time'>{time.format("hh:mm a")}</div>
        <div className="forecast-icons"><ReactSkycons icon={OWMCodeToIcon[data.weather[0].icon]} size={48} color='#4b89da'/></div>
        <div className='desc'>{data.weather[0].description}</div>
        <div>{Math.round(data.main.temp*2)/2}°C</div>
      </td>
    )
  }

  renderWeather = () => {
    const data = this.state.weather;
    const sunrise = moment.unix(data.sys.sunrise);
    const sunset = moment.unix(data.sys.sunset);
    sunrise.local();
    sunset.local();
    return (
      <div>
        <table className="table table-responsive weather">
          <tbody>
            <tr>
              <td><h2 className="description">{data.weather[0].description}</h2></td>
            </tr>
            <tr>
              <td>
                <div className="pull-left temperature">{data.main.temp}°C</div>
                <div className="pull-right weather-icon">
                  <ReactSkycons icon={OWMCodeToIcon[data.weather[0].icon]} size={96} color='#4b89da'/>
                </div>
              </td>
              <td className="weather-attr">
                <div className="weather-attr-title">SUNRISE</div>
                <div>{sunrise.format("hh:mm a")}</div>
                <div className="weather-attr-title">SUNSET</div>
                <div>{sunset.format("hh:mm a")}</div>
              </td>
              <td className="weather-attr">
                <div className="weather-attr-title">HUMIDITY</div>
                <div>{data.main.humidity}%</div>
                <div className="weather-attr-title">PRESSURE</div>
                <div>{data.main.pressure} hPa</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

  render() {
    if (!this.state.forecast || !this.state.weather) {
      return <div>... Loading ...</div>
    }

    return (
    <div>
      <h1>Current</h1>
      {this.renderWeather()}
      <h1>Next 12 hours</h1>
      <table className="table table-responsive forecast">
        <tbody>
          <tr>
            {this.state.forecast.list.slice(0,5).map(this.renderForecast)}
          </tr>
        </tbody>
      </table>
    </div>
  )}
}

export default Weather;
