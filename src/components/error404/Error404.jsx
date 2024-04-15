import "./styleError404.css"

const Error404 = () => {
  return (
    <>
      <div className="error404-container">
        <img src="src\assets\404log.jpg" alt="Imagen error 404" className="errorimg"/>
        <h1 className="err-title">Oops! Página no encontrada</h1>

        <div className="boton-err">
          <a href="/">
            <button> Volver a la página principal</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Error404;
