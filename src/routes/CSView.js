import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { route } from 'preact-router';
//layout
import Intro         from '../components/ProjIntro';
import Footer        from '../components/ProjFooter';
//slices
import VideoIntro    from '../components/content/VideoIntro';
import DoubleText    from '../components/content/DoubleText';
import TextRow       from '../components/content/TextRow';
import TextImage     from '../components/content/TextImage';
import Image         from '../components/content/Image';
import SingleText    from '../components/content/SingleText';
import ImagesList    from '../components/content/ImagesList';

const compList = {
    video_intro: VideoIntro,
    double_text: DoubleText,
    text_row: TextRow,
    image: Image,
    text_image: TextImage,
    image_text: TextImage,
    single_text: SingleText,
    images_list: ImagesList
}

export default function CSView(props) {
    const [caseStudy, setCaseStudy] = useState({});
    const [index, setIndex] = useState(0);

    useEffect(() => {
        init();
    }, []);
    useEffect(() => {
        init();
    }, [props.matches.id])

    function init(){
        let id = props.matches.id;
        if(id){
            let csExists = props.caseStudies.find(cs => cs.uid == id)
            if(csExists){
                setCaseStudy(csExists);
                setIndex(props.caseStudies.findIndex(cs => cs.uid == id));
            }else{
                route('/case-studies');
            }
        }
    }

    function renderSlice(type, props){
        if(compList[type]){
            const SliceComponent = compList[type];
            return <SliceComponent {...props}/>
        }
        return '' 
    }

   return(
    <div className='project container'>
        <Intro cs={caseStudy}/>
        <div className='body'>
           {
               caseStudy.body &&
               caseStudy.body.map(slice =>
                renderSlice(slice.slice_type, {...slice.primary, items: slice.items}) 
               )
           }
        </div>
        <Footer cs={props.caseStudies} index={index}/>
    </div>
   )
}