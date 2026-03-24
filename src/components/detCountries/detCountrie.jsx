import { useParams } from 'react-router-dom';
import { detCountrie } from '../../dataInfo/data';
import Carrusel from './Carrusel';
import { useState, useEffect,} from 'react';

const detCountrie = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const contenido = detCountrie.find(seccion => seccion.id.toLowerCase() === id?.toLowerCase());
  useEffect(() => {
    const timer =setTimeout(()=>setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [id]);
  if (!contenido && !loading) {
    return (
      <div className="error-page">
        <h2>Proyecto no encontrado</h2>
        <p>Lo sentimos, el proyecto que buscas no existe.</p>
      </div>
    );
  }
  if (loading) {
    return (<div className="detalle-page">
        <div className="skeleton skeleton-title" style={{ margin: '0 auto 20px' }}></div>
        <div className="skeleton skeleton-image" style={{ height: '60vh' }}></div>
      </div>
  );
}
  return (
    <div className="detalle-page">
      <Carrusel
        imagenes={contenido.galeria}
        tituloSeccion={contenido.titulo}
        parrafoSeccion={contenido.parrafo}
        idSeccion={contenido.id}
      />
    </div>
  );
};
export default detCountrie;