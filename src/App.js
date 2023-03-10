import CurrentWeather from './components/current-weather/current-weather'
import { Route, Routes } from 'react-router-dom'
import Search from './components/search/search'
import Countries from './components/countries/countries'
import './App.css'
import { WEATHER_API_URL, WEATHER_API_KEY} from './api'
import { useState } from 'react'
import Forecast from './components/forecast/forecast'
import Navbar from './components/navbar/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ')

    const CurrentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
    )
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
    )

    
    Promise.all([CurrentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json()
        const forecastResponse = await response[1].json()

        setCurrentWeather({ city: searchData.label, ...weatherResponse })
        setForecast({ city: searchData.label, ...forecastResponse })
      })
      .catch((err) => console.log(err))
  }
  // Runner.instance_.gameOver = ()=>{}()=>{}
  console.log(currentWeather)
  console.log(forecast)

  return (
   
      <div className="container">
     
        <Navbar />
        {<Search OnSearchChange={handleOnSearchChange} />}
        {<Countries OnSearchChange={handleOnSearchChange} />}
        <Routes>
        <Route path="/current-weather" element={currentWeather && <CurrentWeather data={currentWeather} />}/>
        <Route path="/forecast" element={forecast && <Forecast data={forecast} />}/>

        </Routes>
      </div>
    
  )
}
export default App
