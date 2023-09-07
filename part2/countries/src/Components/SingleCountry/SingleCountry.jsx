/* SingleCountry.jsx was created 07.09.2023 22:27 */
import css from "./SingleCountry.module.css"
import { useState, useEffect } from 'react'
import axios from "axios";

const SingleCountry = ({country}) => {
    const languages = Object.values(country.languages)
    const lat = country.capitalInfo.latlng[0]
    const lon = country.capitalInfo.latlng[1]
    // https://home.openweathermap.org/api_keys
    // titiw14421@horsgit.com
    // $$QWer1234
    const weatherApiKey= '77334c9808d0f08ba650c647d54b2354'
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${weatherApiKey}`
    const [weather, setWeather] = useState({})
    useEffect(() => {
        axios.get(weatherUrl).then(response => {
            setWeather(response.data)
        })
    }, [])
    const weatherIcon = Object.keys(weather).length === 0 ? '' :  `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital[0]}</p>
            <p>Area: {country.area}</p>
            <h3>Languages:</h3>
            <ul>
                { languages.map( lang => <li>{lang}</li> ) }
            </ul>
            <img src={country.flags.svg} alt={country.flags.alt} width="100"/>
            {Object.keys(weather).length === 0 ? '' :
                <div>
                <h2>Weather in {country.capital[0]}</h2>
                <p>Temperature: {weather.main.temp}&deg;C</p>
                <img src={weatherIcon}/>
                <p>Wind: {weather.wind.speed}m/s</p>
                </div>
            }
        </div>
    )
}
export default SingleCountry;