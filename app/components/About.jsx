let React = require('react');

let About = (props) => {
  return (
    <div>
      <h1 className='text-center'>About</h1>
      <p className='text-center'>
        Welcome to the React Weather App! This app was designed using <a href='https://facebook.github.io/react/' target='_blank'>React</a> and is powered by a <a href='https://nodejs.org/' target='_blank'>Node.js</a> backend running <a href='https://expressjs.com/' target='_blank'>Express</a>. This app uses an API to interface with <a href='http://openweathermap.org/' target='_blank'>Open Weather Map</a> and fetch live weather data.
      </p>
      <p className='text-center'>
        This app is open source under the MIT license and the code can be found at <a href='https://www.github.com/sgalizia/ReactWeather.git' target='_blank'>this repository</a> on GitHub. The original design was developed by <a href='https://github.com/andrewjmead' target='_blank'>Andrew Mead</a> and this app was built while following his course on React which can be found <a href='https://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/content' target='_blank'>here</a>.
      </p>
    </div>
  )
};

module.exports = About;
