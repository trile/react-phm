import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import moment from 'moment';
import ReactSkycons from '../lib/ReactSkycons';

import { fetchForecast, fetchCurrentWeather } from '../actions/';

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
  }

  componentDidMount() {
    this.props.fetchForecast();
    this.props.fetchCurrentWeather();
    // fetchCurrentWeather();
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

  renderWeather = (data) => {
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
    let {forecast, current_weather} = this.props;
    console.log(forecast);
    console.log(current_weather);
    if (!forecast.list || !current_weather.main ) {
      return <div>... Loading ...</div>
    }

    return (
    <div>
      <h1>Current</h1>
      {this.renderWeather(current_weather)}
      <h1>Next 12 hours</h1>
      <table className="table table-responsive forecast">
        <tbody>
          <tr>
            {this.props.forecast.list.slice(0,5).map(this.renderForecast)}
          </tr>
        </tbody>
      </table>
    </div>
  )}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchForecast, fetchCurrentWeather}, dispatch);
}

function mapStateToProps (state) {
  console.log(state);
  let { weather } = state;
  return {forecast: weather.forecast, current_weather: weather.current_weather};
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
