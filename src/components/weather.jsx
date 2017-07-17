import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';

const API_KEY = 'da59c22dcb14a57e3d3d61d7f986db8e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${API_KEY}`;
const CITY = '1566083';
const ICON_URL = 'http://openweathermap.org/img/w/'

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: null
    }
  }

  componentDidMount() {
    const url = `${ROOT_URL}&id=${CITY}`;
    axios.get(url)
      .then(res => {
        this.setState({forecast: res.data});
      })
  }

  renderWeather = (data) => {
    var time = moment.utc(data.dt_txt);
    time.local();
    return (
      <td key={data.dt_txt}>
        <div className='icon'>{time.format("hh:mm a")}</div>
        <div className='icon'><img src={`${ICON_URL}${data.weather[0].icon}.png`} alt=""/></div>
        <div className='desc'>{data.weather[0].description}</div>
        <div>{Math.round(data.main.temp*2)/2}°C</div>
      </td>
    )
  }


  render() {
    if (!this.state.forecast) {
      return <div>... Loading ...</div>
    }
    return (
    <div>
      <h1>Next 12 hours</h1>
      <table className="table table-responsive">
        <tbody>
          <tr>
            {this.state.forecast.list.slice(0,5).map(this.renderWeather)}
          </tr>
        </tbody>
      </table>
    </div>
  )}
}

export default Weather;
