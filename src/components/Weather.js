import React from 'react';

const Weather = (props) => (
    <div className="weather__info">
        {props.city && props.country && <p>Location: {props.city},{props.country}</p>}
        {props.tem && <p>Temperature: {props.temperature}</p>}
        {props.humidify && <p>Humidity: {props.humidify}</p>}
        {props.description && <p>Description: {props.description}</p>}
        {props.error && <p>Please enter the value.</p>}
    </div>
)


export default Weather;