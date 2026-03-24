// Librerías
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import { useState } from 'react';

// Componentes
import Header from './components/header/Header';
import Carrusel from './components/carrusel/carrusel';
import { countries, } from './dataInfo/data';

// Estilos
import './diseño/App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="content-App">
                {countries.map(data => (
                    <Carrusel key={data.id} imagenes={data.imagenes} />
                ))}
            </div>
        </div>
    );
};

export default App;