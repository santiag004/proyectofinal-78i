import "./styleFormContacto.css"


const FormContacto = () => {
  return (
    <>
    <div className="content">
        
        <h1 className="logo">Contactanos</h1>

        <div className="contact-wrapper animated bounceInUp">
            <div className="contact-form">
                <h3>Escribinos</h3>
                <form action="">
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="Nombre"/>
                    </p>
                    <p>
                        <label>Apellido </label>
                        <input type="email" name="Apellido"/>
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="tel" name="email"/>
                    </p>
                    
                    <p className="block">
                       <label>Consulta</label> 
                        <textarea name="message" rows="3"></textarea>
                    </p>
                    <p className="block">
                        <button>
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