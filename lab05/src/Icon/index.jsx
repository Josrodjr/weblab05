import React from 'react';
import { geolocated } from 'react-geolocated';

const Image = ({
  imagestr = '01d',
  urlcomplete = '',
}) => (
  <img src={`http://openweathermap.org/img/w/${imagestr}.png`} alt={imagestr}/>
);

export default Image;