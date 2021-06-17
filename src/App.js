import React from "react";
import Header from "./components/header";
import Form from "./components/form";
import Weather from "./components/weather";

const KEY = "b72851ae44febeb541b5795980f1886e";

class App extends React.Component{

  state = {
    city:undefined,
    temp: undefined,
    humidity: undefined,
    conditions: undefined,
    error: undefined
  }

 gettingWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`);
    const data = await api_url.json();
        
    
    if(city){
      this.setState({
        temp: data.main.temp,
        city: data.name,
        humidity: data.main.humidity,
        condition: data.weather[0].main,
        error: undefined
      });
    }else{
        this.setState({
          city:undefined,
          temp: undefined,
          humidity: undefined,
          conditions: undefined,
          error: "You don't enter the city"
        });
      }
 }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
        <Header />
        <Form dataForm={this.gettingWeather} />
        <Weather
        city= {this.state.city}
        temp= {Math.round(this.state.temp)}
        humidity= {Math.round(this.state.humidity)}
        condition= {this.state.condition}
        error= {this.state.error}
        />
        </div>
      </div>
    );
  }
}

export default App;