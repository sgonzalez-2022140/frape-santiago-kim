import { ArrowUpRight, Coffee, Heart } from 'lucide-react'
import Brand from './Brand'

export default function Footer() {
  return <footer className="footer"><div className="container"><div className="footer__top"><div className="footer__brand"><Brand light/><p>Diseño cercano, tecnología útil y proyectos hechos con dedicación para las pymes.</p></div><div className="footer__cols"><div><strong>Explora</strong><a href="#inicio">Inicio</a><a href="#servicios">Servicios</a><a href="#portafolio">Proyectos</a><a href="#planes">Planes</a></div><div><strong>Nosotros</strong><a href="#proceso">Cómo trabajamos</a><a href="#nosotros">Nuestra historia</a><a href="#preguntas">Preguntas frecuentes</a><a href="#contacto">Contacto <ArrowUpRight size={13}/></a></div></div></div><div className="footer__bottom"><span>© {new Date().getFullYear()} Cisne Digital. Proyecto en construcción.</span><span>Hecho con <Heart size={13} fill="currentColor"/> y <Coffee size={14}/> en Guatemala</span></div></div></footer>
}
