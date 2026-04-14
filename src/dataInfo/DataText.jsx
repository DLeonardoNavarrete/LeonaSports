// Importamos los datos desde tu archivo data.js
import { countries, detCountries } from './data.js';

function CountryList() {
  return (
    // Un contenedor principal con espaciado y fondo oscuro para tus textos blancos
    <div className="container mx-auto p-8 bg-[#1A1A1A] text-white min-h-screen">
      
      {/* Título principal de la página con Bebas Neue */}
      <h1 className="font-bebas text-5xl text-[#fdbb754] mb-12 text-center tracking-wider">
        Nuestras Selecciones
      </h1>

      {/* Grid para mostrar las tarjetas de los países */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {countries.map((country) => (
          <div key={country.id} className="border border-gray-700 rounded-lg p-6 bg-gray-800 shadow-xl flex flex-col items-center">
            
            {/* Aquí aplicamos la fuente 'bebas' al Título (<h1>) */}
            <h2 className="font-bebas text-3xl text-[#eddbb754] mb-4 text-center">
              {country.titulo}
            </h2>

            {/* Aquí aplicamos la fuente 'montserrat' al Párrafo (<p>) */}
            <p className="font-montserrat text-lg text-gray-300 mb-6 leading-relaxed text-center">
              {country.parrafo}
            </p>

            {/* Contenedor de imágenes */}
            <div className="flex gap-4 flex-wrap justify-center">
              {country.imagenes.map((imagen, index) => (
                <img 
                  key={index}
                  src={imagen.src} 
                  alt={`${country.titulo} imagen ${index + 1}`}
                  className="w-32 h-32 object-cover rounded-md border border-gray-600 shadow-md"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CountryList;