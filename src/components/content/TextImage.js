import { RichText } from 'prismic-reactjs';
import Fade			from '../Fade';

export default function TextImage(props) {
    return (
        props.order == 'natural' ?
        <div className={'body-row text-image' + (props.style == 'half' ? ' text-image-half' : "")}>
            <Fade duration={1200} delay={100}>
                <div>
                    <RichText render={props.header}/>
                    <RichText render={props.text}/>
                </div>
            </Fade>
            <Fade duration={1200} delay={400}>
                <div>
                    <img src={props.image.url}/>
                </div>
            </Fade>
        </div>
        :
        <div className={'body-row text-image' + (props.style == 'half' ? ' text-image-half' : "")}>
            <Fade duration={1200} delay={100}>
            <div>
                <img src={props.image.url}/>
            </div>
            </Fade>
            <Fade duration={1200} delay={400}>
            <div>
                <RichText render={props.header}/>
                <RichText render={props.text}/>
            </div>
            </Fade>
        </div>
    );
}