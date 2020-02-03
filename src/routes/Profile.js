import {h} from 'preact';
import { RichText } from 'prismic-reactjs';
import PROFILE from '../assets/profile.png';

export default ({profile}) => {
    return (
        <section className='about'>
            <div className='about-left'>
                <img src={PROFILE} alt='profile pic'/>
                <a className='underline' href='mailto:lisuy97@gmail.com'>lisuy97@gmail.com (ENG/中文)</a>
                <div>
                    {
                        profile.links.map((link, key) => 
                            <a 	className='underline' key={'link'+key}
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
                    <h2>recent tech</h2>
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