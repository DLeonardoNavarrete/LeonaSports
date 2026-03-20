// Librerías
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import { useState } from 'react';

// Componentes
import Header from './components/header/Header';
import Carrusel from './components/carrusel/carrusel';

// Estilos
import './diseño/App.css';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <div className="content-App">
                <Carrusel
                    imagenes={[
                        {src: "/images/logo.png", link: "/", pestañaNueva: true}
                    ]}
                    tituloSeccion="Bienvenida a Leona Sports"
                    parrafoSeccion="¡Bienvenidos a Leona Sports! Somos una comunidad apasionada por el deporte, dedicada a compartir noticias, eventos y contenido exclusivo sobre el mundo deportivo. Únete a nosotros para estar al tanto de las últimas novedades y disfrutar de una experiencia única en el mundo del deporte."
                    idSeccion="bienvenida"
                />
            </div>
        </div>
    );
};

export default App;