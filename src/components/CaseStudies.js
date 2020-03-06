import React, { useState, useEffect } from 'react';
import { Link } from 'preact-router/match';

const CaseStudy = ({uid, cover, name, context}) => 
<Link key={uid} className='work-item' href={`/case-studies/${uid}`}>
    <div className='work-cover'>
        <div style={{backgroundImage: `url(${cover})`}}/>
    </div>
    <h3><span className='textBg'>{name}</span></h3>
    <h6>{context}</h6>
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