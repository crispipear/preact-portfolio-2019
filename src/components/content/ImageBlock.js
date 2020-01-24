import React, { useState, useEffect } from 'react';

export default function ImageBlock(props) {
    return (
        <div>
            <img src={props.source} />
        </div>
    );
}