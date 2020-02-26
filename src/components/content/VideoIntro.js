import { RichText } from 'prismic-reactjs';

export default function Video(props) {
    return (
        <div className='video-intro'>
            <div className='video-intro-text'>
                <RichText render={props.text}/>
            </div>
            <div className='video'>
                <div className='video-wrapper'>
                    <iframe src={props.video_link} frameBorder="0"
                        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
            </div>
        </div>
    );
}