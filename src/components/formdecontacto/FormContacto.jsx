import "./styleFormContacto.css"
import { useState } from "react";
import Swal from "sweetalert2";
import {useNavigate} from 'react-router-dom'

const FormContacto = () => {

    const [formCont, setFormCont] = useState({
        Nombre: '',
        Apellido: '',
        email: '',
        message: ''
      });

      const navigate = useNavigate()

      const handleChange = (e) => {
        e.preventDefault();
        setFormCont({ ...formCont, [e.target.name]: e.target.value });
      };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formCont.Nombre || !formCont.Apellido || !formCont.email || !formCont.message){
            Swal.fire({
                title: "Error",
                text: "Por favor, complete todos los campos antes de enviar el formulario.",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
            return;
        }

        if (!(!formCont.Nombre) || !(!formCont.Apellido) || !(!formCont.email) || !(!formCont.message)){
            Swal.fire({
                title: "Enviado",
                text: "Nos contactaremos contigo en la brevedad!!",
                icon: "success",
                confirmButtonText: "Aceptar",
            });
            setTimeout(() => {
                navigate("/*")
            }, 500);
        }

    }

    



  return (
    <>
    <div className="content">
        
        <h1 className="logo">Contactanos</h1>

        <div className="contact-wrapper animated bounceInUp">
            <div className="contact-form">
                <h3>Escribinos</h3>
                <form onSubmit={handleSubmit}>
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="Nombre" value={formCont.Nombre} onChange={handleChange} required maxLength="25" pattern="[A-Za-z ]+"/>
                    </p>
                    <p>
                        <label>Apellido </label>
                        <input type="text" name="Apellido" value={formCont.Apellido} onChange={handleChange} required maxLength="25" pattern="[A-Za-z ]+"/>
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="email" name="email" value={formCont.email} onChange={handleChange} required maxLength="30"/>
                    </p>
                    
                    <p className="block">
                       <label>Consulta</label> 
                        <textarea name="message" rows="3" value={formCont.message} onChange={handleChange} maxLength="300"></textarea>
                    </p>
                    <p className="block">
                        <button type="submit">
                            Enviar Consulta
                        </button>
                    </p>
                </form>
            </div>
            <div className="contact-info">
                <h4>Por Mas Consultas</h4>
                <ul>
                    <li><i className="fas fa-map-marker-alt"></i> General Paz 1234</li>
                    <li><i className="fas fa-phone"></i> (0381) 155631490</li>
                    <li><i className="fas fa-envelope-open-text"></i> contacto@htmlift.com</li>
                </ul>
                <p>Te Respondemos Todos Los Dias De 07:00 a.m a 22:00 p.m</p>
             
            </div>
        </div>

    </div>

    </>
  )
}

export default FormContacto