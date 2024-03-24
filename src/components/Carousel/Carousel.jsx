import { Carousel } from "react-bootstrap"

const Carrusel = () => {
  return (
    <>
    <Carousel fade>
      <Carousel.Item interval={1400}>
        <img src="https://picsum.photos/1920/400?random=1" className="img-fluid"/>
      </Carousel.Item>
      <Carousel.Item interval={1400}>
      <img src="https://picsum.photos/1920/400?random=2" className="img-fluid"/>
      </Carousel.Item>
      <Carousel.Item interval={1400}>
      <img src="https://picsum.photos/1920/400?random=3" className="img-fluid"/>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Carrusel