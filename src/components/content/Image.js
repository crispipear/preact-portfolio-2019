import { RichText } from 'prismic-reactjs';

export default function Image(props) {
    return (
        <div className='body-row image'>
            <img src={props.image.url}/>
            {
                props.caption && <span>{props.caption}</span>
            }
        </div>
    );
}