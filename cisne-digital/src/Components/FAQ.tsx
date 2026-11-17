import { Plus } from 'lucide-react'
import { faqItems } from '../data/siteData'
import SectionHeading from './SectionHeading'

export default function FAQ() {
  return <section className="section faq" id="preguntas"><div className="container faq__grid"><div><SectionHeading eyebrow="PREGUNTAS FRECUENTES" title="Todo más claro desde el inicio" description="Antes de comenzar, respondamos algunas dudas habituales sobre nuestros servicios." align="left"/></div><div className="faq__list">{faqItems.map((item,i)=><details key={item.question} className="faq__item" open={i===0}><summary>{item.question}<Plus size={18} aria-hidden="true"/></summary><p>{item.answer}</p></details>)}</div></div></section>
}
