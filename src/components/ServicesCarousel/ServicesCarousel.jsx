import { Carousel } from "react-bootstrap"
import './ServicesCarousel.css'

const ServicesCarousel = () => {
    return (
        <>
            <Carousel indicators={false} controls={false} className="services-img" fade>
                <Carousel.Item interval={1800}>
                    <img src="\images\home\services-photos\ph1.jpg" className="img-fluid" />
                </Carousel.Item>
                <Carousel.Item interval={1800}>
                    <img src="\images\home\services-photos\ph2.jpg" className="img-fluid" />
                </Carousel.Item>
                <Carousel.Item interval={1800}>
                    <img src="\images\home\services-photos\ph3.jpg" className="img-fluid" />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default ServicesCarousel