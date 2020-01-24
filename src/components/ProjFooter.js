import React, { useState, useEffect } from 'react';
import Overview from '../lib/project-overview';
import { Link } from 'preact-router/match';

export default function ProjFooter(props) {
    const [next, setNext] = useState({});
    const [nextRoute, setNextRoute] = useState("");

    useEffect(() => {
        let keys = Object.keys(Overview);
        let nextIndex = keys.indexOf(props.project) +1;
        if(nextIndex >= keys.length) nextIndex = 0;
        let nextItem = keys[nextIndex];
        setNextRoute(nextItem);
        setNext(Overview[nextItem]);
    }, []);

    return (
        <div className='proj-end'>
            <h2>next project</h2>
            <div>
                <h3>{next.context}</h3>
                <h1>
                    <Link href={"/projects/" + nextRoute} className="underline">{next.name}</Link>
                </h1>
            </div>
        <div style={{backgroundImage: `url(${next.cover})`}}/>
        </div>
    );
}