import { RichText } from 'prismic-reactjs';

export default function DoubleText(props) {
    return (
        <div className='body-row double-text'>
            <div className='body-row-block'>
                <RichText render={props.header_left}/>
                <RichText render={props.text_left}/>
            </div>
            <div className='body-row-block'>
                <RichText render={props.header_right}/>
                <RichText render={props.text_right}/>
            </div>
        </div>
    );
}