import { Carousel, Row, Col, Container } from "react-bootstrap"
import TrainerCard from "../TrainerCard/TrainerCard"
import './TrainerCarousel.css'

const TrainerCarousel = () => {
    return (
        <>
        <h1 className="title-trainerCarousel">CONOCE NUESTROS INSTRUCTORES</h1>
            <div className="carousel-container">
                <Carousel indicators={false}>
                    <Carousel.Item >
                        <Container className="cards-container">
                            <Row className="cards-row">
                                <Col className="mx-5" lg={3} md={12}>
                                    <TrainerCard profilePhoto="https://picsum.photos/150/150?random=1" trainerName="FACUNDO COLIDIO"/>
                                </Col>
                                <Col className="mx-5" lg={3} md={12}>
                                    <TrainerCard profilePhoto="https://picsum.photos/150/150?random=2" trainerName="HERNÁN LOPEZ"/>
                                </Col>
                                <Col className="mx-4" lg={3} md={12}>
                                    <TrainerCard profilePhoto="https://picsum.photos/150/150?random=3" trainerName="JULIÁN ÁLVAREZ"/>
                                </Col>
                            </Row>
                        </Container>

                    </Carousel.Item>
                    <Carousel.Item >
                        <Container className="cards-container">
                            <Row className="cards-row">
                                <Col className="mx-5" lg={3} md={12}>
                                    <TrainerCard profilePhoto="https://picsum.photos/150/150?random=4" trainerName="LUCAS ALARIO"/>
                                </Col>
                                <Col className="mx-5" lg={3} md={12}>
                                    <TrainerCard profilePhoto="https://picsum.photos/150/150?random=5" trainerName="DANIEL ZABALA"/>
                                </Col>
                                <Col className="mx-4" lg={3} md={12}>
                                    <TrainerCard profilePhoto="https://picsum.photos/150/150?random=6" trainerName="RODRIGO VILLAGRA"/>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default TrainerCarousel