// Componentes
import Header from './components/header/Header';
import Carrusel from './components/carrusel/carrusel';

// DataInfo
import { homeSections } from './dataInfo/data';

// Estilos
import './diseño/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-App">
        {homeSections.map((item) => (
          <Carrusel
            key={item.id}
            imagenes={item.imagenes}
            tituloSeccion={item.titulo}
            parrafoSeccion={item.parrafo}
            idSeccion={item.slug}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
