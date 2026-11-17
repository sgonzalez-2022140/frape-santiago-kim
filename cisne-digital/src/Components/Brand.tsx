type BrandProps = { light?: boolean; compact?: boolean }

export default function Brand({ light = false, compact = false }: BrandProps) {
  return (
    <a className={`brand ${light ? 'brand--light' : ''}`} href="#inicio" aria-label="Cisne Digital, ir al inicio">
      <span className="brand__icon" aria-hidden="true"><img src="/logo.png" alt="" aria-hidden="true" /></span>
      <span className="brand__text"><strong>Cisne<span>Digital</span></strong>{!compact && <small>DISEÑO WEB PARA PYMES</small>}</span>
    </a>
  )
}
