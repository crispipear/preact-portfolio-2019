import React, { useState, useEffect } from 'react';
import { Link } from 'preact-router/match';

export default function CaseStudies(props) {
    const caseStudies = props.caseStudies
    return (
        <div className='work-container'>
            <div className='left'>
            {
                Object.keys(caseStudies).map((proj, key) =>
                    key % 2 == 0 &&
                    <Link key={proj} className='work-item' href={`/projects/${proj}`}>
                        <div className='work-cover'>
                            <div style={{backgroundImage: `url(${caseStudies[proj].cover})`}}/>
                        </div>
                        <h1 className='textBg'>{caseStudies[proj].name}</h1>
                        <h2>{caseStudies[proj].context}</h2>
                    </Link>
                )
            }
            </div>
            <div className='right'>
            {
                Object.keys(caseStudies).map((proj, key) => 
                    key % 2 !== 0 &&
                    <Link key={proj} className='work-item' href={`/projects/${proj}`}>
                        <div className='work-cover'>
                            <div style={{backgroundImage: `url(${caseStudies[proj].cover_v || caseStudies[proj].cover})`}}/>
                        </div>
                        <h1 className='textBg'>{caseStudies[proj].name}</h1>
                        <h2>{caseStudies[proj].context}</h2>
                    </Link>
                )
            }
            </div>
        </div>
    );
}