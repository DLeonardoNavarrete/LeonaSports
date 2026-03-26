import { useParams } from 'react-router-dom';
import { getLeagueBySlug, getTeamBySlug } from '../../dataInfo/data';
import Carrusel from '../carrusel/carrusel';
import Header from '../header/Header';

function DetTeam() {
  const { slug } = useParams();
  const contenido = getTeamBySlug(slug) || getLeagueBySlug(slug);

  if (!contenido) {
    return (
      <div className="detalle-page">
        <Header />
        <div className="error-page">
          <h2>Elemento no encontrado</h2>
          <p>Lo sentimos, el contenido que buscas no existe.</p>
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

export default DetTeam;
