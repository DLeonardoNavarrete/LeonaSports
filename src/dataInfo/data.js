const createImageItem = (src, itemSlug, link, extra = {}) => ({
  src,
  itemSlug,
  link,
  ...extra,
});

export const countries = [
  {
    id: 'selecciones-colombia',
    slug: 'colombia',
    categoria: 'selecciones',
    titulo: 'Seleccion Colombia',
    parrafo: 'Camiseta para hombre y mujer del mundial 2026',
    imagenes: [
      createImageItem(
        '/images/contenidos/colombia/colombia-2026-detalles.jpeg',
        'colombia-detalles',
        '/selecciones/colombia'
      ),
      createImageItem(
        '/images/contenidos/colombia/colombia-2026-hombre&mujer.jpeg',
        'colombia-home-away',
        '/selecciones/colombia'
      ),
      createImageItem(
        '/images/contenidos/colombia/colombia-2026-estampada.jpeg',
        'colombia-estampada',
        '/selecciones/colombia'
      ),
      createImageItem(
        '/images/contenidos/colombia/colombia-2026-concaja.jpeg',
        'colombia-con-caja',
        '/selecciones/colombia'
      ),
    ],
  },
  {
    id: 'selecciones-destacadas',
    slug: 'selecciones',
    categoria: 'selecciones',
    titulo: 'Selecciones',
    parrafo: 'Selecciones mundialistas',
    imagenes: [
      createImageItem(
        '/images/contenidos/selecciones/alemania-2026-local.jpg',
        'alemania',
        '/selecciones/alemania'
      ),
      createImageItem(
        '/images/contenidos/selecciones/argentina-2026-local.jpg',
        'argentina',
        '/selecciones/argentina'
      ),
      createImageItem(
        '/images/contenidos/selecciones/brasil-2026-local.jpg',
        'brasil',
        '/selecciones/brasil'
      ),
      createImageItem(
        '/images/contenidos/selecciones/españa-2026-local.jpg',
        'espana',
        '/selecciones/espana'
      ),
      createImageItem(
        '/images/contenidos/selecciones/francia-2026-local.jpg',
        'francia',
        '/selecciones/francia'
      ),
      createImageItem(
        '/images/contenidos/selecciones/inglaterra-2026-local.jpg',
        'inglaterra',
        '/selecciones/inglaterra'
      ),
      createImageItem(
        '/images/contenidos/selecciones/italia-2026-local.jpg',
        'italia',
        '/selecciones/italia'
      ),
      createImageItem(
        '/images/contenidos/selecciones/japon-2026-local.jpg',
        'japon',
        '/selecciones/japon'
      ),
      createImageItem(
        '/images/contenidos/selecciones/mexico-2026-local.jpg',
        'mexico',
        '/selecciones/mexico'
      ),
      createImageItem(
        '/images/contenidos/selecciones/portugal-2026-local.jpg',
        'portugal',
        '/selecciones/portugal'
      ),
    ],
  },
];

export const detCountries = [
  {
    id: 'ligas-europa',
    slug: 'europa',
    categoria: 'ligas',
    titulo: 'Ligas de Europa',
    parrafo: 'Premier League - LaLiga - Bundesliga - Serie A - Ligue 1',
    imagenes: [
      createImageItem(
        '/images/contenidos/clubes/arsenal-2026-local.jpg',
        'arsenal',
        '/ligas/inglaterra/arsenal'
      ),
      createImageItem(
        '/images/contenidos/clubes/barcelona-2026-local.jpg',
        'barcelona',
        '/ligas/espana/barcelona'
      ),
      createImageItem(
        '/images/contenidos/clubes/dormunt-2025-local.jpg',
        'dortmund',
        '/ligas/alemania/dortmund'
      ),
      createImageItem(
        '/images/contenidos/clubes/intermilan-2026-local.jpg',
        'inter-milan',
        '/ligas/italia/inter-milan'
      ),
      createImageItem(
        '/images/contenidos/clubes/mancity-2026-local.jpg',
        'manchester-city',
        '/ligas/inglaterra/manchester-city'
      ),
      createImageItem(
        '/images/contenidos/clubes/realmadrid-2026-local.jpg',
        'real-madrid',
        '/ligas/espana/real-madrid'
      ),
    ],
  },
  {
    id: 'ligas-sudamerica',
    slug: 'sudamerica',
    categoria: 'ligas',
    titulo: 'Ligas de Sudamerica',
    parrafo: 'Camisetas y referencias de los clubes sudamericanos',
    imagenes: [
      createImageItem(
        '/images/logo.png',
        'ligas-sudamerica',
        '/ligas/sudamerica'
      ),
    ],
  },
];

