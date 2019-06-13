import React , {Component} from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import getWeather from './services/getWeather';

const API_KEY = '5efe8c1f61821a7b6f00170e77ec230c';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      humidity:undefined,
      cityName:undefined,
      temp:undefined,
      temp_max:undefined,
      temp_min:undefined,
      weatherdescription:undefined,
      wind:undefined,
      error: undefined
    }
    this.getWeatherDetails = this.getWeatherDetails.bind(this);
  }
 
  
  getWeatherDetails(e){
    e.preventDefault();
    console.log(e.target)
    const lat = e.target.elements.lat.value;
    const lon = e.target.elements.lon.value;

    getWeather(lat, lon)
    .then(res=>{
      if(res){
        console.log(res);
       if(lat && lon){
        this.setState({
          humidity: res.main.humidity,
          cityName: res.name,
          temp:  res.main.temp,
          temp_max: res.main.temp_max,
          temp_min: res.main.temp_min,
          weatherdescription: res.weather[0].description,
          wind: res.wind.speed,
          error: ''
        })
       }else{
        this.setState({
          humidity: undefined,
          cityName: undefined,
          temp:  undefined,
          temp_max: undefined,
          temp_min: undefined,
          weatherdescription: undefined,
          wind: undefined,
          error: 'Please provide proper inputs!'
        })
       }
        console.log(this.state)
      }else{
        console.log("no data");
      }
    }
    
    )
    .catch(err=>{
      console.log(err);
      return err;
    })
  
  }
 
  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeatherDetails}/>
        <Weather 
          humidity = {this.state.humidity}
          cityName = {this.state.cityName}
          temp = {this.state.temp}
          temp_max = {this.state.temp_max}
          temp_min = {this.state.temp_min}
          weatherdescription = {this.state.weatherdescription}
          wind = {this.state.wind}
          error = {this.state.error}
        />
      </div>
    )
  }
}

export default App;
