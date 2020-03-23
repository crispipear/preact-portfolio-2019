import { RichText } from 'prismic-reactjs';
import Fade			from '../Fade';

export default function TextImage(props) {
    return (
        <div className={'body-row text-image' + (props.style == 'half' ? ' text-image-half' : "")}
             style={{flexDirection: props.order == 'natural' ? 'row': 'row-reverse'}}
        >
            <Fade duration={1200} delay={100}>
                <div className='text'>
                    <RichText render={props.header}/>
                    <RichText render={props.text}/>
                </div>
            </Fade>
            <Fade duration={1200} delay={400}>
                <div className='image'>
                    <img src={props.image.url}/>
                </div>
            </Fade>
        </div>
    );
}