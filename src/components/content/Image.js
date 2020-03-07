import { RichText } from 'prismic-reactjs';
import Fade from '../Fade';

export default function Image(props) {
    return (
        <Fade>
            <div className='body-row image'>
                <img src={props.image.url}/>
                {
                    props.caption && <span>{props.caption}</span>
                }
            </div>
        </Fade>
    );
}