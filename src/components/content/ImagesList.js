import { RichText } from 'prismic-reactjs';
import Fade         from '../Fade'
export default function ImagesList(props) {
    return (
        <div className='body-row images-list'>
            {
                props.items.map((item, key) =>
                <Fade>
                    <img src={item.image.url} key={key}/> 
                </Fade>
                )
            }
        </div>
    );
}