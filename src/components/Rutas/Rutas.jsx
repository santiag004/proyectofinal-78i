import {Routes, Route} from 'react-router-dom'
import Home from '../../views/Home'

const Rutas = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  )
}
export default Rutas