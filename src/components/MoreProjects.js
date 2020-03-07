import webIcon  from '../assets/icon_web.svg';
import Fade from './Fade';

export default function MoreProjects(props) {
    const projects = props.projects
    return (
        <div className="work-more-projects">
            {
                projects.map((proj, key) => 
                    <Fade delay={key*100}>
                        <div className="more-proj-item" key={proj.uid}>
                            <div className="background">
                                <div style={{backgroundImage: `url(${proj.cover.url})`}}/>
                            </div>
                            <div className="title-row">
                                <h5 className="serifFont">{proj.name}</h5>
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
                    </Fade>
                )
            }
        </div>
    );
}