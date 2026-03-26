import Header from '../header/Header';

function NotFound() {
  return (
    <div className="detalle-page">
      <Header />
      <div className="error-page">
        <h2>Pagina no encontrada</h2>
        <p>La ruta que intentaste abrir no existe dentro del proyecto.</p>
      </div>
    </div>
  );
}

export default NotFound;
