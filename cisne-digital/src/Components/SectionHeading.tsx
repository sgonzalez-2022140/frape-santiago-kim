type Props = {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
  light?: boolean
}

export default function SectionHeading({ eyebrow, title, description, align = 'center', light = false }: Props) {
  return (
    <div className={`section-heading section-heading--${align} ${light ? 'section-heading--light' : ''}`}>
      <span className="eyebrow"><span className="eyebrow__line" />{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
