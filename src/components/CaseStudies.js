import React, { useState, useEffect } from 'react';
import { Link } from 'preact-router/match';
import Fade from './Fade';
import Reveal from './Reveal';

const CaseStudy = ({uid, cover, name, context}) => 
<Link key={uid} className='work-item' href={`/case-studies/${uid}`}>
    <Reveal>
        <div className='work-cover'>
            <div style={{backgroundImage: `url(${cover})`}}/>
        </div>
    </Reveal>
    <Fade delay={100}><h3><span className='textBg'>{name}</span></h3></Fade>
    <Fade delay={150}><h6>{context}</h6></Fade>
</Link>

export default function CaseStudies(props) {
    const caseStudies = props.caseStudies
    return (
        <div className='work-container'>
            <div className='left'>
            {
                caseStudies.map((cs, key) =>
                    key % 2 == 0 &&
                    <CaseStudy
                        uid={cs.uid}
                        name={cs.name}
                        context={cs.context}
                        cover={cs.cover.url}
                    />
                )
            }
            </div>
            <div className='right'>
            {
                caseStudies.map((cs, key) => 
                    key % 2 !== 0 &&
                    <CaseStudy
                        uid={cs.uid}
                        name={cs.name}
                        context={cs.context}
                        cover={cs.cover_vertical.url || cs.cover.url}
                    />
                )
            }
            </div>
        </div>
    );
}