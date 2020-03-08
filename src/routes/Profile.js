import {h} from 'preact';
import { RichText } from 'prismic-reactjs';
import PROFILE     from '../assets/profile.jpg';
import Fade        from '../components/Fade';

export default ({profile}) => {
    return (
        <section className='about'>
            <div className='about-left'>
                <Fade duration={2000} delay={250}>
                    <div className='pic' style={{backgroundImage: `url(${PROFILE})`}}/>
                </Fade>
                <div className='links'>
                    {
                        profile.links.map((link, key) => 
                           <Fade delay={key*200}>
                                <a key={'link'+key}
                                    href={link.url.url} target='_blank'>
                                    <RichText render={link.name}/>    
                                </a>
                           </Fade>
                        )
                    }
                </div>
                <Fade delay={750}>
                    <span><a className='underline' href='mailto:lisuy97@gmail.com'>lisuy97@gmail.com</a>(ENG/中文)</span>
                </Fade>
            </div>
            <div className='about-right'>
                <Fade delay={1000}><RichText render={profile.body[0].primary.header}/></Fade>
                <Fade delay={1250}><RichText render={profile.body[0].primary.text}/></Fade>
                <div className='skills'>
                    <Fade delay={1500}><h2>some tech skills</h2></Fade>
                    <div>
                        {
                            profile.tech.map((item,key) => <Fade delay={key*60}><RichText key={'skill'+key} render={item.name}/></Fade>)
                        }
                     </div>
                </div>
                <Fade><RichText render={profile.body[1].primary.header}/></Fade>
                <Fade><RichText render={profile.body[1].primary.text}/></Fade>
            </div>
        </section>
    )
}