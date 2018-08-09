import React, { Component, Fragment } from 'react';
import './App.css';

//import WeathIcons from './WeathIcons';
import Image from './Icon';

/*
import './geo2';

const gettasks = fetch('https://raw.githubusercontent.com/samuelchvez/todos-fake-json-api/master/db.json');

gettasks
  .then(resultado => resultado.json())
  .then(resultadoJSON => insertdata(resultadoJSON))
  .catch(error => console.log('murio la llamada', error));

*/  

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      apikey: '805fdf4b82ef5fd54afa17eed7fed630',
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    )
    var requesturl = `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&APPID=${this.state.apikey}`
    console.log(requesturl)
    //hacer aca la API CALL y guardar el JSON en el STATE
    
  }

  render() {
    return (
      //<Image imagestr={'02d'}/>
      <Fragment>
        <div>{this.state.latitude}</div>
        <div>{this.state.longitude}</div>
      </Fragment>
    );
  }
}

export default App;