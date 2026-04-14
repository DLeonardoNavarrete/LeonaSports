import Header from '../header/Header';
import './detailGallery.css';

function DetailGallery({ titulo, parrafo, imagenes, emptyTitle, emptyText }) {
  if (!imagenes || imagenes.length === 0) {
    return (
      <div className="detalle-page">
        <Header />
        <div className="error-page">
          <h2>{emptyTitle}</h2>
          <p>{emptyText}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="detalle-page">
      <Header />
      <section className="gallery-shell">
        <div className="gallery-hero">
          <h1 className="gallery-hero-title">{titulo}</h1>
          <p className="gallery-hero-text">{parrafo}</p>
        </div>

        <div className="gallery-grid">
          {imagenes.map((img, index) => (
            <article className="gallery-card" key={img.itemSlug || index}>
              <div className="gallery-media">
                <img
                  src={img.src}
                  alt={img.alt || `${titulo} ${index + 1}`}
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <span className="gallery-tag">{img.overlayTag || titulo}</span>
                  <h2 className="gallery-overlay-title">
                    {img.overlayTitulo || img.tituloImagen || 'Detalle'}
                  </h2>
                </div>
              </div>

              <div className="gallery-copy">
                <p className="gallery-kicker">{img.kicker || 'Referencia visual'}</p>
                <h3 className="gallery-title">
                  {img.tituloImagen || 'Imagen del catalogo'}
                </h3>
                <p className="gallery-text">
                  {img.detalleImagen || 'Contenido sin detalle adicional.'}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default DetailGallery;
