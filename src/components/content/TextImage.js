import { RichText } from 'prismic-reactjs';

export default function TextImage(props) {
    return (
        props.order == 'natural' ?
        <div className={'body-row text-image' + (props.style == 'half' ? ' text-image-half' : "")}>
            <div>
                <RichText render={props.header}/>
                <RichText render={props.text}/>
            </div>
            <div>
                <img src={props.image.url}/>
            </div>
        </div>
        :
        <div className={'body-row text-image' + (props.style == 'half' ? ' text-image-half' : "")}>
            <div>
                <img src={props.image.url}/>
            </div>
            <div>
                <RichText render={props.header}/>
                <RichText render={props.text}/>
            </div>
        </div>
    );
}