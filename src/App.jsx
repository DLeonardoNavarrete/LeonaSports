// Componentes
import Header from './components/header/Header';
import Carrusel from './components/carrusel/carrusel';

// DataInfo
import { countries, detCountries } from './dataInfo/data';

// Estilos
import './diseño/App.css';

function App() {
  const secciones = [
    ...countries.map((item) => ({ ...item, tipo: 'country' })),
    ...detCountries.map((item) => ({ ...item, tipo: 'det-country' })),
  ];

  return (
    <div className="App">
      <Header />
      <div className="content-App">
        {secciones.map((item) => (
          <Carrusel
            key={`${item.tipo}-${item.id}`}
            imagenes={item.imagenes}
            tituloSeccion={item.titulo}
            parrafoSeccion={item.parrafo}
            idSeccion={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
