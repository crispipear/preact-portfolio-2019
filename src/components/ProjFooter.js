import { useEffect, useState } from 'preact/hooks';
import { Link } from 'preact-router/match';

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
        <div className='proj-end'>
            <h3 className='serifFont'>see more</h3>
            <div>
                <h5>{next.context}</h5>
                <h2 className="serifFont">
                    <Link href={"/case-studies/" + next.id} className="underline">{next.name}</Link>
                </h2>
            </div>
            <div style={{backgroundImage: `url(${next.cover && next.cover.url})`}}/>
        </div>
    );
}