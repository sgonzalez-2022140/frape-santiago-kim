import { MessageCircle } from 'lucide-react'
const whatsapp = String(import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, '')
export default function FloatingContact() {
  return <a className="floating-contact" href={whatsapp ? `https://wa.me/${whatsapp}?text=${encodeURIComponent('¡Hola! Quisiera cotizar una página web.')}` : '#contacto'} target={whatsapp ? '_blank' : undefined} rel={whatsapp ? 'noopener noreferrer' : undefined} aria-label="Contactar a Cisne Digital" title="Conversemos"><MessageCircle size={23}/></a>
}
