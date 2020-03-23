import {h} from 'preact';
import { RichText } from 'prismic-reactjs';
import PROFILE     from '../assets/profile.jpg';
import Fade        from '../components/Fade';

export default ({profile}) => {
    return (
        <section className='about'>
            <div className='about-left'>
                <Fade duration={1000} delay={250}>
                    <div className='pic' style={{backgroundImage: `url(${PROFILE})`}}/>
                </Fade>
                <Fade duration={1250} delay={500}>
                    <div className='links'>
                        {
                            profile.links.map((link, key) => 
                                <a key={'link'+key}
                                    href={link.url.url} target='_blank'>
                                    <RichText render={link.name}/>    
                                </a>
                            )
                        }
                    </div>
                </Fade>
                <Fade delay={750}>
                    <span><a className='underline' href='mailto:lisuy97@gmail.com'>lisuy97@gmail.com</a>(ENG/中文)</span>
                </Fade>
            </div>
            <div className='about-right'>
                <div id="block-one">
                    <Fade delay={1000}><RichText render={profile.body[0].primary.header}/></Fade>
                    <Fade delay={1250}><RichText render={profile.body[0].primary.text}/></Fade>
                </div>
                <div className='skills'>
                    <h2>some tech skills</h2>
                    <div>
                        {                                
                            profile.tech.map((item,key) => 
                                <Fade delay={80}>
                                    <RichText key={'skill'+key} render={item.name}/>
                                </Fade>
                            )
                        }
                    </div>
                </div>
                <div id="block-two">
                    <Fade><RichText render={profile.body[1].primary.header}/></Fade>
                    <Fade><RichText render={profile.body[1].primary.text}/></Fade>
                </div>
            </div>
        </section>
    )
}