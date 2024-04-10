import { Container, Carousel } from "react-bootstrap"
import './PhotoGallery.css'

const PhotoGallery = () => {
    return (
        <>
            <Container className="photos-container">
                <h1 className="title">ALGUNAS FOTOS DE NUESTRO GIMNASIO</h1>
                <Carousel fade>
                    <Carousel.Item interval={1400}>
                        <img src="https://picsum.photos/1280/720?random=1" className="img-fluid" />
                    </Carousel.Item>
                    <Carousel.Item interval={1400}>
                        <img src="https://picsum.photos/1280/720?random=2" className="img-fluid" />
                    </Carousel.Item>
                    <Carousel.Item interval={1400}>
                        <img src="https://picsum.photos/1280/720?random=3" className="img-fluid" />
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    )
}

export default PhotoGallery