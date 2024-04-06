
import './aboutCards.css'

const AboutCards = () => {
  return (
    <>
    <article className="aboutCard">
          <img
            className="card__background"
            src="https://www.clarin.com/img/2023/12/23/DmbID9wXE_600x600__1.jpg"
            alt="Foto de Claudio Echeverri, jugador de River Plate"
            width="1920"
            height="2193"
          />
          <div className="card__content | flow">
            <div className="card__content--container | flow">
              <h2 className="card__title">CLAUDIO ECHEVERRI</h2>
              <p className="card__description">
                Usando la camiseta Nº 19, Echeverri es un futbolista argentino. Juega de mediocampista o extremo. Su actual es River Plate en Primera División Argentina.
              </p>
            </div>
          </div>
        </article>
    </>
  )
}

export default AboutCards