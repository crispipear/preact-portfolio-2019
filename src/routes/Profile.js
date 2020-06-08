import {h} from 'preact';
import { RichText } from 'prismic-reactjs';
import PROFILE     from '../assets/profile.jpg';
import Fade        from '../components/Fade';
import { useEffect, useState} from 'preact/hooks';


export default ({profile}) => {
    const [style, setStyle] = useState({opacity: 0, transform: 'translateY(1rem)'})
    useEffect(() => {
        setTimeout(() => {
            setStyle({
                opacity: 1,
                transfrom: 'translateY(0)'
            })
        }, 1250)
    }, [])
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
            <div className='about-right' style={style}>
                <div id="block-one">
                    <RichText render={profile.body[0].primary.header}/>
                    <RichText render={profile.body[0].primary.text}/>
                </div>
                <div className='skills'>
                    <h5>Technologies that I work with the most:</h5>
                    <div>
                        {                                
                            profile.tech.map((item,key) => 
                                <RichText key={'skill'+key} render={item.name}/>
                            )
                        }
                    </div>
                </div>
                {
                    profile.body.map((item, key) => 
                        key!==0&&
                        <div className="about-block">
                            <RichText render={item.primary.header}/>
                            <RichText render={item.primary.text}/>
                        </div>
                    )
                }
            </div>
        </section>
    )
}