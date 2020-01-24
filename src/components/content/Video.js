import React, { useState, useEffect } from 'react';

export default function Video(props) {

    return (
        <div className='body-video'>
            <iframe src={props.source} frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
    );
}