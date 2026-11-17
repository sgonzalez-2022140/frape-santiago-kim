export const brand = {
  name: 'Cisne Digital',
  tagline: 'Diseño web para pymes',
  city: 'Guatemala',
}

export type ServiceId = 'landing' | 'empresa' | 'catalogo' | 'medida'

export const serviceList: {
  id: ServiceId
  title: string
  short: string
  details: string
  includes: string[]
}[] = [
  {
    id: 'landing',
    title: 'Landing Page',
    short: 'Una primera impresión que invita a escribirte.',
    details: 'Una sola página enfocada en presentar tu oferta y captar clientes potenciales.',
    includes: ['Diseño responsive', 'Formulario o enlace a WhatsApp', 'Secciones esenciales'],
  },
  {
    id: 'empresa',
    title: 'Web empresarial',
    short: 'Toda la información de tu empresa, en un solo lugar.',
    details: 'Una presencia digital sólida para mostrar servicios, historia y formas de contacto.',
    includes: ['Varias secciones', 'Identidad visual', 'Optimización inicial'],
  },
  {
    id: 'catalogo',
    title: 'Catálogo digital',
    short: 'Tus productos organizados y siempre disponibles.',
    details: 'Un escaparate online con información clara para facilitar consultas y pedidos.',
    includes: ['Galería de productos', 'Categorías', 'Consultas por WhatsApp'],
  },
  {
    id: 'medida',
    title: 'Soluciones a medida',
    short: 'Cuando tu negocio necesita algo más.',
    details: 'Funcionalidades específicas, automatizaciones o integraciones según el alcance del proyecto.',
    includes: ['Evaluación de necesidades', 'Propuesta técnica', 'Desarrollo por etapas'],
  },
]

export const plans = [
  {
    title: 'Esencial',
    sub: 'Para emprender con una presencia digital clara.',
    bestFor: 'Emprendimientos',
    features: ['Landing page de una sola página', 'Diseño adaptable a móvil', 'Botón de contacto', 'SEO inicial básico', 'Entrega y explicación de uso'],
    featured: false,
  },
  {
    title: 'Profesional',
    sub: 'Para presentar tu empresa con más detalle.',
    bestFor: 'Pymes en crecimiento',
    features: ['Web con múltiples secciones', 'Diseño alineado a tu marca', 'Formulario y enlaces de contacto', 'SEO técnico inicial', 'Revisión de contenido y publicación'],
    featured: true,
  },
  {
    title: 'A medida',
    sub: 'Para proyectos con necesidades particulares.',
    bestFor: 'Negocios con procesos propios',
    features: ['Análisis de requerimientos', 'Funcionalidades personalizadas', 'Integraciones según viabilidad', 'Pruebas antes de publicar', 'Plan de mejoras y soporte'],
    featured: false,
  },
]

export const faqItems = [
  {
    question: '¿Necesito tener el contenido listo?',
    answer: 'No necesariamente. Podemos orientarte sobre qué textos, fotografías y datos conviene preparar. La redacción o producción de material adicional se define en la propuesta.',
  },
  {
    question: '¿Mi página funcionará en celulares?',
    answer: 'Sí. Diseñamos pensando en pantallas de computadora, tablet y celular. Probamos la navegación y la adaptación visual antes de la entrega.',
  },
  {
    question: '¿El dominio y el hosting están incluidos?',
    answer: 'Depende del paquete acordado. En la cotización especificaremos el costo del dominio, el alojamiento y cualquier servicio recurrente, sin cargos sorpresa.',
  },
  {
    question: '¿Cuánto tiempo tarda un proyecto?',
    answer: 'Depende de la cantidad de secciones, el material disponible y las funcionalidades. Compartiremos un cronograma estimado después de conocer tus necesidades.',
  },
  {
    question: '¿También dan mantenimiento?',
    answer: 'Podemos cotizar actualizaciones, ajustes y soporte por separado o como un plan periódico, según lo que necesite tu negocio.',
  },
]
