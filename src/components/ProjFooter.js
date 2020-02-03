import React, { useState, useEffect } from 'react';
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
            <h2>see more</h2>
            <div>
                <h3>{next.context}</h3>
                <h1>
                    <Link href={"/case-studies/" + next.id} className="underline">{next.name}</Link>
                </h1>
            </div>
            <div style={{backgroundImage: `url(${next.cover})`}}/>
        </div>
    );
}