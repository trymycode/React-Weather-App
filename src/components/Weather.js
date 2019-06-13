import React, { Component } from 'react'

 class Weather extends Component {
   
  render() {
    return (
      <div>
       
        {this.props.humidity &&  <p>humidity = {this.props.humidity}</p>}
        {this.props.cityName &&  <p>cityName = {this.props.cityName}</p> }
        {this.props.temp && this.props.temp_max && this.props.temp_min && <p>temp = {this.props.temp}, temp_min ={this.props.temp_min}, temp_max = {this.props.temp_max}</p>}
        {this.props.weatherdescription &&  <p> weatherdescription = {this.props.weatherdescription}</p>} 
        {this.props.wind && <p>wind = {this.props.wind}</p>}
        {this.props.error && <p> message: {this.props.error}</p>}
      </div>
    )
  }
}
export default Weather;