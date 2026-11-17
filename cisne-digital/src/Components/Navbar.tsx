import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Brand from './Brand'

const links = [
  { text: 'Servicios', href: '#servicios' },
  { text: 'Proyectos', href: '#portafolio' },
  { text: 'Proceso', href: '#proceso' },
  { text: 'Nosotros', href: '#nosotros' },
  { text: 'Planes', href: '#planes' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen)
    return () => document.body.classList.remove('menu-open')
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container site-header__inner">
        <Brand />
        <nav className={`nav ${isOpen ? 'nav--open' : ''}`} aria-label="Navegación principal" id="main-nav">
          {links.map(({ text, href }) => <a key={href} href={href} onClick={closeMenu}>{text}</a>)}
          <a className="nav__mobile-cta" href="#contacto" onClick={closeMenu}>Cotizar mi web <ArrowUpRight size={17}/></a>
        </nav>
        <a className="button button--primary nav__desktop-cta" href="#contacto">Cotizar mi web <ArrowUpRight size={16} /></a>
        <button className="nav__toggle" type="button" aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'} aria-controls="main-nav" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={23} /> : <Menu size={23}/>}</button>
      </div>
    </header>
  )
}
