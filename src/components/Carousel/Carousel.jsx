import { Carousel } from "react-bootstrap"

const Carrusel = () => {
  return (
    <>
    <Carousel fade>
      <Carousel.Item interval={2000}>
        <img src="\images\home\banners\ban1.jpg" className="img-fluid"/>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img src="\images\home\banners\ban2.jpg" className="img-fluid"/>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img src="\images\home\banners\ban3.jpg" className="img-fluid"/>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Carrusel