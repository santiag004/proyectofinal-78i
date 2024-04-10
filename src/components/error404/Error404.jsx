import "./styleError404.css"

const Error404 = () => {
  return (
    <>
      <div className="container">
        <img src="src\assets\404log.jpg" alt="" />
        <h1>Oops! Página no encontrada</h1>

        <div className="boton">
          <a href="index.html">
            <button> Volver a la página principal</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Error404;
