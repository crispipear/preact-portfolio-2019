import { RichText } from 'prismic-reactjs';

export default function SingleText(props) {
    return (
        <div className='body-row single-text'>
            <div style={props.style == 'full' ? {width: "100%"} : {width: "60%"}}>
                <RichText render={props.header}/>
                <RichText render={props.text}/>
            </div>
            {
                props.items.map((item, key) =>
                    <img src={item.image.url} key={key}/> 
                )
            }
        </div>
    );
}