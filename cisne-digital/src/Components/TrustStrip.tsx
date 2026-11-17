import { BriefcaseBusiness, Coffee, Store, HeartHandshake } from 'lucide-react'
export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Tipos de negocios con los que trabajamos">
      <div className="container trust-strip__inner"><p>Grandes ideas merecen una gran presencia digital.</p><div className="trust-strip__items"><span><Coffee size={17}/> Cafeterías</span><span><Store size={17}/> Comercios</span><span><BriefcaseBusiness size={17}/> Profesionales</span><span><HeartHandshake size={17}/> Emprendimientos</span></div></div>
    </section>
  )
}
