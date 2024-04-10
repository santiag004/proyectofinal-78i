import Carrusel from '../../components/Carousel/Carousel'
import Gymservices from '../../components/Gymservices/Gymservices'
import TrainerCarousel from '../../components/TrainerCarousel/TrainerCarousel'
import PlansSection from '../../components/PlansSection/PlansSection'
import FeaturedProd from '../../components/FeaturedProduct/FeaturedProd'
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery'
import Weather from '../../components/Weather/Weather'

const Home = () => {
  return (
    <>
    <Carrusel/>
    <Gymservices/>
    <Weather/>
    <TrainerCarousel/>
    <PlansSection/>
    <FeaturedProd/>
    <PhotoGallery/>
    </>
  )
}

export default Home