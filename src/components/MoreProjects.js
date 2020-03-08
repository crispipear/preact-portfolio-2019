import webIcon  from '../assets/icon_web.svg';
import Fade from './Fade';
import Reveal from './Reveal';

export default function MoreProjects(props) {
    const projects = props.projects
    return (
        <div className="work-more-projects">
            {
                projects.map((proj, key) => 
                        <div className="more-proj-item" key={proj.uid}>
                            <Reveal>
                                <div className="background">
                                    <div style={{backgroundImage: `url(${proj.cover.url})`}}/>
                                </div>
                            </Reveal>
                            <div className="title-row">
                                <Fade delay={200}>
                                    <h5 className="serifFont">{proj.name}</h5>
                                </Fade>
                                <Fade delay={200}> 
                                    <a href={proj.link.url} target="_blank"><img src={webIcon}/></a>
                                </Fade>
                            </div>
                            <Fade delay={250}>
                                <p>
                                    {proj.description}
                                </p>
                            </Fade>
                            <Fade delay={300}>
                            <div className="proj-tags">
                                {
                                    proj.tags.map((tag, key)=>
                                            <span key={tag.tag} key={tag.tag + key}>
                                                {tag.tag}
                                            </span>
                                    )
                                }
                            </div>
                            </Fade>
                        </div>
                )
            }
        </div>
    );
}