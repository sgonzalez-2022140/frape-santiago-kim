import { ArrowRight, Check } from 'lucide-react'
import { plans } from '../data/siteData'
import SectionHeading from './SectionHeading'

type Props = { onSelectPlan: (plan: string) => void }

export default function Pricing({ onSelectPlan }: Props) {
  return <section className="section pricing" id="planes"><div className="container"><SectionHeading eyebrow="PLANES A TU MEDIDA" title="Tu inversión, con todo más claro" description="Paquetes de referencia que ajustamos según el alcance de tu proyecto. Los precios se cotizan de forma personalizada."/>
  <div className="pricing__grid">{plans.map((plan) => <article className={`pricing-card ${plan.featured ? 'pricing-card--featured' : ''}`} key={plan.title}>{plan.featured && <div className="pricing-card__ribbon">RECOMENDADO PARA PYMES</div>}<div className="pricing-card__top"><span className="pricing-card__category">{plan.bestFor}</span><h3>{plan.title}</h3><p>{plan.sub}</p><div className="pricing-card__price">A cotizar <span>según tu proyecto</span></div></div><div className="pricing-card__body"><p>Incluye:</p><ul>{plan.features.map((feature)=><li key={feature}><Check size={17}/>{feature}</li>)}</ul><button className={`button ${plan.featured ? 'button--primary' : 'button--outline'}`} type="button" onClick={() => onSelectPlan(plan.title)}>Elegir este plan <ArrowRight size={17}/></button></div></article>)}</div>
  <p className="pricing__note">Dominio, hosting, mantenimiento y servicios externos se presupuestan claramente según corresponda.</p></div></section>
}
