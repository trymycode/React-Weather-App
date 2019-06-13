import React, { Component } from 'react'

 class Form extends Component {
 
  render() {
    return (
      <div>
       <form onSubmit={this.props.getWeather}>
         <input name="lat" placeholder="Latitute" />
         <input name="lon" placeholder="Longitude"/>
         <button>Get weather</button>
       </form>
      </div>
    )
  }
}
export default Form;