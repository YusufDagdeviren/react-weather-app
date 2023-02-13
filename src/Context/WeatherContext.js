import {createContext,useContext,useState,useEffect} from "react"
import axios from "axios";
import data from "../Cities_Data/cities_of_turkey.json"
const WeatherContext = createContext();

const WeatherProvider = ({children}) =>{
    const cities = data
    const [city,setCity] = useState("İstanbul")
    const [weatherData,setWeatherData] = useState({})
    console.log(weatherData);
    //https://api.weatherbit.io/v2.0/forecast/daily?lat=39.9000&lon=41.2700&key=137d682cf636492ca90c04995865b1d1&lang=tr
    useEffect(()=>{
       let selectCities = cities.filter(item => item.name===city)[0]
       let key = "137d682cf636492ca90c04995865b1d1"
        axios(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${selectCities.latitude}&lon=${selectCities.longitude}&key=${key}&lang=tr`)
        .then(res =>setWeatherData(res.data))
        .catch(e => console.log(e))
    },[city])
    const values ={
       cities,
       city,
       setCity,
       weatherData,
       setWeatherData
    }

    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}
const useWeather = () => useContext(WeatherContext);
export {
    WeatherProvider,
    useWeather
}