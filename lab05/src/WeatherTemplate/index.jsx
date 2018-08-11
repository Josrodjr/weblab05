import React, {Fragment} from 'react';

import Image from '../Icon';
import './style.css';

const Template = ({
  weather = 'Undefined',
  weatherEsp = 'Undefined',
  image = '01d',
  temperatureK = 0.0,
  place = 'Undefined',
  country = 'Undefined',
}) => (
  <Fragment>
    <div className='Title'>Weather App</div>
    <div className='Place'>{place + ', ' + country}</div>
    <Image imagestr={image}/>
    <div className='Weather'>{weatherEsp + ', ' + weather}</div>
    <div className='Temperature'>{temperatureK  + ' °C'}</div>
  </Fragment>
);

export default Template;