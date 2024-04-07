import { Container, Row, Col } from "react-bootstrap"
import './FeaturedProd.css'

const FeaturedProd = () => {
  return (
    <>
    <Container className="prod-container">
        <Row>
            <h1 className="product-title">NUESTRO PRODUCTO DESTACADO</h1>
            <Col lg={6} md={12} sm={12}>
            <h2 className="product-name">PROTEINA WHEY GOLD</h2>
            <p className="product-details"><span className="product-details highlight">Más que una simple proteína:</span> es una potente fuente de aminoácidos de alta calidad, esenciales para la reparación y el crecimiento muscular después de tus intensas sesiones de entrenamiento. Su rápida absorción garantiza que tus músculos reciban el combustible necesario justo cuando más lo necesitan, optimizando así tu recuperación y ayudándote a alcanzar tus metas más rápido.</p>
            <p className="product-details">Con una <span className="product-details highlight">deliciosa variedad de sabores</span>, cada batido de Whey Gold es una experiencia de sabor que esperarás con ansias después de tu entrenamiento. Además, su fórmula de alta calidad es baja en carbohidratos y grasas, ideal para complementar tu dieta sin añadir calorías no deseadas.</p>
            </Col>

            <Col lg={6} md={12} sm={12} className="product-col">
            <img className="img-fluid product-img" src="https://www.bigbasket.com/media/uploads/p/l/40230912_1-one-science-nutrition-premium-whey-protein-strengthens-muscles-cafe-mocha.jpg" alt="foto de la proteina" />
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default FeaturedProd