import { useEffect, useState } from 'preact/hooks';
import { Link } from 'preact-router/match';
import Fade from './Fade';

export default function ProjFooter(props) {
    const [next, setNext] = useState({});

    useEffect(() => {
        init();
    }, []);

    useEffect(() => {
        init();
    }, [props.index]);

    function init(){
        let nextIndex = (props.index + 1 >= props.cs.length) ? 0 : props.index + 1;
        let nextItem = props.cs[nextIndex];
        setNext(nextItem);
    }
    return (
        <div className='proj-footer'>
            <Fade duration={1200}>
               <h4 className='serifFont'>see more</h4>
            </Fade>
            <div>
                <Fade delay={200}>
                    <h6>{next.context}</h6>
                    <h2 className="serifFont">
                        <Link href={"/case-studies/" + next.uid} className="underline">{next.name}</Link>
                    </h2>
                </Fade>
            </div>
            <Fade delay={500}>
                <Link href={"/case-studies/" + next.uid}  style={{backgroundImage: `url(${next.cover && next.cover.url})`}}/>
            </Fade>
        </div>
    );
}