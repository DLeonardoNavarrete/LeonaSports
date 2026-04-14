import { useParams } from 'react-router-dom';
import { getLeagueBySlug, getTeamBySlug } from '../../dataInfo/data';
import DetailGallery from '../detailGallery/DetailGallery';

function DetTeam() {
  const { slug } = useParams();
  const contenido = getTeamBySlug(slug) || getLeagueBySlug(slug);

  return (
    <DetailGallery
      titulo={contenido?.titulo}
      parrafo={contenido?.parrafo}
      imagenes={contenido?.imagenes}
      emptyTitle="Elemento no encontrado"
      emptyText="Lo sentimos, el contenido que buscas no existe."
    />
  );
}

export default DetTeam;
