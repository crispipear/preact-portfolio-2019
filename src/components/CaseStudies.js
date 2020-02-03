import React, { useState, useEffect } from 'react';
import { Link } from 'preact-router/match';

export default function CaseStudies(props) {
    const caseStudies = props.caseStudies
    return (
        <div className='work-container'>
            <div className='left'>
            {
                caseStudies.map((cs, key) =>
                    key % 2 == 0 &&
                    <Link key={cs.uid} className='work-item' href={`/case-studies/${cs.uid}`}>
                        <div className='work-cover'>
                            <div style={{backgroundImage: `url(${cs.cover.url})`}}/>
                        </div>
                        <h1 className='textBg'>{cs.name}</h1>
                        <h2>{cs.context}</h2>
                    </Link>
                )
            }
            </div>
            <div className='right'>
            {
                caseStudies.map((cs, key) => 
                    key % 2 !== 0 &&
                    <Link key={cs.uid} className='work-item' href={`/case-studies/${cs.uid}`}>
                        <div className='work-cover'>
                            <div style={{backgroundImage: `url(${cs.cover_vertical.url || cs.cover.url})`}}/>
                        </div>
                        <h1 className='textBg'>{cs.name}</h1>
                        <h2>{cs.context}</h2>
                    </Link>
                )
            }
            </div>
        </div>
    );
}