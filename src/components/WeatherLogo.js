import React from 'react';
import { Image } from 'react-native';

const WeatherIcon = ({ iconCode, color }) => {
    
  const iconBaseUrl = 'http://openweathermap.org/img/wn/';
  
  const iconUrl = `${iconBaseUrl}${iconCode}@2x.png`;

  return <Image source={{ uri: iconUrl }}
  style={{ width: 50, height: 50, tintColor: color }}
  resizeMode={"contain"} />;
};

export default WeatherIcon;