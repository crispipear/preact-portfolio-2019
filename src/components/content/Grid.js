import { RichText } from 'prismic-reactjs';
import Fade			from '../Fade';

export default function TextImage(props) {
    return (
        <div className='body-row grid'>
            <RichText render={props.title}/>
            <RichText render={props.content}/>
            <div class='grid-container'>
                {
                    props.items.map((item, key)=>
                        <div className='grid-item' key={'grid-item'+key}>
                            {
                                item.image.url && <img src={item.image.url}/>
                            }
                            <h6>{item.header}</h6>
                            <p>{item.paragraph}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}