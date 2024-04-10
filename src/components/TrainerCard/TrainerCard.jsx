import { Container, Card } from "react-bootstrap"
import './TrainerCard.css'

const TrainerCard = ({profilePhoto, trainerName}) => {
  return (
    <>
    <Card style={{ width: '15rem' }} className="card-container d-flex justify-content-center align-items-center">
      <Card.Img variant="top" src={profilePhoto} className="rounded-circle profile-photo"/>
      <Card.Body className="trainer-name">
        <h2>{trainerName}</h2>
      </Card.Body>
    </Card>
    </>
  )
}

export default TrainerCard