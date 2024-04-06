
import './aboutCards.css'

const AboutCards = ({name, phUrl}) => {
  return (
    <>
    <article className="aboutCard">
          <img
            className="card__background"
            src={phUrl}
            alt="Foto de Claudio Echeverri, jugador de River Plate"
            width="1920"
            height="2193"
          />
          <div className="card__content | flow">
            <div className="card__content--container | flow">
              <h2 className="card__title">{name}</h2>
              <p className="card__description">
              Cada línea representa el resultado de un esfuerzo incansable, una pasión compartida y un compromiso inquebrantable hacia la excelencia. Juntos, trabajamos duro para mejorar cada dia.
              </p>
            </div>
          </div>
        </article>
    </>
  )
}

export default AboutCards