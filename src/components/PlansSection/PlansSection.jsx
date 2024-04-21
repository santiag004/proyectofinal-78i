import PlansCard from "../PlansCard/PlansCard"
import { Container, Row, Col } from "react-bootstrap"
import './PlansSection.css'


const PlansSection = () => {
  return (
    <>
    <Container className="plans-container">
        <Row>
            <h1 className="plansect-title">NUESTROS PLANES</h1>
            <p className="plansect-detail">Te interesa unirte? Consultá los precios y planes acá abajo:</p>
            <Col lg={4} sm={12}>
            <PlansCard 
            planName={"SOLO MUSCULACIÓN"} 
            planPrice={"5500"} 
            planDet1={"Acceso ilimitado a nuestras máquinas de alta calidad para musculación."} 
            planDet2={"Orientación personalizada de nuestro equipo experto para maximizar tu entrenamiento."} 
            planDet3={"Utilización de nuestras modernas duchas y productos de calidad para una recuperación completa."}/>
            </Col>

            <Col lg={4} sm={12}>
            <PlansCard 
            planName={"SOLO CLASES"} 
            planPrice={"7500"} 
            planDet1={"Clases dirigidas por expertos, incluyendo sesiones de CrossFit."} 
            planDet2={"Entrenamientos adaptados a todos los niveles de habilidad, desde principiantes hasta atletas experimentados."} 
            planDet3={"Acceso a nuestras instalaciones de spa para el rejuvenecimiento después de cada clase, incluyendo tratamientos terapéuticos y de relajación."}/>
            </Col>

            <Col lg={4} sm={12}>
            <PlansCard 
            planName={"FULL"} 
            planPrice={"9500"} 
            planDet1={"Beneficios completos de ambos planes: musculación y clases."} 
            planDet2={"Acceso ilimitado a todas las instalaciones, incluyendo equipos de última generación y clases dirigidas."} 
            planDet3={"Descuento de un 50% en nuestros productos."}/>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default PlansSection