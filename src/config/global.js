export default {
  global: {
    componenteFormativo: 'Reconocimiento de clientes',
    descripcionCurso:
      'El reconocimiento de clientes es necesario para la interacción asertiva. Se identificará la importancia que tiene el cliente para la empresa, como actor en la sostenibilidad. Asimismo, se apropiará de conceptos claves de inclusión y aplicación de protocolos de servicio y de seguridad y salud en el trabajo, como factores claves del desempeño en su rol como agente de atención al cliente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Clasificación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipología y Manejo del cliente',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Inclusión',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Discapacidad y sus tipos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Normativa',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Prestación del servicio al cliente',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Triángulo del servicio',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Canales de atención en servicio al cliente',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Momentos de verdad',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Seguridad y salud en el trabajo (SST)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: '5.1	Factores de Riesgo SST',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: '5.2	Manejo y control SST',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Carlzon, J. (1 de 10 de 1996). <em>El Momento de la Verdad</em>',
      link: 'https://pocketbook4you.com/es/read/moments-of-truth',
    },
    {
      referencia:
        'Da Silva, D. (2020, 4 de agosto). <em>Los 11 tipos de clientes y sus características: todo lo que necesitas saber para mejorar la relación con tus clientes.</em> Zendesk. ',
      link:
        'https://www.zendesk.com.mx/blog/tipos-de-clientes-caracteristicas/',
    },
    {
      referencia:
        'López, MJ. (marzo de 2021). <em>Inclusión laboral: Los 7 mitos más comunes sobre los trabajadores con discapacidad.</em>',
      link:
        'https://www.fundacioncontrabajo.cl/blog/cultura-inclusiva/7-mitos-inclusion-laboral/',
    },
    {
      referencia:
        'Maldonado, Cristian. (2014, septiembre 16). <em>Claves para atender los tipos de clientes que existen</em>. ',
      link:
        'https://www.gestiopolis.com/claves-para-atender-los-tipos-de-clientes-que-existen',
    },
    {
      referencia: 'Ministerio de las TIC. (09 de 2020).',
      link: 'https://mintic.gov.co/portal/715/articles-150820_recurso_1.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Actitud',
      significado:
        'Valoraciones favorables o desfavorables, opiniones y tendencias que sistemáticamente, presenta una persona respecto de un objeto o idea',
    },
    {
      termino: 'Cliente',
      significado:
        'Es el centro de la estrategia de la empresa. representa a la persona o empresa que adquiere los bienes y servicios.',
    },
    {
      termino: 'Empatía',
      significado:
        'Principio básico necesario para la interacción con clientes, consiste en ponerse en el lugar del otro, sin perder la objetividad.',
    },
    {
      termino: 'Interacción',
      significado:
        'Es la comunicación directa entre el cliente con un canal de la empresa.',
    },
    {
      termino: 'Momentos',
      significado: 'Tiempos o espacios en los que ocurre o sucede algo.',
    },
    {
      termino: 'Procedimiento',
      significado: 'Plan o la forma de gestionar o ejecutar una cosa.',
    },
    {
      termino: 'Protocolo',
      significado:
        'Conjunto de reglas que se deben seguir en el cumplimiento de una actividad',
    },
    {
      termino: 'Satisfacción del cliente',
      significado:
        'Grado en el que el desempeño percibido de un producto o servicio coincide con las expectativas del comprador.',
    },
    {
      termino: 'Servicio',
      significado:
        'Es la combinación de varias cualidades (intangibles) como desempeño, esfuerzo, atención y otros tangibles como un trato amable, un obsequio, los muebles de la sala de recibo entre otros',
    },
    {
      termino: 'Valor',
      significado:
        'Asignación monetaria que da un cliente a un producto en función de la necesidad que satisface o de la usabilidad que representa.',
    },
  ],
  complementario: [
    {
      texto: 'Quiroa, M. (2021). Concepto Cliente Economipedia.',
      tipo: 'Página web',
      link: 'https://economipedia.com/definiciones/cliente.html',
    },
    {
      texto:
        'Cisternas, M. (2018). Inclusión social, económica y política de las personas mayores. Comisión Económica para América Latina el Caribe.',
      tipo: 'Artículo',
      link:
        'https://www.cepal.org/es/enfoques/inclusion-social-economica-politica-personas-mayores',
    },
    {
      texto:
        'Clark, H. (2020). Resumen del informe de seguimiento de la educación en el mundo. Inclusión y Educación, todos sin excepción.',
      tipo: 'Informe',
      descarga: '/downloads/GEMR_2020-Summary-ES-v8.pdf',
    },
    {
      texto:
        'Ley 762, Por medio de la cual se aprueba la "Convención Interamericana para la Eliminación de todas las Formas de Discriminación contra las Personas con Discapacidad (2002, julio 31). Congreso de la República de Colombia.',
      tipo: 'Ley',
      descarga: '/downloads/Ley_762_2002.pdf',
    },
    {
      texto:
        'Organización Mundial de la Salud [OMS] y Banco Mundial [BM]. (2011). Informe Mundial de la Discapacidad. ',
      tipo: 'Informe',
      descarga: '/downloads/informe_discapacidad.pdf',
    },
    {
      texto: 'UNESCO. (2020). Liderar el ODS 4 - Educación 2030.',
      tipo: 'Artículo',
      link: 'https://www.un.org/sustainabledevelopment/es/',
    },
    {
      texto:
        'Plan Nacional de Desarrollo: Pacto por Colombia, Pacto por la Equidad. (2018). Presidencia de la República de Colombia',
      tipo: 'Plan Nacional de Desarrollo',
      descarga: '/downloads/Resumen-PND2018-2022-final.pdf',
    },
    {
      texto:
        'Ley 1098 de 2006. Código de Infancia y Adolescencia. (2006, noviembre 8). Congreso de la República de Colombia.',
      tipo: 'Ley',
      descarga:
        '/downloads/codigo_de_la_infancia_y_la_adolescencia_colombia.pdf',
    },
    {
      texto:
        'Constitución Política de Colombia. (1991, 04 de julio). Congreso de la República de Colombia.',
      tipo: 'Ley',
      descarga: '/downloads/colombia91.pdf',
    },
    {
      texto:
        'Norma Técnica Colombiana 6047. (2013, 11 de diciembre). Accesibilidad al medio físico. Espacios de servicio al ciudadano en la Administración Pública. Requisitos. Instituto Colombiano de Normas Técnicas y Certificación -ICONTEC-.',
      tipo: 'Norma Técnica',
      descarga: '/downloads/NTC6047.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Diana Carolina Jaramillo Rojas',
        cargo: 'Experta Temática',
        centro: 'Centro de Comercio y Servicios Regional - Cauca',
      },
      {
        nombre: 'Nelly Parra Guarín',
        cargo: 'Experta temática',
        centro:
          'Centro de la Industria, la empresa y los Servicios Regional - Huila',
      },
      {
        nombre: 'Jaime Alberto Pérez Posada',
        cargo: 'Instructor, Especialista Técnico en Inclusión',
        centro: 'Centro de Comercio Regional - Antioquia',
      },
      {
        nombre: 'Gloria Amparo López Escudero',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro de la Industria, la Empresa y Los Servicios - CIES Regional - Norte de Santander',
      },
      {
        nombre: 'Alex Baudelino García Gómez',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro de la Industria, la Empresa y Los Servicios - CIES Regional - Norte de Santander',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Asesor Metodológico',
        centro: 'Centro de Diseño y Metrología Regional - Distrito Capital',
      },
      {
        nombre: 'Sandra Paticia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Centro de Diseño y Metrología Regional - Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Yuly Rey',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Carlos Andrés Díaz Pinto',
        cargo: 'Desarrollo Front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