export const homeSections = [...countries, ...detCountries];

export const teams = [
  {
    id: 'team-colombia',
    slug: 'colombia',
    categoria: 'selecciones',
    pais: 'colombia',
    titulo: 'Seleccion Colombia',
    parrafo: 'Coleccion completa de la seleccion Colombia para 2026',
    imagenes: countries[0].imagenes,
    relacionados: ['liga-colombia'],
  },
  {
    id: 'team-alemania',
    slug: 'alemania',
    categoria: 'selecciones',
    pais: 'alemania',
    titulo: 'Seleccion Alemania',
    parrafo: 'Camiseta local 2026 y futuros detalles de la seleccion alemana',
    imagenes: [
      createImageItem(
        '/images/contenidos/selecciones/alemania-2026-local.jpg',
        'alemania-local',
        '/selecciones/alemania'
      ),
    ],
    relacionados: ['liga-alemania'],
  },
  {
    id: 'team-argentina',
    slug: 'argentina',
    categoria: 'selecciones',
    pais: 'argentina',
    titulo: 'Seleccion Argentina',
    parrafo: 'Camiseta local 2026 y futuros detalles de la seleccion argentina',
    imagenes: [
      createImageItem(
        '/images/contenidos/selecciones/argentina-2026-local.jpg',
        'argentina-local',
        '/selecciones/argentina'
      ),
    ],
    relacionados: ['liga-argentina'],
  },
  {
    id: 'team-brasil',
    slug: 'brasil',
    categoria: 'selecciones',
    pais: 'brasil',
    titulo: 'Seleccion Brasil',
    parrafo: 'Camiseta local 2026 y futuros detalles de la seleccion brasilena',
    imagenes: [
      createImageItem(
        '/images/contenidos/selecciones/brasil-2026-local.jpg',
        'brasil-local',
        '/selecciones/brasil'
      ),
    ],
    relacionados: ['liga-brasil'],
  },
  {
    id: 'team-espana',
    slug: 'espana',
    categoria: 'selecciones',
    pais: 'espana',
    titulo: 'Seleccion Espana',
    parrafo: 'Camiseta local 2026 y futuros detalles de la seleccion espanola',
    imagenes: [
      createImageItem(
        '/images/contenidos/selecciones/españa-2026-local.jpg',
        'espana-local',
        '/selecciones/espana'
      ),
    ],
    relacionados: ['liga-espana'],
  },
  {
    id: 'team-francia',
    slug: 'francia',
    categoria: 'selecciones',
    pais: 'francia',
    titulo: 'Seleccion Francia',
    parrafo: 'Camiseta local 2026 y futuros detalles de la seleccion francesa',
    imagenes: [
      createImageItem(
        '/images/contenidos/selecciones/francia-2026-local.jpg',
        'francia-local',
        '/selecciones/francia'
      ),
    ],
    relacionados: ['liga-francia'],
  },
  {
    id: 'team-inglaterra',
    slug: 'inglaterra',
    categoria: 'selecciones',
    pais: 'inglaterra',
    titulo: 'Seleccion Inglaterra',
    parrafo: 'Camiseta local 2026 y futuros detalles de la seleccion inglesa',
    imagenes: [
      createImageItem(
        '/images/contenidos/selecciones/inglaterra-2026-local.jpg',
        'inglaterra-local',
        '/selecciones/inglaterra'
      ),
    ],
    relacionados: ['liga-inglaterra'],
  },
  {
    id: 'team-italia',
    slug: 'italia',
    categoria: 'selecciones',
    pais: 'italia',
    titulo: 'Seleccion Italia',
    parrafo: 'Camiseta local 2026 y futuros detalles de la seleccion italiana',
    imagenes: [
      createImageItem(
        '/images/contenidos/selecciones/italia-2026-local.jpg',
        'italia-local',
        '/selecciones/italia'
      ),
    ],
    relacionados: ['liga-italia'],
  },
  {
    id: 'team-japon',
    slug: 'japon',
    categoria: 'selecciones',
    pais: 'japon',
    titulo: 'Seleccion Japon',
    parrafo: 'Camiseta local 2026 y futuros detalles de la seleccion japonesa',
    imagenes: [
      createImageItem(
        '/images/contenidos/selecciones/japon-2026-local.jpg',
        'japon-local',
        '/selecciones/japon'
      ),
    ],
    relacionados: ['liga-japon'],
  },
  {
    id: 'team-mexico',
    slug: 'mexico',
    categoria: 'selecciones',
    pais: 'mexico',
    titulo: 'Seleccion Mexico',
    parrafo: 'Camiseta local 2026 y futuros detalles de la seleccion mexicana',
    imagenes: [
      createImageItem(
        '/images/contenidos/selecciones/mexico-2026-local.jpg',
        'mexico-local',
        '/selecciones/mexico'
      ),
    ],
    relacionados: ['liga-mexico'],
  },
  {
    id: 'team-portugal',
    slug: 'portugal',
    categoria: 'selecciones',
    pais: 'portugal',
    titulo: 'Seleccion Portugal',
    parrafo: 'Camiseta local 2026 y futuros detalles de la seleccion portuguesa',
    imagenes: [
      createImageItem(
        '/images/contenidos/selecciones/portugal-2026-local.jpg',
        'portugal-local',
        '/selecciones/portugal'
      ),
    ],
    relacionados: ['liga-portugal'],
  },
];

