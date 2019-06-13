import React, { Component } from 'react'

 class Form extends Component {
 
  render() {
    return (
      <div>
       <form onSubmit={this.props.getWeather}>
         <input name="city" placeholder="City Name" />
         <input name="country" placeholder="Country Name"/>
         <button>Get weather</button>
       </form>
      </div>
    )
  }
}
export default Form;