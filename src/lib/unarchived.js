import COVER from '../assets/unarchived/cover.png';
import WEB1 from '../assets/unarchived/web_1.png';
import WEB2 from '../assets/unarchived/web_2.png';
import WEB3 from '../assets/unarchived/web_3.png';
import WEB4 from '../assets/unarchived/web_4.png';
import WEB5 from '../assets/unarchived/web_5.png';
import WEB6 from '../assets/unarchived/web_6.png';

export default {
    name: "unARchived",
    year: "2018 - Present",
    context: "AR Mobile App, Website",
    tools: "React, Contentful",
    role: "UI/UX Design, Web Development",
    cover: COVER,
    body: [
        <div className="body-block">
            <h1>overview</h1>
            <p>
                unARchived is an interactive experience that uses geolocation and augmented reality to explore history of development, 
                gentrification and displacement in Seattle through interrelated, media-rich stories.
            </p>
            <p>The website is still under development.</p>
        </div>,
        <div className='body-video' style={{marginBottom: '12px'}}>
            <iframe src="https://player.vimeo.com/video/357033381" frameBorder="0" 
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
        </div>,
        <p style={{textAlign: 'right'}}>video by<a href="https://johnjkim.me/" target="_blank">John Kim</a></p>,
        <div className="body-block">
            <h1>my role</h1>
            <p>
                My primary role is to design and develop the unARchived website that 
                showcases the information and different artifacts of the project.
                The website uses Contentful as a content management tool, the website is
                being developed in a structure that prepares for dynamic content and data.
                My secondary role is to involve in the UI/UX design of the unARchived mobile app.
            </p>
        </div>,
        <img src={WEB1}/>,
        <img src={WEB2}/>,
        <img src={WEB3}/>,
        <img src={WEB4}/>,
        <img src={WEB5}/>,
        <img src={WEB6}/>,
        <div className="body-block">
            <h1>more content coming soon</h1>
        </div>
    ]
}