import AnimatedContent from '../react-bits/AnimatedContent'
import DecryptedText from '../react-bits/DecryptedText'
export default function SectionHeading({ number, label, title, accent, description }) {
  return <AnimatedContent distance={24} duration={.7} className="section-heading">
    <div className="section-label"><span>{number} /</span><DecryptedText text={label} /></div>
    <div className="section-heading-row"><h2>{title} {accent && <span>{accent}</span>}</h2>{description && <p>{description}</p>}</div>
  </AnimatedContent>
}
