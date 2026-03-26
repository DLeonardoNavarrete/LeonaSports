import { Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Carrusel from './components/carrusel/carrusel';
import DetTeam from './components/detTeam/detTeam';
import { homeSections } from './dataInfo/data';
import './diseño/App.css';

function Home() {
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/selecciones/:slug" element={<DetTeam />} />
      <Route path="/ligas/:slug" element={<DetTeam />} />
    </Routes>
  );
}

export default App;
