import React, { Component } from 'react';

class WeathIcons extends Component {
  constructor () {
    super();
    this.state = {
      urlcomplete: '',
      picture: '01d',
    };
  }
/*
  componentDidMount () {
    var iconUrl = "http://openweathermap.org/img/w/" + this.state.picture + ".png";
    fetch(iconUrl)
    .then(results => {
      console.log(results);
    })
    this.setState({urlcomplete: iconUrl, picture: '01d'});
  }
*/
  render () {
    return (
      <img
        src={`http://openweathermap.org/img/w/${this.state.picture}.png`}
      />
    )
    
  }

}

export default WeathIcons;