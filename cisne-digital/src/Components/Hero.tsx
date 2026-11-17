import { ArrowDownRight, ArrowRight, Check, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__light hero__light--one" aria-hidden="true" />
      <div className="hero__light hero__light--two" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <div className="hero__chip"><Sparkles size={14} /> ESTUDIO DIGITAL PARA PYMES</div>
          <h1>Tu negocio tiene una historia. <em>Hagamos que destaque.</em></h1>
          <p>Diseñamos y desarrollamos páginas web que se ven increíbles, funcionan bien y hacen más fácil que nuevos clientes te encuentren.</p>
          <div className="hero__buttons"><a className="button button--primary" href="#contacto">Quiero mi página web <ArrowRight size={18}/></a><a className="button button--outline" href="#portafolio">Ver proyectos <ArrowDownRight size={18}/></a></div>
          <div className="hero__promises"><span><Check size={15}/> A tu medida</span><span><Check size={15}/> Para celulares</span><span><Check size={15}/> Trato cercano</span></div>
        </div>
        <div className="hero__visual">
          <div className="hero__visual-frame">
            <span className="hero__visual-label">CAFÉ, IDEAS Y CÓDIGO <span>✦</span></span>
            <span className="hero__orbit hero__orbit--outer" aria-hidden="true" />
            <span className="hero__orbit hero__orbit--inner" aria-hidden="true" />
            <div className="hero__asset"><img src="/logo.png" alt="Ilustración de la marca Cisne Digital: una taza con un cisne en el café y una computadora" loading="eager" onError={(event) => { event.currentTarget.style.opacity = '0' }} /></div>
            <div className="hero__badge hero__badge--left"><span className="hero__badge-icon">✳</span><span>Ideas que conectan<strong>Diseño + tecnología</strong></span></div>
            <div className="hero__badge hero__badge--right"><span className="hero__badge-icon">⌘</span><span>Hecho para crecer<strong>Experiencia responsive</strong></span></div>
            <div className="hero__lights" aria-hidden="true"><i/><i/><i/></div>
          </div>
          <div className="hero__visual-bottom">DISEÑO QUE SE SIENTE CERCANO <span>·</span> CÓDIGO QUE FUNCIONA</div>
        </div>
      </div>
      <div className="hero__bottom-curve" aria-hidden="true" />
    </section>
  )
}
