import Reveal from 'react-reveal/Reveal';

export default ({children}) => 
<Reveal effect="block-reveal-anim">
    <div className="block-reveal">
        <div className="reveal-content">
             {children}
        </div>
    </div>
</Reveal>