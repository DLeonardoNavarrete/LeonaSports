import { useState } from 'react';
import './diseño/App.css';
import Header from './components/Header';

const App = () => {
    const [seccion, setSeccion] = useState('home');
    return (
        <div className="App">
            <Header seccion={seccion} />
            <main>
                <h2>Bienvenido a Leona Sports</h2>
                <p>Tu tienda de deportes en línea</p>
            </main>
        </div>
    );
};

export default App;