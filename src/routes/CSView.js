import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { route } from 'preact-router';
//layout
import Intro         from '../components/ProjIntro';
import Footer        from '../components/ProjFooter';
//slices
import VideoIntro    from '../components/content/VideoIntro';
import DoubleText    from '../components/content/DoubleText';

const compList = {
    video_intro: VideoIntro,
    double_text: DoubleText
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
                console.log(csExists);
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
                renderSlice(slice.slice_type, slice.primary) 
               )
           }
        </div>
        <Footer cs={props.caseStudies} index={index}/>
    </div>
   )
}