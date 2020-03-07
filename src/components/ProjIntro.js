import Scroll from './Scroll';

export default ({cs}) => 
    (
        <div className='header'>
            <div className='header-left'>
                <div className='header-title'>
                    <h6 className="context">{cs.context}</h6>
                    <h2 className="name"><span className="textBg">{cs.name}</span></h2>
                </div>
                <div className='header-img' style={{ backgroundImage: `url(${cs.cover && cs.cover.url})` }} />
            </div>
            <div className='header-right'>
                <div className='header-info'>
                    <h3 className="serifFont">year</h3><h3 className='info'>{cs.year}</h3>
                    <h3 className="serifFont">tools</h3><h3 className='info'>{cs.tools}</h3>
                    <h3 className="serifFont">role</h3><h3 className='info'>{cs.role}</h3>
                </div>
                {
                    cs.website && cs.website.url &&
                    <a href={cs.website.url} target="_blank" className='underline'>visit website</a>
                }
            </div>
            <Scroll hideText/>
        </div>
        
    );