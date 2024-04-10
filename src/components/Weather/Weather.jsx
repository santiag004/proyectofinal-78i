import { Container, Row, Col } from "react-bootstrap"
import { useContext } from "react"
import './Weather.css'
import { WeatherProvider } from "../../context/WeatherContext"

const Weather = () => {
    const {infoClima} = useContext(WeatherProvider)
  return (
    <>
    <Container className="weather-container">
    {typeof infoClima.main != "undefined" ? (
        <>
        <h1 className="weather-title">EL CLIMA EN {infoClima.name.toUpperCase()}</h1>
        <p className="weather-status">TEMPERATURA: <span className="weather-degrees">{infoClima.main.temp} °C</span></p>
        <p className="weather-status">SENSACIÓN TÉRMICA: <span className="weather-degrees">{infoClima.main.feels_like} °C</span></p>
        <p className="weather-status">HUMEDAD: <span className="weather-degrees">{infoClima.main.humidity} %</span></p>
        </>
    ) : (
        <h1>Cargando información del clima</h1>
    )}
        
    </Container>
    </>
  )
}

export default Weather