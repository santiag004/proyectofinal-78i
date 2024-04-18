import { useContext } from 'react'
import { Container, Carousel } from "react-bootstrap"
import { serviceContextProvider } from "../../context/serviceContext/ServiceContext.jsx";
import './PhotoGallery.css'

const PhotoGallery = () => {
    const {services} = useContext(serviceContextProvider)
    return (
        <>
            <Container className="photos-container">
                <h1 className="title">ALGUNAS FOTOS DE NUESTRO GIMNASIO</h1>
                {services.length === 0 ? (
                    <h1 className="title">No hay fotos cargadas para mostrar</h1>
                ) : (
                    <Carousel fade>
                    {services.map ((service) => (
                        <Carousel.Item interval={1400} key={service._id}>
                        <img src={service.url} className="img-fluid" />
                        <Carousel.Caption>
                            <h3>{service.titulo}</h3>
                            <p>{service.descripcion}</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
                )}
                
            </Container>
        </>
    )
}

export default PhotoGallery