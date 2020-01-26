import React, { useState, useEffect } from 'react';
import LinkText from '../components/content/LinkText';
import webIcon  from '../assets/icon_web.svg';

export default function MoreProjects(props) {
    const projects = props.projects
    return (
        <div className="work-more-projects">
            {
                projects.map((proj, key) => 
                    <div className="more-proj-item" key={key}>
                        <div className="background" style={{backgroundImage: `url(${proj.cover})`}}/>
                        <div className="title-row">
                            <h1 className="serifFont">{proj.name}</h1>
                            <a href={proj.website} target="_blank"><img src={webIcon}/></a>
                        </div>
                        <p>
                            {proj.description}
                        </p>
                        <div className="proj-tags">
                            {
                                JSON.parse(proj.tags).map((tag, key) =>
                                    <span key={key}>
                                        {tag}
                                    </span>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
}