import { RichText } from 'prismic-reactjs';

export default function ImagesList(props) {
    return (
        <div className='body-row images-list'>
            {
                props.items.map((item, key) =>
                    <img src={item.image.url} key={key}/> 
                )
            }
        </div>
    );
}