import { ArrowUpRight, Flower2, HeartPulse, House, MoveUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'

const cases = [
  { id: 'flor', name: 'Flor & Canela', sector: 'Comercio local · Demo', description: 'Catálogo y contacto para una marca artesanal.', icon: Flower2, button: 'Ver colección', pill: 'HECHO CON CARIÑO', headline: <>Detalles para <em>cada momento.</em></> },
  { id: 'vital', name: 'Vitalia', sector: 'Servicios · Demo', description: 'Sitio informativo para una clínica de bienestar.', icon: HeartPulse, button: 'Agendar visita', pill: 'TU BIENESTAR PRIMERO', headline: <>Cuidar de ti es <em>nuestra prioridad.</em></> },
  { id: 'casa', name: 'Casa Clara', sector: 'Hogar · Demo', description: 'Página de productos para una tienda de decoración.', icon: House, button: 'Explorar catálogo', pill: 'ESPACIOS CON ALMA', headline: <>Tu hogar, <em>tu esencia.</em></> },
]

export default function Portfolio() {
  return <section className="section portfolio" id="portafolio"><div className="container"><div className="portfolio__head"><SectionHeading eyebrow="PORTAFOLIO" title="Ideas que cobran vida en la web" description="Estos conceptos de muestra enseñan cómo podría lucir una web diseñada para distintos negocios." align="left"/><a className="text-link" href="#contacto">Quiero algo así <MoveUpRight size={17}/></a></div>
  <div className="portfolio__grid">{cases.map((item) => { const Icon = item.icon; return <article className="portfolio-card" key={item.id}>
    <div className={`portfolio-preview portfolio-preview--${item.id}`}><div className="portfolio-preview__window"><div className="portfolio-preview__top"><span className="portfolio-preview__logo"><Icon size={15}/>{item.name}</span><span className="portfolio-preview__nav">Inicio&nbsp; • &nbsp;Servicios&nbsp; • &nbsp;Contacto</span></div><div className="portfolio-preview__body"><div><span className="portfolio-preview__eyebrow">{item.pill}</span><h4>{item.headline}</h4><span className="portfolio-preview__button">{item.button} ↗</span></div><div className="portfolio-preview__art"><Icon size={62} strokeWidth={1.1}/></div></div></div><span className="portfolio-preview__label">CONCEPTO / DEMO</span></div>
    <div className="portfolio-card__info"><div><p>{item.sector}</p><h3>{item.name}</h3><span>{item.description}</span></div><span className="portfolio-card__arrow"><ArrowUpRight size={19}/></span></div></article> })}</div>
  <p className="portfolio__disclaimer">* Diseños de demostración, no trabajos entregados a clientes. Los podemos reemplazar por proyectos reales cuando los tengan.</p></div></section>
}
