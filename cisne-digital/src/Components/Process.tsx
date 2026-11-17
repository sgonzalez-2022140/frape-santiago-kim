import { ClipboardList, CodeXml, MessagesSquare, Rocket } from 'lucide-react'
import SectionHeading from './SectionHeading'

const steps = [
  { icon: MessagesSquare, title: 'Descubrimos', desc: 'Nos cuentas qué haces, qué necesitas y a quién quieres llegar.' },
  { icon: ClipboardList, title: 'Diseñamos', desc: 'Definimos estructura, estilo y contenido antes de escribir código.' },
  { icon: CodeXml, title: 'Desarrollamos', desc: 'Construimos la web, la adaptamos a móviles y revisamos detalles.' },
  { icon: Rocket, title: 'Lanzamos', desc: 'Preparamos la publicación y te explicamos los siguientes pasos.' },
]

export default function Process() {
  return <section className="section process" id="proceso"><div className="container"><SectionHeading eyebrow="NUESTRO PROCESO" title="De una buena idea a una gran página" description="Un proceso claro para que siempre sepas qué estamos creando y por qué."/><div className="process__grid">{steps.map(({icon: Icon, title, desc}, i) => <article className="process-step" key={title}><div className="process-step__top"><span className="process-step__icon"><Icon size={28} strokeWidth={1.6}/></span><span className="process-step__index">0{i+1}</span></div><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>
}
