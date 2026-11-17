import { ArrowUpRight, Building2, Code2, MonitorSmartphone, ShoppingBag } from 'lucide-react'
import { serviceList } from '../data/siteData'
import SectionHeading from './SectionHeading'

const icons = [MonitorSmartphone, Building2, ShoppingBag, Code2]

export default function Services() {
  return (
    <section className="section services" id="servicios">
      <div className="container">
        <SectionHeading eyebrow="LO QUE HACEMOS" title="Soluciones web para cada etapa de tu negocio" description="Desde tu primera página hasta una solución hecha a la medida: elegimos lo que de verdad necesitas." />
        <div className="services__grid">
          {serviceList.map((service, i) => {
            const Icon = icons[i]
            return <article className="service-card" key={service.id}>
              <div className="service-card__number">0{i + 1}</div><span className="service-card__icon"><Icon size={27} strokeWidth={1.65}/></span>
              <h3>{service.title}</h3><p>{service.details}</p><a href="#contacto" className="service-card__link">Conversemos <ArrowUpRight size={17}/></a>
            </article>
          })}
        </div>
      </div>
    </section>
  )
}
