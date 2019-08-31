import COVER from '../assets/journi/cover.png';
import MOCKUP from '../assets/journi/mockup.png';
export default {
    name: "journi",
    year: "2019",
    context: "Mobile App",
    tools: "React Native",
    role: "Mobile Development, Web Design, Video Production, Exhibition Design",
    cover: COVER,
    body: [
        <div className="body-block">
            <h1>overview</h1>
            <p>journi is a mobile application for young solo travelers to assist them in being more aware of their surroundings and to provide accessible emergency support.
                learn more at<a href="https://projectjourni.com" target="_blank">projectjourni.com</a>
            </p>
        </div>,
        <div className="body-video">
            <iframe src="https://player.vimeo.com/video/338786123" frameBorder="0" 
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
        </div>,
        <div className="body-block">
            <h1>my role</h1>
            <p>
                My primary role is to develop the mobile prototype with React Native and produce the video prototype
                as a showcase video for our project during the senior capstone exhibit.
                My secondary role is to involve in the UX research process and design iteration of the mobile app.
            </p>
        </div>,
        <img src={MOCKUP}/>,
        <div className="body-block">
            <h1>more content coming soon</h1>
        </div>
    ]
}