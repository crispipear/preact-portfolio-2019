import Scroll from './Scroll';
import Reveal from './Reveal';
import Fade   from './Fade';

export default ({cs}) => 
    (
        <div className='header'>
            <div className='header-left'>
                <Fade delay={1250}>
                    <div className='header-title'>
                        <h6 className="context">{cs.context}</h6>
                        <h2 className="name"><span className="textBg">{cs.name}</span></h2>
                    </div>
                </Fade>
                 <Reveal>
                    <div className='header-img' style={{ backgroundImage: `url(${cs.cover && cs.cover.url})` }} />
                </Reveal>
            </div>
            <div className='header-right'>
                <div className='header-info'>
                    <Fade duration={1200} delay={1750}><h3 className="serifFont">year</h3><h3 className='info'>{cs.year}</h3></Fade>
                    <Fade duration={1200} delay={2000}><h3 className="serifFont">tools</h3><h3 className='info'>{cs.tools}</h3></Fade>
                    <Fade duration={1200} delay={2250}><h3 className="serifFont">role</h3><h3 className='info'>{cs.role}</h3></Fade>
                </div>
                {
                    cs.website && cs.website.url &&
                    <Fade duration={1200} delay={2750}>
                    <a href={cs.website.url} target="_blank" className='underline'>visit website</a>
                    </Fade>
                }
            </div>
            <Scroll hideText/>
        </div>
        
    );