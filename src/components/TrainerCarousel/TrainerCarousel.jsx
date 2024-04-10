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
                                    <TrainerCard profilePhoto="https://picsum.photos/150/150?random=1" trainerName="TEST1"/>
                                </Col>
                                <Col className="mx-5" lg={3} md={12}>
                                    <TrainerCard profilePhoto="https://picsum.photos/150/150?random=2" trainerName="TEST2"/>
                                </Col>
                                <Col className="mx-4" lg={3} md={12}>
                                    <TrainerCard profilePhoto="https://picsum.photos/150/150?random=3" trainerName="TEST3"/>
                                </Col>
                            </Row>
                        </Container>

                    </Carousel.Item>
                    <Carousel.Item >
                        <Container className="cards-container">
                            <Row className="cards-row">
                                <Col className="mx-5" lg={3} md={12}>
                                    <TrainerCard profilePhoto="https://picsum.photos/150/150?random=4" trainerName="TEST4"/>
                                </Col>
                                <Col className="mx-5" lg={3} md={12}>
                                    <TrainerCard profilePhoto="https://picsum.photos/150/150?random=5" trainerName="TEST5"/>
                                </Col>
                                <Col className="mx-4" lg={3} md={12}>
                                    <TrainerCard profilePhoto="https://picsum.photos/150/150?random=6" trainerName="TEST6"/>
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