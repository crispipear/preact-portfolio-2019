import React, { useState, useEffect } from 'react';

export default function LinkText(props) {
    return (
        <a href={props.link} target="_blank">{props.text}</a>
    );
}