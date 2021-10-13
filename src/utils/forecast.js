const request = require("request");
const forecast = (lattitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=085a29b01a463fe5b1a27348d07907ca&query=" +
    lattitude +
    "," +
    longitude +
    "&units=m";
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather services", undefined);
    } else if (response.body.error) {
      callback(
        "Unable to find location ,search for another location",
        undefined
      );
    } else {
      callback(
        undefined,
        response.body.current.weather_descriptions +
          ".  It is currently " +
          response.body.current.temperature +
          " degree out."
      );
    }
  });
};

module.exports = forecast;
//http://api.weatherstack.com/current?access_key=085a29b01a463fe5b1a27348d07907ca&query=32.1,76.26667&units=m
