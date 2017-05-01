let React = require('react');

let WeatherMessage = ({temp, location}) => {
  return (
    <h2>It is {temp} degrees in {location}.</h2>
  )
};

module.exports = WeatherMessage;
