export const projects = [
  {
    id: "boda-inv",
    title: "Invitación de Boda",
    desc: "Plataforma interactiva para invitaciones de boda con animaciones fluidas, cuenta regresiva, y confirmación de asistencia en tiempo real.",
    category: "Landings",
    tech: ["Astro", "React", "Google Stitch", "MCP (AI)"],
    image: "/assets/images/projects/invitacion_boda_new.webp",
    images: [
      "/assets/images/projects/invitacion_boda_new_desktop.webp",
      "/assets/images/projects/invitacion_boda_new_tablet.webp",
      "/assets/images/projects/invitacion_boda_new_mobile.webp"
    ],
    link: "https://test-boda.netlify.app/",
    featured: true,
    gridSpan: "md:col-span-8",
    details: {
      desafio: "Desarrollar una invitación digital interactiva requería un diseño de marca impecable y un desarrollo rápido que no consumiera semanas de codificación manual.",
      solucion: "Orquesté un agente de IA utilizando Google Stitch para el desarrollo del branding. Conecté el protocolo MCP con el SDK Antigravity para que el agente analizara el contexto y autogenerara la arquitectura del código en Astro y React casi sin intervención.",
      impacto: "Un despliegue de alta fidelidad en tiempo récord. El flujo automatizado redujo el tiempo de desarrollo de este tipo de landing de 4 días a tan solo 4 horas.",
      seo: {
        title: "Invitación Web Interactiva con Astro y React | Cristhian Mantilla",
        description: "Construí y orquesté invitaciones de boda interactivas utilizando agentes IA y desarrollo frontend moderno con animaciones fluidas.",
        keywords: "invitación web boda, desarrollo frontend, orquestación IA"
      }
    }
  },

  {
    id: "pos-cevicheria",
    title: "SeaPOS — POS Cevichería",
    desc: "Sistema de punto de venta (POS) escalable con roles de usuario, control de mesas e inventario para la industria gastronómica.",
    category: "Herramientas",
    tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    image: "/assets/images/projects/pos_1.webp",
    images: [
      "/assets/images/projects/pos_1.webp",
      "/assets/images/projects/pos_4.webp",
      "/assets/images/projects/pos_5.webp",
      "/assets/images/projects/pos_6.webp"
    ],
    link: "https://github.com/Crismandev/cevicheria-pos",
    featured: true,
    gridSpan: "md:col-span-4",
    details: {
      desafio: "El cliente necesitaba un sistema que pudiera ser operado por meseros para tomar pedidos y por el administrador para controlar todo el flujo del local (inventario, tickets y estadísticas), todo en tiempo real.",
      solucion: "Desarrollé una plataforma con control de acceso basado en roles (RBAC). El mesero cuenta con un menú digital para aperturar mesas, registrar pedidos e imprimir comandas; mientras que el administrador controla precios, stock, usuarios y analíticas mensuales.",
      impacto: "Digitalicé el 100% de la operación del restaurante, automatizando el registro manual de comandas de papel y permitiendo un cierre de caja instantáneo en el sistema.",
      seo: {
        title: "Sistema POS para Restaurantes React y Supabase | Cristhian Mantilla",
        description: "Construí un sistema de punto de venta (POS) escalable para cevicherías con control de mesas, inventario y roles de usuario.",
        keywords: "sistema pos restaurante, desarrollo web supabase, control inventario react, software gastronomía"
      }
    }
  },
  {
    id: "stickerswap",
    title: "Mundial Live — Álbum Tracker",
    desc: "Aplicación interactiva para el control e inventario personal de figuras coleccionables del mundial físico.",
    category: "Herramientas",
    tech: ["Next.js", "Supabase", "React", "Tailwind CSS"],
    image: "/assets/images/projects/sticker_swap_mobile_1.webp",
    images: [
      "/assets/images/projects/sticker_swap_mobile_1.webp",
      "/assets/images/projects/sticker_swap_mobile_2.webp",
      "/assets/images/projects/sticker_swap_mobile_3.webp",
      "/assets/images/projects/sticker_swap_mobile_4.webp"
    ],
    link: "https://github.com/Crismandev/sticker-swap",
    featured: true,
    gridSpan: "md:col-span-4",
    details: {
      desafio: "Los coleccionistas del mundial perdían el control de qué cartas tenían, cuáles les faltaban y cuántas repetidas poseían para intercambiar, usando listas manuales propensas a errores.",
      solucion: "Programé una aplicación con un flujo visual muy simple e intuitivo: te logueas y ves el álbum virtual. Con un clic marcas las cartas que posees (verde), con dos clics las repetidas indicando la cantidad (amarillo), dejando el resto como faltantes por defecto (rojo).",
      impacto: "Desarrollé una herramienta altamente interactiva que modernizó la experiencia del coleccionista físico, transformando una lista de papel en un panel de control digital ágil.",
      seo: {
        title: "App Tracker Álbum Mundial Next.js | Cristhian Mantilla",
        description: "Programé una aplicación web en Next.js para el control de figuras coleccionables. Sistema interactivo de inventario de cartas en tiempo real.",
        keywords: "app álbum mundial, tracker coleccionables, desarrollo next.js, frontend interactivo react"
      }
    }
  },
  {
    id: "wicho",
    title: "WICHO EN LÍNEA — E-Commerce",
    desc: "Tienda virtual optimizada con imágenes procesadas por IA y sincronización de backend a través de la CLI de Firebase.",
    category: "E-Commerce",
    tech: ["Firebase CLI", "Tailwind CSS", "React", "Orquestación IA"],
    image: "/assets/images/projects/wicho_featured.webp",
    images: [
      "/assets/images/projects/wicho_featured_desktop.webp",
      "/assets/images/projects/wicho_featured_tablet.webp",
      "/assets/images/projects/wicho_featured_mobile.webp"
    ],
    link: "https://www.tiendawichoenlinea.com",
    featured: true,
    details: {
      desafio: "El cliente, con pocos recursos tecnológicos, quería digitalizar sus ventas. El reto fue doble: optimizar sus imágenes crudas (PNGs pesados) y configurar mi primer puente real entre Frontend y Backend.",
      solucion: "Automaticé el formateo e hiper-optimización de imágenes mediante un pipeline de IA y configuré un backend con Firebase CLI para despliegues directos desde consola.",
      impacto: "Desplegué un e-commerce de alto rendimiento con carga instantánea y establecí un puente sólido entre Frontend y Backend en producción.",
      seo: {
        title: "E-Commerce Frontend y Firebase | Cristhian Mantilla",
        description: "Desarrollé una tienda online de alto rendimiento usando React y Firebase. Optimización de assets por IA y despliegues vía CLI.",
        keywords: "e-commerce firebase react, desarrollo web ia, optimización imágenes web, despliegue cli"
      }
    }
  },
  {
    id: "fortunato",
    title: "Fortunato — Landing Page",
    desc: "Landing page corporativa para un restaurante, generada e impulsada mediante flujos avanzados de IA.",
    category: "Landings",
    tech: ["HTML5", "CSS3", "JavaScript", "Generación IA"],
    image: "/assets/images/projects/fortunato_hero.webp",
    images: [
      "/assets/images/projects/fortunato_hero.webp"
    ],
    link: "https://test-fortunato.netlify.app/",
    featured: false,
    gridSpan: "md:col-span-4",
    details: {
      desafio: "Crear una presencia web formal para el restaurante donde trabajaba en la cocina, requiriendo un despliegue rápido que mantuviera la esencia de la marca gastronómica.",
      solucion: "Bajo la autorización de gerencia, apliqué estrategias de Prompt Engineering para delegar el 100% de la construcción base del sitio a modelos de Inteligencia Artificial, refinando iterativamente el código para asegurar la calidad final.",
      impacto: "Lancé un sitio web en tiempo récord que fortaleció la presencia digital del restaurante, demostrando que la orquestación efectiva de IA supera los métodos de desarrollo tradicional en velocidad.",
      seo: {
        title: "Landing Page Restaurante con IA | Cristhian Mantilla",
        description: "Orquesté el desarrollo de una landing page corporativa para restaurantes utilizando automatización web, IA y prompt engineering.",
        keywords: "landing page restaurante, desarrollo web con ia, prompt engineering frontend, automatización web"
      }
    }
  },
  {
    id: "selector",
    title: "Multi Selector Dinámico (WooCommerce)",
    desc: "Plugin nativo en PHP y Frontend en React para reemplazar variantes de productos por selectores dinámicos de color (swatches).",
    category: "Herramientas",
    tech: ["React", "PHP", "WordPress", "WooCommerce", "Tailwind"],
    image: "/assets/images/projects/Multi-selector.webp",
    images: [
      "/assets/images/projects/Multi-selector.webp"
    ],
    link: "https://selector-react-cvsmotion.netlify.app/",
    gridSpan: "md:col-span-4",
    details: {
      desafio: "Un cliente de USA con un e-commerce en WordPress (WooCommerce) necesitaba modernizar sus páginas de producto, reemplazando los menús desplegables por defecto por selectores visuales dinámicos (swatches de colores).",
      solucion: "Desarrollé una solución híbrida: construí la interfaz moderna e interactiva utilizando React y Tailwind, y empaqueté toda la lógica escribiendo un plugin nativo en PHP. Esto permitió al cliente instalarlo en WordPress con un clic y reemplazar las interfaces antiguas.",
      impacto: "Reemplacé la plantilla nativa de WooCommerce por un frontend moderno en React incrustado vía plugin PHP, mejorando drásticamente la conversión y la UX de la tienda norteamericana.",
      seo: {
        title: "Plugin React WooCommerce Swatches | Cristhian Mantilla",
        description: "Desarrollé un plugin PHP para WordPress y un componente React para renderizar selectores dinámicos en e-commerce (WooCommerce).",
        keywords: "plugin woocommerce react, php wordpress desarrollo, swatches dinámicos, frontend e-commerce usa"
      }
    }
  },
  {
    id: "grillmaster",
    title: "Grill Master — Pedidos por WhatsApp",
    desc: "Menú interactivo y plataforma web autogestionable con sincronización directa a canales de WhatsApp empresariales.",
    category: "E-Commerce",
    tech: ["JS", "WhatsApp API", "CSS3"],
    image: "/assets/images/projects/grillmaster.webp",
    images: [
      "/assets/images/projects/grillmaster_desktop.webp",
      "/assets/images/projects/grillmaster_tablet.webp",
      "/assets/images/projects/grillmaster_mobile.webp"
    ],
    link: "https://grillmasterweb.netlify.app/",
    gridSpan: "md:col-span-4",
    details: {
      desafio: "Un negocio local de comida rápida perdía ventas por demoras en la atención telefónica y de mensajes. Se necesitaba agilizar la compra sin un sistema complejo.",
      solucion: "Construí un menú interactivo y fluido que le da el control al cliente. Con solo unos clics, la web empaqueta el pedido y lo envía completamente estructurado al WhatsApp del local.",
      impacto: "Menos tiempo respondiendo dudas, más tiempo cocinando. Las ventas por delivery se aceleraron gracias a una experiencia de usuario (UX) sin fricción.",
      seo: {
        title: "Sistema de Pedidos WhatsApp para Restaurantes | Cristhian Mantilla",
        description: "Construí un sistema web de pedidos automatizado vía WhatsApp enfocado en conversión rápida y UX fluida para restaurantes.",
        keywords: "sistema pedidos whatsapp, desarrollo web restaurantes, automatización ventas, frontend e-commerce"
      }
    }
  },
  {
    id: "atlas",
    title: "3I/Atlas — Landing Futurista",
    desc: "Experiencia web 'troll' con diseño Sci-Fi y fondos de shaders 3D reactivos para un foro de temática conspirativa.",
    category: "Landings",
    tech: ["Vanta.js", "Tailwind", "JS"],
    image: "/assets/images/projects/atlas_landing.webp",
    images: [
      "/assets/images/projects/atlas_landing_desktop.webp",
      "/assets/images/projects/atlas_landing_tablet.webp",
      "/assets/images/projects/atlas_landing_mobile.webp"
    ],
    featured: true,
    link: "https://3i-atlas.netlify.app/",
    details: {
      desafio: "Recrear una estética ultra-conspiranoica y de alta tecnología (Sci-Fi) para una comunidad de nicho, equilibrando el impacto visual sin romper el rendimiento web.",
      solucion: "Implementé shaders WebGL reactivos con Vanta.js y un diseño oscuro futurista. Estructure todo como una 'broma interna' altamente estilizada, priorizando animaciones fluidas y misterio visual.",
      impacto: "Un proyecto puramente informativo que demostró mi capacidad para adaptar interfaces a estilos sumamente peculiares y retadores, manteniendo un rendimiento 3D impecable.",
      seo: {
        title: "Landing Page Sci-Fi WebGL Vanta.js | Cristhian Mantilla",
        description: "Programé una experiencia web futurista inmersiva (Sci-Fi) renderizando shaders 3D reactivos con WebGL y Vanta.js sin sacrificar FPS.",
        keywords: "landing page sci-fi, webgl vanta.js, diseño web oscuro, animaciones frontend"
      }
    }
  },
  {
    id: "pixelia",
    title: "Pixelia Services",
    desc: "Emprendimiento web personal para la exposición de portafolio y comercialización de servicios de desarrollo digital.",
    category: "Landings",
    tech: ["HTML5", "CSS3", "JS", "Netlify"],
    image: "/assets/images/projects/pixelia.webp",
    images: [
      "/assets/images/projects/pixelia_desktop.webp",
      "/assets/images/projects/pixelia_tablet.webp",
      "/assets/images/projects/pixelia_mobile.webp"
    ],
    link: "https://pixeliaweb.netlify.app/",
    gridSpan: "md:col-span-4",
    details: {
      desafio: "Crear una plataforma propia que sirviera no solo como vitrina técnica, sino como un embudo de ventas real para ofrecer servicios de desarrollo y diseño web.",
      solucion: "Desarrollé una landing page enfocada en conversión, estructurando claramente los servicios, planes y llamados a la acción, utilizando tecnologías web ligeras para garantizar velocidad máxima.",
      impacto: "Establecimiento formal de una marca de agencia personal para captar y cerrar clientes, sentando las bases de mi emprendimiento independiente en TI.",
      seo: {
        title: "Agencia de Desarrollo Web Pixelia | Cristhian Mantilla",
        description: "Desarrollé una plataforma de servicios digitales orientada a conversión. Embudo de ventas y exposición de portafolio freelance.",
        keywords: "agencia desarrollo web, servicios freelance frontend, portafolio pixelia, diseño ui ux"
      }
    }
  },
  {
    id: "marie",
    title: "Marie Salón & Spa",
    desc: "Plataforma web con panel de administración y diseño autogestionable impulsado por orquestación de IA y Supabase.",
    category: "Landings",
    tech: ["Tailwind", "Canva", "MCP AI", "Supabase"],
    image: "/assets/images/projects/marie_salon_banner.webp",
    images: [
      "/assets/images/projects/marie_salon_banner_desktop.webp",
      "/assets/images/projects/marie_salon_banner_tablet.webp",
      "/assets/images/projects/marie_salon_banner_mobile.webp"
    ],
    link: "https://mariesalon.netlify.app/",
    gridSpan: "md:col-span-8",
    details: {
      desafio: "Una estilista local necesitaba escalar su presencia digital y administrar sus servicios e imágenes sin tener que lidiar con código complejo.",
      solucion: "Utilicé Inteligencia Artificial conectada a herramientas de diseño (Canva + MCP) para construir una landing page hermosa a tiempo récord. Le integré un panel de control respaldado por Supabase para que ella misma suba sus fotos y servicios.",
      impacto: "De un negocio offline a tener un escaparate digital dinámico y autogestionable, aumentando su captación de clientes de manera independiente.",
      seo: {
        title: "Landing Page y Panel Admin para Spa | Supabase | Cristhian Mantilla",
        description: "Desarrollé una landing page full-stack con panel de administración en Supabase. Diseño web asistido por IA para negocios locales.",
        keywords: "landing page spa, desarrollo web supabase, panel admin react, diseño web con IA"
      }
    }
  },
  {
    id: "fortutime",
    title: "Fortutime — Asistencia Biométrica",
    desc: "Sistema web cliente-servidor de control de asistencia mediante validación fotográfica y teclado PIN, generado 100% por IA.",
    category: "Herramientas",
    tech: ["React 19", "Node.js", "Webcam API", "AI Generation"],
    image: "/assets/images/projects/fortutime.webp",
    images: [
      "/assets/images/projects/fortutime.webp"
    ],
    link: "#",
    gridSpan: "md:col-span-4",
    details: {
      desafio: "Implementar un sistema de asistencia seguro (evitando suplantaciones) para el personal de un restaurante, sin adquirir hardware biométrico costoso ni requerir semanas de codificación manual.",
      solucion: "Delegué la arquitectura completa a modelos de Inteligencia Artificial mediante ingeniería de prompts. El sistema utiliza la API HTML5 para encender la webcam, tomando una foto de validación en el momento exacto en que el empleado ingresa su PIN.",
      impacto: "Resolución de un problema de recursos humanos en tiempo récord (código 100% IA), validando asistencias de forma segura y eliminando gastos de hardware en el restaurante.",
      seo: {
        title: "Sistema Control Asistencia Biométrica Webcam API | Cristhian Mantilla",
        description: "Desarrollo automatizado por IA de sistema web de asistencia laboral con teclado PIN y validación fotográfica por cámara web.",
        keywords: "sistema control asistencia, webcam api react, validación biométrica, desarrollo ai web"
      }
    }
  }
];

export default projects;
