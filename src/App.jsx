// Librerías
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Componentes
import Header from './components/Header';

// Estilos
import './diseño/App.css';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <main>
                <h2>Bienvenido a Leona Sports</h2>
                <p>Tu tienda de deportes en línea</p>
            </main>
        </div>
    );
};

export default App;