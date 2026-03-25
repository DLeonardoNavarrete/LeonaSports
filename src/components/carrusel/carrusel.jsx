import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import './carrusel.css';

const Carrusel = ({ imagenes, tituloSeccion, parrafoSeccion, idSeccion }) => {
  return (
    <div className="carrusel-item" id={idSeccion}>
      <Swiper
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        className="carrusel-contenido"
      >
        {tituloSeccion && (
          <SwiperSlide>
            <div className="bienvenida">
              <h1 className="font-bebas text-3xl text-[#dbb754] mb-3 tracking-wide">
                {tituloSeccion}
                </h1>
              <p className="bienvenida-texto font-montserrat text-sm text-gray-300 leading-relaxed mb-6">
                {parrafoSeccion}
                </p>
              <div className="bienvenida-indicador font-montserrat text-sm text-gray-300 leading-relaxed mb-6">
                Desliza →
                </div>
            </div>
          </SwiperSlide>
        )}
        {imagenes.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="slide-container">
              <Link 
                to={img.link || "#"}
                target={img.pestañaNueva ? "_blank" : "_self"}
                rel={img.pestañaNueva ? "noopener noreferrer" : undefined} 
              >
                <img 
                  src={img.src} 
                  alt={`Imagen${i}`} 
                  className="img" 
                />
              </Link>
              {(img.reacts || img.info) && (
                <div className='carrusel-sidebar'>
                  <div className='reacts'>{img.reacts}</div>
                  <div className='info'>
                    <p>{img.info}</p>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Carrusel;