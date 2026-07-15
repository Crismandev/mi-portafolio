export const projects = [
  {
    id: "boda-inv",
    title: "Invitación de Boda",
    desc: "Plataforma interactiva para invitaciones de boda con animaciones fluidas, cuenta regresiva, y confirmación de asistencia en tiempo real.",
    category: "Landings",
    tech: ["Astro", "React", "Google Stitch", "MCP (AI)"],
    image: "/assets/images/projects/invitacion_boda_new.webp",
    images: [
      "/assets/images/projects/invitacion_boda_new.webp",
      "/assets/images/projects/boda_mobile.webp"
    ],
    link: "https://test-boda.netlify.app/",
    featured: true,
    gridSpan: "md:col-span-8",
    details: {
      desafio: "Desarrollar una invitación digital interactiva requería un diseño de marca impecable y un desarrollo rápido que no consumiera semanas de codificación manual.",
      solucion: "Orquesté un agente de IA utilizando Google Stitch para el desarrollo del branding. Conecté el protocolo MCP con el SDK Antigravity para que el agente analizara el contexto y autogenerara la arquitectura del código en Astro y React casi sin intervención.",
      impacto: "Un despliegue de alta fidelidad en tiempo récord. El flujo automatizado demostró cómo la orquestación de IA puede reducir el tiempo de desarrollo frontend de días a horas.",
      seo: {
        title: "Invitación Web Interactiva con Astro y React | Cristhian Mantilla",
        description: "Desarrollo de invitaciones de boda interactivas utilizando agentes IA y Google Stitch. Desarrollo frontend optimizado y animaciones fluidas.",
        keywords: "invitación web boda, desarrollo frontend astro, google stitch, orquestación IA"
      }
    }
  },
  {
    id: "sentinel-kyc",
    title: "Sentinel — KYC & Autenticación Biométrica",
    desc: "Microservicio en Go y TypeScript para validación de identidad (KYC) y reconocimiento facial integrado con el SDK de Didit.",
    category: "Herramientas",
    tech: ["Go (Golang)", "TypeScript", "Didit SDK", "Microservicios"],
    image: "/assets/images/projects/sentinel.webp",
    images: [
      "/assets/images/projects/sentinel.webp"
    ],
    link: "https://github.com/Crismandev/kyc-didit",
    featured: true,
    gridSpan: "md:col-span-8",
    details: {
      desafio: "En un entorno corporativo de ritmo rápido, necesitaba integrar un flujo de verificación de identidad (KYC) complejo dentro de una arquitectura robusta de microservicios, un stack que estaba aprendiendo sobre la marcha.",
      solucion: "Asumí el reto arquitectónico en Go y TypeScript. Implementé el servicio de verificación utilizando el repositorio 'favorapp_identity' y me conecté al SDK de Didit para invocar los endpoints de autenticación biométrica de forma segura.",
      impacto: "Entregué una integración funcional y segura para producción, demostrando adaptabilidad extrema para pivotar del diseño UI a la arquitectura backend de microservicios bajo presión.",
      seo: {
        title: "Microservicio KYC Go y TypeScript | Cristhian Mantilla",
        description: "Integración de autenticación biométrica y KYC usando el SDK de Didit en una arquitectura de microservicios en Go y TypeScript.",
        keywords: "kyc didit sdk, microservicios go, desarrollo backend typescript, autenticación biométrica"
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
      impacto: "Un ecosistema digital completo que digitalizó el 100% de la operación del restaurante, eliminando errores de caja y brindando métricas de negocio precisas al dueño.",
      seo: {
        title: "Sistema POS para Restaurantes React y Supabase | Cristhian Mantilla",
        description: "Desarrollo de sistema de punto de venta (POS) escalable para cevicherías. Control de mesas, inventario y roles de usuario.",
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
    image: "/assets/images/projects/sticker_swap.webp",
    images: [
      "/assets/images/projects/sticker_swap.webp"
    ],
    link: "https://github.com/Crismandev/sticker-swap",
    featured: true,
    gridSpan: "md:col-span-4",
    details: {
      desafio: "Los coleccionistas del mundial perdían el control de qué cartas tenían, cuáles les faltaban y cuántas repetidas poseían para intercambiar, usando listas manuales propensas a errores.",
      solucion: "Creé una aplicación con un flujo visual muy simple e intuitivo: te logueas y ves el álbum virtual. Con un clic marcas las cartas que posees (verde), con dos clics las repetidas indicando la cantidad (amarillo), dejando el resto como faltantes por defecto (rojo).",
      impacto: "Una herramienta altamente interactiva que modernizó la experiencia del coleccionista físico, transformando una lista de papel en un panel de control digital ágil.",
      seo: {
        title: "App Tracker Álbum Mundial Next.js | Cristhian Mantilla",
        description: "Aplicación web para control de figuras coleccionables. Sistema interactivo de inventario de cartas (faltantes, repetidas y obtenidas).",
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
      "/assets/images/projects/wicho_featured.webp"
    ],
    link: "https://www.tiendawichoenlinea.com",
    featured: true,
    details: {
      desafio: "El cliente, con pocos recursos tecnológicos, quería digitalizar sus ventas. El reto fue doble: optimizar sus imágenes crudas (PNGs pesados) y configurar mi primer puente real entre Frontend y Backend.",
      solucion: "Usé IA de forma intensiva: construí un script automatizado para formatear e hiper-optimizar las imágenes del cliente para la web. Como orquestador, guié a la IA para desarrollar el sitio y me sumergí en Firebase CLI, logrando hacer despliegues directos desde la terminal.",
      impacto: "El cliente obtuvo su escaparate digital de alto rendimiento. Por mi parte, dominé el flujo de despliegue por consola (Firebase/Netlify CLI), integrando por primera vez un backend de forma exitosa.",
      seo: {
        title: "E-Commerce Frontend y Firebase | Cristhian Mantilla",
        description: "Desarrollo de tienda online Wicho en Línea usando React y Firebase. Optimización de assets por IA y despliegues vía CLI.",
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
      impacto: "Un sitio web lanzado en tiempo récord que fortaleció la presencia digital del restaurante, demostrando que la orquestación efectiva de IA supera los métodos de desarrollo tradicional en velocidad.",
      seo: {
        title: "Landing Page Restaurante con IA | Cristhian Mantilla",
        description: "Diseño y desarrollo de landing page para Fortunato. Arquitectura construida mediante orquestación de agentes de IA.",
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
      impacto: "Mejora dramática en la conversión y la UX de la tienda norteamericana, demostrando mi capacidad para incrustar tecnología moderna (React) dentro de monolitos tradicionales (PHP/WordPress).",
      seo: {
        title: "Plugin React WooCommerce Swatches | Cristhian Mantilla",
        description: "Desarrollo de plugin PHP para WordPress y componente React para selectores dinámicos de WooCommerce.",
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
      "/assets/images/projects/grillmaster.webp"
    ],
    link: "https://grillmasterweb.netlify.app/",
    gridSpan: "md:col-span-4",
    details: {
      desafio: "Un negocio local de comida rápida perdía ventas por demoras en la atención telefónica y de mensajes. Se necesitaba agilizar la compra sin un sistema complejo.",
      solucion: "Construí un menú interactivo y fluido que le da el control al cliente. Con solo unos clics, la web empaqueta el pedido y lo envía completamente estructurado al WhatsApp del local.",
      impacto: "Menos tiempo respondiendo dudas, más tiempo cocinando. Las ventas por delivery se aceleraron gracias a una experiencia de usuario (UX) sin fricción.",
      seo: {
        title: "Sistema de Pedidos WhatsApp para Restaurantes | Cristhian Mantilla",
        description: "Optimicé las ventas de Grillmaster con un sistema web de pedidos automatizado vía WhatsApp. Desarrollo frontend enfocado en conversión y UX.",
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
      "/assets/images/projects/atlas_landing.webp"
    ],
    featured: true,
    link: "https://3i-atlas.netlify.app/",
    details: {
      desafio: "Recrear una estética ultra-conspiranoica y de alta tecnología (Sci-Fi) para una comunidad de nicho, equilibrando el impacto visual sin romper el rendimiento web.",
      solucion: "Implementé shaders WebGL reactivos con Vanta.js y un diseño oscuro futurista. Estructure todo como una 'broma interna' altamente estilizada, priorizando animaciones fluidas y misterio visual.",
      impacto: "Un proyecto puramente informativo que demostró mi capacidad para adaptar interfaces a estilos sumamente peculiares y retadores, manteniendo un rendimiento 3D impecable.",
      seo: {
        title: "Landing Page Sci-Fi WebGL Vanta.js | Cristhian Mantilla",
        description: "Diseño web futurista y oscuro utilizando WebGL y Vanta.js. Interfaz inmersiva para comunidades de nicho.",
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
      "/assets/images/projects/pixelia.webp"
    ],
    link: "https://pixeliaweb.netlify.app/",
    gridSpan: "md:col-span-4",
    details: {
      desafio: "Crear una plataforma propia que sirviera no solo como vitrina técnica, sino como un embudo de ventas real para ofrecer servicios de desarrollo y diseño web.",
      solucion: "Desarrollé una landing page enfocada en conversión, estructurando claramente los servicios, planes y llamados a la acción, utilizando tecnologías web ligeras para garantizar velocidad máxima.",
      impacto: "Establecimiento formal de una marca de agencia personal para captar y cerrar clientes, sentando las bases de mi emprendimiento independiente en TI.",
      seo: {
        title: "Agencia de Desarrollo Web Pixelia | Cristhian Mantilla",
        description: "Plataforma de servicios de desarrollo de software y diseño web. Embudo de conversión y exposición de portafolio.",
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
      "/assets/images/projects/marie_salon_banner.webp"
    ],
    link: "https://mariesalon.netlify.app/",
    gridSpan: "md:col-span-8",
    details: {
      desafio: "Una estilista local necesitaba escalar su presencia digital y administrar sus servicios e imágenes sin tener que lidiar con código complejo.",
      solucion: "Utilicé Inteligencia Artificial conectada a herramientas de diseño (Canva + MCP) para construir una landing page hermosa a tiempo récord. Le integré un panel de control respaldado por Supabase para que ella misma suba sus fotos y servicios.",
      impacto: "De un negocio offline a tener un escaparate digital dinámico y autogestionable, aumentando su captación de clientes de manera independiente.",
      seo: {
        title: "Landing Page y Panel Admin para Spa | Supabase | Cristhian Mantilla",
        description: "Desarrollo full-stack de landing page para Marie Salón con panel de administración en Supabase. Diseño web asistido por IA para negocios locales.",
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
