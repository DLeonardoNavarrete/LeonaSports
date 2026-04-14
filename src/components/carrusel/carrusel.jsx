import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import './carrusel.css';

const Carrusel = ({ imagenes, tituloSeccion, parrafoSeccion, idSeccion }) => {
  return (
    <section className="carrusel-item" id={idSeccion}>
      <div className="carrusel-layout">
        {tituloSeccion && (
          <aside className="bienvenida">
            <h1 className="bienvenida-titulo font-bebas text-3xl text-[#dbb754] mb-3 tracking-wide">
              {tituloSeccion}
            </h1>
            <p className="bienvenida-texto font-montserrat text-[#c2c1b9] leading-relaxed mb-6">
              {parrafoSeccion}
            </p>
          </aside>
        )}

        <Swiper
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          className="carrusel-contenido"
        >
          {imagenes.map((img, i) => (
            <SwiperSlide key={img.itemSlug || i}>
              <article className="slide-card">
                <Link
                  to={img.link || '#'}
                  target={img.pestanaNueva ? '_blank' : '_self'}
                  rel={img.pestanaNueva ? 'noopener noreferrer' : undefined}
                  className="slide-link"
                >
                  <div className="slide-media">
                    <img
                      src={img.src}
                      alt={img.alt || `Imagen ${i + 1}`}
                      className="img"
                    />
                    <div className="slide-overlay">
                      <span className="slide-tag">
                        {img.overlayTag || tituloSeccion}
                      </span>
                      <h3 className="slide-overlay-title">
                        {img.overlayTitulo || img.tituloImagen || 'Coleccion destacada'}
                      </h3>
                    </div>
                  </div>

                  <div className="slide-detail-card">
                    <p className="slide-kicker">{img.kicker || 'Detalle visual'}</p>
                    <h3 className="slide-title">
                      {img.tituloImagen || 'Titulo sin contenido'}
                    </h3>
                    <p className="slide-text">
                      {img.detalleImagen || 'Detalle sin contenido.'}
                    </p>
                  </div>
                </Link>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Carrusel;
