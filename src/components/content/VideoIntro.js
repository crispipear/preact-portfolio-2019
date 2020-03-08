import { RichText } from 'prismic-reactjs';
import Fade			from '../Fade';

export default function Video(props) {
    return (
        <div className='video-intro'>
            <Fade duration={1200} delay={100}>
                <div className='video-intro-text'>
                    <RichText render={props.text}/>
                </div>
            </Fade>
            <Fade duration={1200} delay={400}>
                <div className='video'>
                    <div className='video-wrapper'>
                        <iframe src={props.video_link} frameBorder="0"
                            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                </div>
            </Fade>
        </div>
    );
}