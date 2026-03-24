import { useParams } from 'react-router-dom';
import { detCountries } from '../../dataInfo/data';
import Carrusel from '../carrusel/carrusel';

function DetTeam() {
  const { id } = useParams();
  const contenido = detCountries.find(
    (seccion) => String(seccion.id) === String(id)
  );

  if (!contenido) {
    return (
      <div className="error-page">
        <h2>Elemento no encontrado</h2>
        <p>Lo sentimos, el contenido que buscas no existe.</p>
      </div>
    );
  }

  return (
    <div className="detalle-page">
      <Carrusel
        imagenes={contenido.imagenes}
        tituloSeccion={contenido.titulo}
        parrafoSeccion={contenido.parrafo}
        idSeccion={contenido.id}
      />
    </div>
  );
}

export default DetTeam;
