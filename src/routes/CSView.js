import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { route } from 'preact-router';
import Intro from '../components/ProjIntro';
import Footer from '../components/ProjFooter';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

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
        let id = props.matches.id
        if(id){
            let csExists = props.caseStudies.find(cs => cs.id == id)
            if(csExists){
                setCaseStudy(csExists)
                setIndex(props.caseStudies.findIndex(cs => cs.id == id))
            }else{
                route('/case-studies');
            }
        }
    }

   return(
    <div className='project container'>
        <Intro cs={caseStudy}/>
        <div className='body'>
            {caseStudy.content && documentToReactComponents(caseStudy.content)}
        </div>
        <Footer cs={props.caseStudies} index={index}/>
    </div>
   )
}