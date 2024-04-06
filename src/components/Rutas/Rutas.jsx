import {Routes, Route} from 'react-router-dom'
import About from '../../views/About'

const Rutas = () => {
  return (
    <>
    <Routes>
        <Route path='/about' element={<About/>}/>
    </Routes>
    </>
  )
}

export default Rutas