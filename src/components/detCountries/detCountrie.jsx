import { useParams } from 'react-router-dom';
import { detCountries } from '../../dataInfo/data';
import Carrusel from './Carrusel';
import { useState, useEffect,} from 'react';

function DetContrie() {
  const { id } = useParams();
  const contenido =detCountries.find(
    (seccion) => String(seccion.id) === String(id)
  );

  if (!contenido){
    return (
      <div className="error-page">
        <h2>Elemento no encontrado</h2>
        <p>Lo sentimos, presentamos falals</p>
      </div>
    );
  }

  return (
    <div className="detalle-page">
      <Carrusel imagenes={contenido.imagenes} />
    </div>
  );
}

export default DetCountrie;