export const leagues = [
  {
    id: 'liga-inglaterra',
    slug: 'inglaterra',
    categoria: 'ligas',
    pais: 'inglaterra',
    titulo: 'Liga de Inglaterra',
    parrafo: 'Clubes destacados de Inglaterra y futuros detalles de la Premier League',
    imagenes: [
      createImageItem(
        '/images/contenidos/clubes/arsenal-2026-local.jpg',
        'arsenal',
        '/ligas/inglaterra/arsenal'
      ),
      createImageItem(
        '/images/contenidos/clubes/mancity-2026-local.jpg',
        'manchester-city',
        '/ligas/inglaterra/manchester-city'
      ),
    ],
  },
  {
    id: 'liga-espana',
    slug: 'espana',
    categoria: 'ligas',
    pais: 'espana',
    titulo: 'Liga de Espana',
    parrafo: 'Clubes destacados de Espana y futuros detalles de LaLiga',
    imagenes: [
      createImageItem(
        '/images/contenidos/clubes/barcelona-2026-local.jpg',
        'barcelona',
        '/ligas/espana/barcelona'
      ),
      createImageItem(
        '/images/contenidos/clubes/realmadrid-2026-local.jpg',
        'real-madrid',
        '/ligas/espana/real-madrid'
      ),
    ],
  },
  {
    id: 'liga-alemania',
    slug: 'alemania',
    categoria: 'ligas',
    pais: 'alemania',
    titulo: 'Liga de Alemania',
    parrafo: 'Clubes destacados de Alemania y futuros detalles de la Bundesliga',
    imagenes: [
      createImageItem(
        '/images/contenidos/clubes/dormunt-2025-local.jpg',
        'dortmund',
        '/ligas/alemania/dortmund'
      ),
    ],
  },
  {
    id: 'liga-italia',
    slug: 'italia',
    categoria: 'ligas',
    pais: 'italia',
    titulo: 'Liga de Italia',
    parrafo: 'Clubes destacados de Italia y futuros detalles de la Serie A',
    imagenes: [
      createImageItem(
        '/images/contenidos/clubes/intermilan-2026-local.jpg',
        'inter-milan',
        '/ligas/italia/inter-milan'
      ),
    ],
  },
];

export const getTeamBySlug = (slug) =>
  teams.find((team) => team.slug === slug);

export const getLeagueBySlug = (slug) =>
  leagues.find((league) => league.slug === slug);

export const getHomeSectionBySlug = (slug) =>
  homeSections.find((section) => section.slug === slug);
