import React, { useState, useEffect } from 'react';

export default ({cs}) => 
    (
        <div className='header'>
            <div className='header-left'>
                <div className='header-title'>
                    <h2>{cs.context}</h2>
                    <h1>{cs.name}</h1>
                </div>
                <div className='header-img' style={{ backgroundImage: `url(${cs.cover})` }} />
            </div>
            <div className='header-right'>
                <div className='header-info'>
                    <h3>year</h3><h2>{cs.year}</h2>
                    <h3>tools</h3><h2>{cs.tools}</h2>
                    <h3>role</h3><h2>{cs.role}</h2>
                </div>
                {
                    cs.website &&
                    <a href={cs.website} target="_blank" className='underline'>visit website</a>
                }
            </div>
        </div>
    );