import React from "react";
import PropTypes from "prop-types";

function ForecastDetails({ forecast }) {
  const { date, temperature, humidity, wind } = forecast;
  const formattedDate = new Date(date).toDateString();
  return (
    <div className="forecast-details">
      <div className="forecast-details_date">Date: {formattedDate}</div>
      <div className="forecast-details_temperature-max">
        {temperature.max}&deg;C
      </div>
      <div className="forecast-details_temperature-min">
        {temperature.min}&deg;C
      </div>
      <div className="forecast-details_humidity">{humidity}</div>
      <div className="forecast-details_wind-speed">{wind.speed}</div>
      <div className="forecast-details_wind-direction">{wind.direction}</div>
    </div>
  );
}

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
      direction: PropTypes.string.isRequired,
    }).isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default ForecastDetails;
