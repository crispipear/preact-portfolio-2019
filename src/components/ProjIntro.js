import React, { useState, useEffect } from 'react';
import Overview from '../lib/project-overview';

export default function ProjIntro(props) {
    console.log(Overview)
    console.log(props.project)
    return (
        <div className='header'>
            <div className='header-left'>
                <div className='header-title'>
                    <h2>{Overview[props.project].context}</h2>
                    <h1>{Overview[props.project].name}</h1>
                </div>
                <div className='header-img' style={{ backgroundImage: `url(${Overview[props.project].cover})` }} />
            </div>
            <div className='header-right'>
                <div className='header-info'>
                    <h3>year</h3><h2>{Overview[props.project].year}</h2>
                    <h3>tools</h3><h2>{Overview[props.project].tools}</h2>
                    <h3>role</h3><h2>{Overview[props.project].role}</h2>
                </div>
                {
                    Overview[props.project].website &&
                    <a href={Overview[props.project].website} target="_blank" className='underline'>visit website</a>
                }
            </div>
        </div>
    );
}