// Librerías
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import { useState } from 'react';

// Componentes
import Header from './components/header/Header';

// Estilos
import './diseño/App.css';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <div className="content-App">
            </div>
        </div>
    );
};

export default App;