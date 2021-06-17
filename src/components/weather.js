import React from "react";

class Weather extends React.Component {
    render() {
        return (
            <div>
                {this.props.city &&
                <div>
                    <p>Location: {this.props.city}</p> 
                    <p>Temperature: {this.props.temp} ℃</p>
                    <p>Humidity: {this.props.humidity} %</p>
                    <p>Weather condition: {this.props.condition}</p>
                </div>
                }
                <span>{ this.props.error}</span>
            </div>
        );
    }
}

export default Weather;