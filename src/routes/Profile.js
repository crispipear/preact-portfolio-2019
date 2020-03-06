import {h} from 'preact';
import { RichText } from 'prismic-reactjs';
import PROFILE     from '../assets/profile.jpg';

export default ({profile}) => {
    return (
        <section className='about'>
            <div className='about-left'>
                <div className='pic' style={{backgroundImage: `url(${PROFILE})`}}/>
                <span><a className='underline' href='mailto:lisuy97@gmail.com'>lisuy97@gmail.com</a>(ENG/中文)</span>
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
            </div>
            <div className='about-right'>
                <RichText render={profile.body[0].primary.header}/>
                <RichText render={profile.body[0].primary.text}/>
                    <div className='skills'>
                    <h2>main skills</h2>
                    <div>
                        {
                            profile.tech.map((item,key) => <RichText key={'skill'+key} render={item.name}/>)
                        }
                    </div>
                </div>
                <RichText render={profile.body[1].primary.header}/>
                <RichText render={profile.body[1].primary.text}/>
            </div>
        </section>
    )
}