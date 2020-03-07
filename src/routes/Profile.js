import {h} from 'preact';
import { RichText } from 'prismic-reactjs';
import PROFILE     from '../assets/profile.jpg';
import Fade        from '../components/Fade';

export default ({profile}) => {
    return (
        <section className='about'>
            <div className='about-left'>
                <Fade>
                    <div className='pic' style={{backgroundImage: `url(${PROFILE})`}}/>
                </Fade>
                <Fade delay={200}>
                    <span><a className='underline' href='mailto:lisuy97@gmail.com'>lisuy97@gmail.com</a>(ENG/中文)</span>
                </Fade>
                <div className='links'>
                    {
                        profile.links.map((link, key) => 
                           <Fade delay={key*100}>
                                <a key={'link'+key}
                                    href={link.url.url} target='_blank'>
                                    <RichText render={link.name}/>    
                                </a>
                           </Fade>
                        )
                    }
                </div>
            </div>
            <div className='about-right'>
                <Fade><RichText render={profile.body[0].primary.header}/></Fade>
                <Fade delay={400}><RichText render={profile.body[0].primary.text}/></Fade>
                <div className='skills'>
                    <Fade><h2>some tech skills</h2></Fade>
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