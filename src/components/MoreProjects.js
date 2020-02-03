import React, { useState, useEffect } from 'react';
import LinkText from '../components/content/LinkText';
import webIcon  from '../assets/icon_web.svg';

export default function MoreProjects(props) {
    const projects = props.projects
    return (
        <div className="work-more-projects">
            {
                projects.map(proj => 
                    <div className="more-proj-item" key={proj.uid}>
                        <div className="background" style={{backgroundImage: `url(${proj.cover.url})`}}/>
                        <div className="title-row">
                            <h1 className="serifFont">{proj.name}</h1>
                            <a href={proj.link.url} target="_blank"><img src={webIcon}/></a>
                        </div>
                        <p>
                            {proj.description}
                        </p>
                        <div className="proj-tags">
                            {
                                proj.tags.map(tag =>
                                    <span key={tag.tag}>
                                        {tag.tag}
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