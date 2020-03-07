import { RichText } from 'prismic-reactjs';
import Fade from '../Fade';

export default function TextRow(props) {
    return (
        <Fade>
            <div className='body-row text-row'>
                <RichText render={props.text}/>
            </div>
        </Fade>
    );
}