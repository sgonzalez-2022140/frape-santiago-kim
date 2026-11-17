import { useEffect, useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2, Mail, MapPin, MessageCircle, Send } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { plans, serviceList } from '../data/siteData'

type Props = { chosenPlan: string }

const whatsapp = String(import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, '')
const contactEmail = String(import.meta.env.VITE_CONTACT_EMAIL || '').trim()

export default function Contact({ chosenPlan }: Props) {
  const [name, setName] = useState('')
  const [business, setBusiness] = useState('')
  const [contact, setContact] = useState('')
  const [interest, setInterest] = useState(chosenPlan || '')
  const [details, setDetails] = useState('')
  const [notice, setNotice] = useState('')
  useEffect(() => { if (chosenPlan) setInterest(chosenPlan) }, [chosenPlan])

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const message = [
      '¡Hola! Me interesa cotizar una página web con Cisne Digital.',
      '',
      `Mi nombre: ${name.trim()}`,
      `Negocio: ${business.trim() || 'Por definir'}`,
      `Contacto: ${contact.trim()}`,
      `Servicio o plan: ${interest || 'Necesito orientación'}`,
      `Mi idea: ${details.trim() || 'Me gustaría conocer las opciones disponibles.'}`,
    ].join('\n')

    if (whatsapp) {
      window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
      setNotice('Se abrió WhatsApp con tu solicitud. Revisa el mensaje y envíalo para completar el contacto.')
      return
    }
    if (contactEmail) {
      window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent('Cotización web · Cisne Digital')}&body=${encodeURIComponent(message)}`
      setNotice('Se intentó abrir tu aplicación de correo con el mensaje preparado.')
      return
    }
    try {
      await navigator.clipboard.writeText(message)
      setNotice('Solicitud copiada. Configura el WhatsApp o correo del negocio en .env para recibirla directamente.')
    } catch {
      setNotice(`Tu solicitud está lista:\n\n${message}`)
    }
  }

  return <section className="section contact" id="contacto"><div className="container contact__grid"><div className="contact__left"><SectionHeading eyebrow="HAGAMOS EQUIPO" title="Cuéntanos qué tienes en mente" description="No necesitas hablar en términos técnicos. Cuéntanos sobre tu negocio y buscamos contigo la mejor solución." align="left" light/><div className="contact__highlights"><span><MessageCircle size={20}/> Conversación sin compromiso</span><span><CheckCircle2 size={20}/> Propuesta según tus necesidades</span><span><MapPin size={20}/> Desde Guatemala, para tu negocio</span></div><div className="contact__quote">“Las buenas ideas merecen verse increíbles en internet.”</div></div>
    <form className="contact-form" onSubmit={submit}><div className="contact-form__top"><span><Mail size={18}/> Solicita una cotización</span><p>Completa estos datos y preparamos tu mensaje.</p></div><div className="contact-form__row"><label>Tu nombre *<input value={name} onChange={e=>setName(e.target.value)} required maxLength={80} placeholder="¿Cómo te llamas?"/></label><label>Nombre de tu negocio<input value={business} onChange={e=>setBusiness(e.target.value)} maxLength={100} placeholder="Tu emprendimiento"/></label></div><label>Correo o teléfono de contacto *<input value={contact} onChange={e=>setContact(e.target.value)} required maxLength={100} placeholder="Para poder comunicarnos contigo"/></label><label>¿Qué necesitas?<select value={interest} onChange={e=>setInterest(e.target.value)}><option value="">Necesito orientación</option>{serviceList.map(s=><option key={s.id} value={s.title}>{s.title}</option>)}{plans.map(p=><option key={p.title} value={p.title}>Plan {p.title}</option>)}</select></label><label>Cuéntanos un poco de tu idea<textarea value={details} onChange={e=>setDetails(e.target.value)} rows={4} maxLength={1200} placeholder="¿Qué hace tu negocio y qué te gustaría lograr con tu web?"/></label><button className="button button--primary" type="submit">{whatsapp ? 'Preparar mensaje de WhatsApp' : contactEmail ? 'Preparar correo' : 'Copiar mi solicitud'} <Send size={17}/></button><small>Este formulario no guarda tus datos en un servidor. {whatsapp ? 'Podrás revisar tu mensaje en WhatsApp antes de enviarlo.' : 'El envío directo se habilita al configurar los datos de contacto.'}</small>{notice && <div className="contact-form__notice" role="status" style={{whiteSpace:'pre-wrap'}}>{notice}<ArrowRight size={17}/></div>}</form>
  </div></section>
}
