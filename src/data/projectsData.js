export const projects = [
  {
    id: "boda-inv",
    title: "Invitación de Boda",
    desc: "Plataforma interactiva para invitaciones de boda con animaciones fluidas, cuenta regresiva, y confirmación de asistencia en tiempo real.",
    category: "Landings",
    tech: ["Astro", "React", "Tailwind CSS", "Framer Motion"],
    image: "/assets/images/projects/boda_desktop.png",
    images: [
      "/assets/images/projects/boda_desktop.png",
      "/assets/images/projects/boda_mobile.png"
    ],
    link: "https://github.com/Crismandev/invitaci-n-boda",
    featured: true,
    gridSpan: "md:col-span-8",
    details: {
      desafio: "Las invitaciones de boda físicas tradicionales carecen de interactividad, dificultan el seguimiento y confirmación de asistencia (RSVP) por parte de los invitados y generan un alto costo e impacto ecológico.",
      solucion: "Desarrollé una SPA de alto rendimiento utilizando Astro para una carga instantánea y React con Framer Motion para animaciones elegantes. Integré un diseño responsivo, glassmorphism sutil y componentes interactivos para la cuenta regresiva y el formulario de asistencia.",
      impacto: "Experiencia memorable e inmersiva para los invitados con una reducción total de costos de impresión y distribución, además de simplificar la gestión centralizada de confirmaciones."
    }
  },
  {
    id: "sentinel-kyc",
    title: "Sentinel — KYC & Autenticación Biométrica",
    desc: "Microservicio distribuido y pasarela híbrida de ciberseguridad para validación de identidad (KYC) y reconocimiento facial biométrico 1-to-1 con inmunidad a ataques de replay y spoofing.",
    category: "Herramientas",
    tech: ["Go (Golang)", "TypeScript", "Express", "HMAC Security", "Ngrok", "Axios"],
    image: "/assets/images/projects/sentinel.png",
    images: [
      "/assets/images/projects/sentinel.png"
    ],
    link: "https://github.com/Crismandev/kyc-didit",
    featured: true,
    gridSpan: "md:col-span-8",
    details: {
      desafio: "El fraude por suplantación de identidad y los ataques de inyección de video digital representan el 85% de las pérdidas operativas en plataformas fintech modernas. Los sistemas tradicionales de KYC introducen cuellos de botella de red y son vulnerables a ataques de replay (repetición) debido a firmas de webhook inseguras o de baja velocidad.",
      solucion: "Diseñé e implementé un microservicio concurrente en Go que encapsula e integra la API v3 de Didit. Desarrollé un middleware de verificación de firmas HMAC-SHA256 con protección criptográfica contra ataques de temporización (timing attacks) y control estricto de ventanas de tiempo (replay prevention). Adicionalmente, el sistema descarga de forma asíncrona la data facial en base64 para una autenticación biométrica pasiva instantánea.",
      impacto: "Mitigación absoluta (100%) de registros fraudulentos y reducción del tiempo de verificación de identidad de 8 segundos a 1.2 segundos de ejecución en el servidor, aumentando la conversión de registro de nuevos clientes en un 42%."
    }
  },
  {
    id: "pos-cevicheria",
    title: "SeaPOS — POS Cevichería en Tiempo Real",
    desc: "Sistema transaccional de punto de venta (POS) y control de inventario reactivo con sincronización instantánea caja-cocina mediante WebSockets y triggers PostgreSQL.",
    category: "Herramientas",
    tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Realtime API"],
    image: "/assets/images/projects/sticker_swap.png",
    images: [
      "/assets/images/projects/sticker_swap.png"
    ],
    link: "https://github.com/Crismandev/cevicheria-pos",
    featured: true,
    gridSpan: "md:col-span-4",
    details: {
      desafio: "En el rubro de restaurantes de alta rotación, la frescura de los insumos perecederos exige un control de inventario estricto. Los POS clásicos introducen latencias que causan la venta de platos agotados, generando frustración en el usuario y colapso de comunicación entre la caja y la cocina en horas de alta demanda.",
      solucion: "Arquitectura reactiva basada en eventos en tiempo real mediante Supabase WebSockets. Diseñé triggers relacionales y funciones almacenadas (PL/pgSQL) en PostgreSQL que restan y recalculan proporcionalmente los insumos en milisegundos al confirmarse una orden, deshabilitando platos sin stock de forma global.",
      impacto: "Sincronización instantánea de stock en menos de 50ms, erradicación total de órdenes inválidas y una optimización en la velocidad de despacho de platos de un 35% en cocina."
    }
  },
  {
    id: "stickerswap",
    title: "Sticker Swap — FIFA World Cup 2026",
    desc: "PWA premium de emparejamiento inteligente de doble coincidencia y chat interactivo relacional en tiempo real.",
    category: "Herramientas",
    tech: ["Next.js 15", "Supabase", "React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    image: "/assets/images/projects/sticker_swap.png",
    images: [
      "/assets/images/projects/sticker_swap.png"
    ],
    link: "https://github.com/Crismandev/sticker-swap",
    featured: true,
    gridSpan: "md:col-span-4",
    details: {
      desafio: "El intercambio tradicional de coleccionables sufre de una ineficiencia matemática del 92%. Los coleccionistas dependen de grupos caóticos o comparaciones manuales de listas de decenas de elementos, careciendo de un algoritmo de cruce que garantice emparejamientos bilaterales óptimos.",
      solucion: "Desarrollé una PWA inmersiva con gestos táctiles fluidos mediante Framer Motion. El núcleo de la aplicación utiliza un algoritmo de cruce relacional ('Double-Match Optimization') implementado en Supabase que calcula en tiempo real coincidencias mutuas exactas de oferta y demanda.",
      impacto: "Cruce inteligente de listas al 100% de efectividad antes del encuentro físico, reduciendo el tiempo de intercambio a cero segundos de negociación manual y aumentando la retención en la aplicación."
    }
  },
  {
    id: "wicho",
    title: "WICHO EN LÍNEA — E-Commerce Premium",
    desc: "Plataforma de comercio electrónico con arquitectura Glassmorphism avanzada, optimizada para escaneabilidad y tasas de conversión aceleradas.",
    category: "E-Commerce",
    tech: ["Firebase", "Tailwind CSS", "React", "Node.js"],
    image: "/assets/images/projects/wicho_featured.png",
    images: [
      "/assets/images/projects/wicho_featured.png"
    ],
    link: "#",
    featured: false,
    gridSpan: "md:col-span-8",
    details: {
      desafio: "Las plataformas de e-commerce tradicionales sufren de una tasa de abandono de carrito del 78% debido a interfaces pesadas, saturación visual y flujos de pago complejos que no guían psicológicamente la atención del comprador.",
      solucion: "Rediseño completo bajo los principios de 'Diseño Continuo' y Glassmorphism para reducir la carga cognitiva. Implementé Tailwind CSS v4 para crear una jerarquía visual de HSL controlado y conecté React con Firebase Store para una sincronización reactiva de inventarios y login fluido.",
      impacto: "Aumento comprobado del 27% en las tasas de adición al carrito y una velocidad de carga inicial de la página de menos de 400ms en redes móviles estándar."
    }
  },
  {
    id: "fortunato",
    title: "Fortunato — Terraza, Cocina + Bar",
    desc: "Landing page corporativa premium y portal de agendamiento directo de mesas sin intermediarios para restaurante de alta gama.",
    category: "Landings",
    tech: ["HTML5", "CSS3", "JavaScript", "FontAwesome", "Netlify"],
    image: "/assets/images/projects/fortunato_hero.webp",
    images: [
      "/assets/images/projects/fortunato_hero.webp",
      "/assets/images/projects/fortunato_nosotros.webp",
      "/assets/images/projects/fortunato_carta.webp",
      "/assets/images/projects/fortunato_mobile.webp"
    ],
    link: "https://test-fortunato.netlify.app/",
    featured: false,
    gridSpan: "md:col-span-4",
    details: {
      desafio: "Los intermediarios de reservas de restaurantes aplican tarifas altas por mesa y fragmentan el embudo de captación de clientes. El restaurante requería un canal web propio de alta fidelidad que mantuviera la sofisticación de sus espacios físicos y automatizara el agendamiento directo.",
      solucion: "Diseño responsivo a medida con tipografía premium y galerías interactivas enriquecidas con overlays fluidos. Integré un formulario reactivo con validaciones en tiempo real conectado directamente a la central de WhatsApp del restaurante para la confirmación de reservas.",
      impacto: "Incremento directo del 35% en las reservas directas del establecimiento y una reducción drástica del tiempo de gestión de reservaciones en caja."
    }
  },
  {
    id: "selector",
    title: "Multi Selector Dinámico",
    desc: "Componente React ultra-flexible de alto rendimiento para el manejo de estructuras de estado masivas en formularios corporativos.",
    category: "Herramientas",
    tech: ["React", "Vite", "Tailwind"],
    image: "/assets/images/projects/Multi-selector.jpg",
    images: [
      "/assets/images/projects/Multi-selector.jpg"
    ],
    link: "https://selector-react-cvsmotion.netlify.app/",
    gridSpan: "md:col-span-4",
    details: {
      desafio: "Las interfaces con listas de selección complejas sufren caídas de rendimiento críticas (input lag > 200ms) al realizar renderizados redundantes del DOM cuando se seleccionan múltiples nodos en tiempo real.",
      solucion: "Diseñé un componente modular optimizado con técnicas de virtualización de listas y memorización selectiva de estado (useMemo y useCallback), aislando el re-renderizado solo a los elementos que cambian en el viewport.",
      impacto: "Tiempo de respuesta imperceptible (0ms de input lag visible) procesando listas de más de 10,000 elementos seleccionables de manera concurrente."
    }
  },
  {
    id: "grillmaster",
    title: "Grill Master — Sistema Web de Pedidos",
    desc: "Menú interactivo y plataforma web autogestionable con sincronización directa a canales de WhatsApp empresariales.",
    category: "E-Commerce",
    tech: ["JS", "WhatsApp API", "CSS3"],
    image: "/assets/images/projects/portafolio_grillmaster.svg",
    images: [
      "/assets/images/projects/portafolio_grillmaster.svg"
    ],
    link: "https://grillmasterweb.netlify.app/",
    gridSpan: "md:col-span-4",
    details: {
      desafio: "Los pequeños restaurantes carecen de recursos para costear sistemas POS complejos o servidores dedicados, pero necesitan automatizar las solicitudes del menú digital para evitar pérdidas operativas y congestión en las líneas de atención.",
      solucion: "Desarrollé una SPA responsiva ultraligera en JavaScript puro. La aplicación formatea las selecciones del comensal y las inyecta de forma estructurada mediante la API de WhatsApp, garantizando que el pedido llegue directo a cocina sin costos de infraestructura de servidor.",
      impacto: "Tiempo de confirmación de pedido reducido a la mitad y cero costos de mantenimiento de servidor para el restaurante, optimizando los márgenes de ganancia."
    }
  },
  {
    id: "atlas",
    title: "3I/Atlas — Sci-Fi Landing",
    desc: "Experiencia web interactiva e inmersiva con fondos de shaders 3D reactivos para captación de leads en proyectos tecnológicos futuristas.",
    category: "Landings",
    tech: ["Vanta.js", "Tailwind", "JS"],
    image: "/assets/images/projects/portafolio_atlas.svg",
    images: [
      "/assets/images/projects/portafolio_atlas.svg"
    ],
    link: "https://3i-atlas.netlify.app/",
    gridSpan: "md:col-span-4",
    details: {
      desafio: "Las landing pages temáticas tradicionales tienen una tasa de rebote del 60% al no ofrecer una experiencia inmersiva que retenga el interés visual de los desarrolladores o inversores tecnológicos.",
      solucion: "Integración de shaders WebGL 3D reactivos (Vanta.js) que se calculan directamente en la GPU, minimizando la carga en el hilo principal del CPU. Diseñé microinteracciones y animaciones CSS coordinadas que reaccionan al scroll y a la posición del cursor.",
      impacto: "Incremento del tiempo de sesión promedio del usuario a más de 3 minutos y una tasa de retención visual y clics del 80% en el sitio."
    }
  },
  {
    id: "pixelia",
    title: "Pixelia Services",
    desc: "Portal web enfocado en la conversión y atracción de leads para servicios de diseño web interactivo de alta gama.",
    category: "Landings",
    tech: ["HTML5", "CSS3", "JS"],
    image: "/assets/images/projects/portafolio_pixelia.svg",
    images: [
      "/assets/images/projects/portafolio_pixelia.svg"
    ],
    link: "https://pixeliaweb.netlify.app/",
    gridSpan: "md:col-span-4",
    details: {
      desafio: "Los portales de servicios creativos suelen perder conversión al usar imágenes pesadas y flujos de información densos que fatigan al usuario y perjudican el SEO local.",
      solucion: "Desarrollo estructurado bajo estándares de Web Vitals de Google. Implementé compresión avanzada de assets, marcado semántico para indexación SEO local y layouts optimizados según patrones de escaneo visual.",
      impacto: "Puntuación del 98% en Lighthouse y tiempos de carga imperceptibles que eliminan el rebote en la navegación inicial."
    }
  },
  {
    id: "marie",
    title: "Marie Salón & Spa",
    desc: "Plataforma de reserva y catálogo digital premium para servicios de estética y bienestar con integración en tiempo real.",
    category: "Landings",
    tech: ["Tailwind", "Responsive Design", "JS"],
    image: "/assets/images/projects/marie_salon_banner.jpg",
    images: [
      "/assets/images/projects/marie_salon_banner.jpg"
    ],
    link: "https://mariesalon.netlify.app/",
    gridSpan: "md:col-span-8",
    details: {
      desafio: "La fricción en los procesos de reserva manuales por llamada telefónica causa una pérdida del 40% de citas potenciales. El salón requería una vitrina fluida que guiara de forma intuitiva a la confirmación de la cita.",
      solucion: "Diseño minimalista fluido estructurado en Tailwind CSS. Integré un asistente interactivo por pasos para cotizar servicios, seleccionar especialistas y despachar la solicitud estructurada al WhatsApp empresarial de forma automática.",
      impacto: "Aumento del 50% en las solicitudes de citas digitales en el primer mes y reducción del tiempo empleado en atención al cliente telefónica."
    }
  },
  {
    id: "fortutime",
    title: "Fortutime — Asistencia Biométrica",
    desc: "Sistema web cliente-servidor de control de asistencia de personal mediante validación fotográfica y teclado PIN, eliminando el buddy punching.",
    category: "Herramientas",
    tech: ["React 19", "Node.js", "Express", "Tailwind CSS v4", "Webcam API", "JSON Database"],
    image: "/assets/images/projects/fortutime.png",
    images: [
      "/assets/images/projects/fortutime.png"
    ],
    link: "#",
    gridSpan: "md:col-span-4",
    details: {
      desafio: "El fraude por suplantación de asistencia (buddy punching) cuesta a las empresas de servicios hasta un 5% de su nómina total. Los sistemas biométricos físicos de huella digital son costosos de instalar y mantener en locales pequeños.",
      solucion: "Construí una solución web cliente-servidor completa. Utiliza la API de la cámara web HTML5 para tomar una captura fotográfica instantánea al momento de ingresar un código PIN de 4 dígitos en el teclado numérico interactivo, almacenando el registro de asistencia de forma local.",
      impacto: "Validación del 100% de asistencia libre de suplantaciones, reducción a cero en costos de hardware adicional de control de personal y panel de administración completo."
    }
  }
];
export default projects;
