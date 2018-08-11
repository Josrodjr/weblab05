import React, { Component, Fragment } from 'react';
import './App.css';

import Image from './Icon';
import Template from './WeatherTemplate';


function getPosition(options) {
  return new Promise(function (resolve, reject){
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      apikey: '805fdf4b82ef5fd54afa17eed7fed630',
      urlforapicall: '',
      urlforapicall2: '',
      weatherInfo: [],
      inputValue: '',
    };
  }

  componentWillMount() {
    
    getPosition()
      .then((position) => {this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,});
      })
      .then(() => {let requesturl = `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&APPID=${this.state.apikey}`
    this.setState({
      urlforapicall: requesturl,});
      })
      .then(() => {
        //HACER LA PROMISE DEL API
        const getWeather = fetch(this.state.urlforapicall);

        getWeather
        .then(resultado => resultado.json())
        .then(resultadoJSON => {
          //set the state with the info from fetch

          //transformar la temperatura de K a C

          this.setState({
            weatherInfo: [resultadoJSON.weather[0].main, resultadoJSON.weather[0].description, resultadoJSON.weather[0].icon, (resultadoJSON.main.temp - 273.15).toFixed(2), resultadoJSON.name, resultadoJSON.sys.country]
          });

          console.log(this.state.weatherInfo);

        })
        .catch(error => console.log('API CALL CALL FAILURE', error));
        
      })
    
  }

  onClick () {
      console.log(this.state.inputValue);
      //prepareURL for call
      const urlforcity = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.inputValue}&APPID=${this.state.apikey}`

      this.setState({
        urlforapicall2: urlforcity,
      });

      const getWeather = fetch(this.state.urlforapicall2);

      getWeather
      .then(resultado => resultado.json())
      .then(resultadoJSON => {
        
        this.setState({
          weatherInfo: [resultadoJSON.weather[0].main, resultadoJSON.weather[0].description, resultadoJSON.weather[0].icon, (resultadoJSON.main.temp - 273.15).toFixed(2), resultadoJSON.name, resultadoJSON.sys.country]
        });
        console.log(this.state.weatherInfo);
      })
  }

  render() {
    const { inputValue } = this.state;
    return (
      <Fragment>
        <Template
          weather = {this.state.weatherInfo[0]}
          weatherEsp = {this.state.weatherInfo[1]}
          image = {this.state.weatherInfo[2]}
          temperatureK = {this.state.weatherInfo[3]}
          place = {this.state.weatherInfo[4]}
          country = {this.state.weatherInfo[5]}
        />
        <input 
          type="text"
          value={inputValue}
          onChange={
            e => this.setState({
              inputValue: e.target.value,
            })
          }
        />
        <button onMouseEnter={this.onClick.bind(this)}  onClick={this.onClick.bind(this)}>{'Buscar'}</button>
      </Fragment>
    );
  }
}

export default App;