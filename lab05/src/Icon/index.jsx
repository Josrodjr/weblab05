import React from 'react';

const Image = ({
  imagestr = '01d',
  urlcomplete = '',
}) => (
  <img className='Imagen' src={`http://openweathermap.org/img/w/${imagestr}.png`} alt={imagestr}/>
);

export default Image;