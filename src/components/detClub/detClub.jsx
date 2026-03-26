import { useParams } from 'react-router-dom';
import { getClubBySlugs } from '../../dataInfo/data';
import Carrusel from '../carrusel/carrusel';
import Header from '../header/Header';

function DetClub() {
  const { countrySlug, clubSlug } = useParams();
  const contenido = getClubBySlugs(countrySlug, clubSlug);

  if (!contenido) {
    return (
      <div className="detalle-page">
        <Header />
        <div className="error-page">
          <h2>Club no encontrado</h2>
          <p>Lo sentimos, el club que buscas no existe o aun no tiene contenido.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="detalle-page">
      <Header />
      <Carrusel
        imagenes={contenido.imagenes}
        tituloSeccion={contenido.titulo}
        parrafoSeccion={contenido.parrafo}
        idSeccion={contenido.slug}
      />
    </div>
  );
}

export default DetClub;
