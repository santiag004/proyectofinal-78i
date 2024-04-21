import { Container } from "react-bootstrap"
import './PlansCard.css'
import { useNavigate } from 'react-router-dom';

const PlansCard = ({planName, planPrice, planDet1, planDet2, planDet3}) => {

  const navigate = useNavigate()

  return (
    <>
    <Container className="plan-container">
        <h1 className="plan-title">{planName}</h1>
        <h3 className="plan-price">Precio: ${planPrice}</h3>
        <ul className="plan-details">
            <li>{planDet1}</li>
            <li>{planDet2}</li>
            <li>{planDet3}</li>
        </ul>
        <p>Cancela cuando quieras.</p>
        <button className="join-button" onClick={() => navigate('/detalles')}>QUIERO UNIRME</button>
    </Container>
    </>
  )
}

export default PlansCard