import axios from "axios"
import { useState, useEffect, createContext } from "react"

export const WeatherProvider = createContext()

const WeatherContext = ({children}) => {

    const api = {
        key: '07e13285e3052ebdb791914e6d1b5ef2',
        url: 'https://openweathermap.org/data/2.5/'
    }

    const [infoClima, setinfoClima] = useState([])

    const getData = async() => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=tucuman&APPID=dbd3b02d8958d62185d02e944cd5f522&units=metric`)
            setinfoClima(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
      getData()
    }, [])
    
  return (
    <>
    <WeatherProvider.Provider value={{infoClima}}>
        {children}
    </WeatherProvider.Provider>
    </>
  )
}

export default WeatherContext