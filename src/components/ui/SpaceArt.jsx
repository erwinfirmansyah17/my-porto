export default function SpaceArt({ variant = 'planet', className = '' }) {
  return <div className={`space-art space-art-${variant} ${className}`} aria-hidden="true">
    <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
    <div className="art-globe"><span /><i /></div>
    <span className="art-cross cross-one">+</span><span className="art-cross cross-two">+</span>
    <span className="art-coordinate">23° / 08′</span>
  </div>
}
