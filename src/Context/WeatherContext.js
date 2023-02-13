import {createContext,useContext,useState,useEffect} from "react"
import axios from "axios";
import data from "../Cities_Data/cities_of_turkey.json"
const WeatherContext = createContext();

const WeatherProvider = ({children}) =>{
    const cities = data
    const [city,setCity] = useState("İstanbul")
    const [weatherData,setWeatherData] = useState([])
    //https://api.weatherapi.com/v1/forecast.json?key=c60488d6eb974a92916164903231302&q=${selectCities.latitude},${selectCities.longitude}&days=8&hour=24
    useEffect(()=>{
        let selectCities = data.filter(item => item.name===city)[0]
        let key = "c60488d6eb974a92916164903231302"
        axios(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${selectCities.latitude},${selectCities.longitude}&days=8&hour=24`)
        .then(res => res.data)
        .then(res => res.forecast)
        .then(res => setWeatherData(res.forecastday))
    },[city])
    const values ={
       cities,
       city,
       setCity,
       weatherData,
    }

    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}
const useWeather = () => useContext(WeatherContext);
export {
    WeatherProvider,
    useWeather
}