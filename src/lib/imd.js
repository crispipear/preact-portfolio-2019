import COVER from '../assets/imd/cover.png';
import WEB1 from '../assets/imd/web_1.png';
import WEB2 from '../assets/imd/web_2.png';
import WEB3 from '../assets/imd/web_3.png';
import WEB4 from '../assets/imd/web_4.png';
import WEB5 from '../assets/imd/web_5.png';
import WEB6 from '../assets/imd/web_6.png';
import WEB7 from '../assets/imd/web_7.png';
import WEB8 from '../assets/imd/web_8.png';


export default {
    name: "IMD 2019",
    year: "2019",
    context: "Website",
    tools: "React, Contentful",
    role: "Web Design/Development",
    cover: COVER,
    body: [
        <div className="body-block">
            <h1>overview</h1>
            <p>IMD 2019 is a website showcasing the graduates and their work from the 
                Interactive Media Design class of 2019 from University of Washington.
                 Check the live website at<a href="https://uwbimd2019.com" target="_blank">uwbimd2019.com</a>
            </p>
        </div>,
        <div className="body-block">
            <h1>my role</h1>
            <p>I started this project in my senior year of college
                since the design department from our school never had websites or any platform to
                showcase the graduating classes and their projects. I wanted to create a website that stores
                the "legacy" and shows a bit of the personality of the class of 2019.
            </p>
            <p>
                I recruited and collaborated with several other students from my cohort to put together this project.
                My primary role was to do the full-stack development and collaborated with
                <a href="https://yinyindesign.com" target="_blank">Yin Yin</a>,
                <a href="https://hannahtashiro.com" target="_blank">Hannah Tashiro</a> and
                <a href="https://benjaminsiev.com" target="_blank">Benjamin Siev</a>
                to iterate on the design of the website.
            </p>
        </div>,
        <img src={WEB1}/>,
        <img src={WEB2}/>,
        <img src={WEB3}/>,
        <img src={WEB4}/>,
        <img src={WEB5}/>,
        <img src={WEB6}/>,
        <img src={WEB7}/>,
        <img src={WEB8}/>
    ]
}