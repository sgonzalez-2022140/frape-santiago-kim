import { HeartHandshake, Laptop2, Palette, ShieldCheck } from 'lucide-react'
import SectionHeading from './SectionHeading'

const qualities = [
  { icon: Palette, title: 'Diseño con intención', desc: 'No usamos la misma plantilla para todos. Buscamos que tu web refleje la identidad de tu marca.' },
  { icon: Laptop2, title: 'Tecnología bien aplicada', desc: 'Diseño adaptable, buena estructura y soluciones que responden a tus necesidades reales.' },
  { icon: HeartHandshake, title: 'Trato humano', desc: 'Hablamos claro, te escuchamos y construimos el proyecto contigo, de principio a fin.' },
  { icon: ShieldCheck, title: 'Transparencia', desc: 'Alcance, entregables y tiempos acordados antes de comenzar. Sin promesas imposibles.' },
]

export default function WhyUs() {
  return <section className="section why" id="ventajas"><div className="container why__grid">
    <div className="why__intro"><SectionHeading eyebrow="¿POR QUÉ ELEGIRNOS?" title="Tecnología con un toque humano" description="La combinación ideal: creatividad, desarrollo y una relación cercana con cada negocio." align="left"/><a className="text-link" href="#nosotros">Conoce nuestra historia <span>↗</span></a></div>
    <div className="why__qualities">{qualities.map(({icon: Icon, title, desc}) => <article className="why__quality" key={title}><span className="why__quality-icon"><Icon size={22}/></span><div><h3>{title}</h3><p>{desc}</p></div></article>)}</div>
  </div></section>
}
