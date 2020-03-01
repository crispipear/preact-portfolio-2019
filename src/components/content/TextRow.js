import { RichText } from 'prismic-reactjs';

export default function TextRow(props) {
    return (
        <div className='body-row text-row'>
            <RichText render={props.text}/>
        </div>
    );
}