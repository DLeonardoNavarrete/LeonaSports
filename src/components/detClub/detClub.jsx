import { useParams } from 'react-router-dom';
import { getClubBySlugs } from '../../dataInfo/data';
import DetailGallery from '../detailGallery/DetailGallery';

function DetClub() {
  const { countrySlug, clubSlug } = useParams();
  const contenido = getClubBySlugs(countrySlug, clubSlug);

  return (
    <DetailGallery
      titulo={contenido?.titulo}
      parrafo={contenido?.parrafo}
      imagenes={contenido?.imagenes}
      emptyTitle="Club no encontrado"
      emptyText="Lo sentimos, el club que buscas no existe o aun no tiene contenido."
    />
  );
}

export default DetClub;
