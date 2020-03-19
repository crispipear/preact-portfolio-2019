import { RichText } from 'prismic-reactjs';
import Fade from '../Fade';

export default function SingleText(props) {
    return (
        <div className='body-row single-text'>
            <Fade>
                <div style={props.style == 'full' ? {width: "100%"} :  window.innerWidth >= 1023 ? {width: "60%"} : {width: '100%'}}>
                    <RichText render={props.header}/>
                    <RichText render={props.text}/>
                </div>
            </Fade>
            {
                props.items.map((item, key) =>
                <Fade>
                    <img src={item.image.url} key={key}/> 
                </Fade>
                )
            }
        </div>
    );
}