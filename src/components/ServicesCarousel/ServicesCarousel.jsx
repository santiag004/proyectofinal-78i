import { Carousel } from "react-bootstrap"
import './ServicesCarousel.css'

const ServicesCarousel = () => {
    return (
        <>
            <Carousel indicators={false} controls={false} className="services-img" fade>
                <Carousel.Item interval={1400}>
                    <img src="https://picsum.photos/500/700?random=1" className="img-fluid" />
                </Carousel.Item>
                <Carousel.Item interval={1400}>
                    <img src="https://picsum.photos/500/700?random=2" className="img-fluid" />
                </Carousel.Item>
                <Carousel.Item interval={1400}>
                    <img src="https://picsum.photos/500/700?random=3" className="img-fluid" />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default ServicesCarousel