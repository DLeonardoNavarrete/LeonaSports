import { Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Carrusel from './components/carrusel/carrusel';
import DetClub from './components/detClub/detClub';
import DetTeam from './components/detTeam/detTeam';
import NotFound from './components/notFound/NotFound';
import { homeSections } from './dataInfo/data';
import './diseno/App.css';

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
      <Route path="/ligas/:countrySlug/:clubSlug" element={<DetClub />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
