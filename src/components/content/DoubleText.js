import { RichText } from 'prismic-reactjs';
import Fade			from '../Fade';

export default function DoubleText(props) {
    return (
        <div className='body-row double-text'>
            <Fade>
                <div className='body-row-block'>
                    <RichText render={props.header_left}/>
                    <RichText render={props.text_left}/>
                </div>    
            </Fade>
            <Fade delay={100}>
            <div className='body-row-block'>
                <RichText render={props.header_right}/>
                <RichText render={props.text_right}/>
            </div>
            </Fade>

        </div>
    );
}