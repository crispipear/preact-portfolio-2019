import COVER from '../assets/smartcabin/cover.png';
import COVER_V from '../assets/smartcabin/cover_vert.png';
import SM1 from '../assets/smartcabin/sm_1.png';
import SM2 from '../assets/smartcabin/sm_2.png';
import SM3 from '../assets/smartcabin/sm_3.png';
import SM4 from '../assets/smartcabin/sm_4.png';
import SM5 from '../assets/smartcabin/sm_5.png';

export default {
    name: "Smart Cabin",
    year: "2017 - Present",
    context: "in-flight cabin experience",
    tools: "React, React Native, Node.js, C#",
    role: "Software Development, UI/UX Design",
    cover: COVER,
    cover_v: COVER_V,
    body: [
        <div className='body-block'>
            <h1>overview</h1>
            <p>
                Boeing Smart Cabin is a<a href='http://www.crystal-cabin-award.com/finalists-winners/overview.html' target='_blank'>Crystal Cabin Award 2019</a>
                Visionary Concept Cabin finalist. It is an interior mock-up of an airplane cabin featuring visionary cabin experience for both passengers and crew members. 
                The cabin operates under a data-driven, IoT space. All components are digitally managed through applications, from lighting to seating, from galley to lavatories.
                The implemented technologies are designed to create a more efficient and delightful in-flight experience for both crew members and passengers.
                In 2019, some of the technologies from the Smart Cabin are taken onto the ecoDemonstrator program for flight test using 777.
            </p>
        </div>,
        <div className='body-video'>
            <iframe src="https://www.youtube.com/embed/xjUIchSSX4c?start=41&end=71" frameBorder="0" 
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
        </div>,
        <div className='body-block'>
            <h1>my role</h1>
            <p>
                My primary role is to design and 
                develop web and iOS applications that support the technologies in concept cabin,
                from front end facing customer products to backend management engineer tools.
                I also collaborate with backend developers and embedded software engineers to
                integrate communications to devices and ensure technical feasibility on the applications.
                My secondary role is to design and create media assets that supports the cabin concept aesthetics.
            </p>
            <p>
                Due to NDA I am not allowed to disclose detailed information on the applications and media assets.
            </p>
        </div>,
            <p>screenshots from the video that showcases the overview of the cabin space</p>,
            <img src={SM1} alt='cabin image'/>,
            <img src={SM2} alt='cabin image'/>,
            <img src={SM3} alt='cabin image'/>,
            <img src={SM4} alt='cabin image'/>,
            <img src={SM5} alt='cabin image'/>,
        <div className='body-block'>
            <h1>related articles</h1>
            <p>
                Gubisch, M. (2019, April 1). AIX: Boeing to trial SmartCabin technologies this year.
                <br/>
                <a href="https://www.flightglobal.com/news/articles/boeing-to-trial-smartcabin-technologies-this-year-457061/" 
                    target="_blank" className='no-underline'>https://www.flightglobal.com/news/articles/boeing-to-trial-smartcabin-technologies-this-year-457061/
                </a>
            </p>
            <p>
                Romano, A. (2019, June 17). Boeing Is Making a Virtual Assistant to Assist Cabin Crew During Flights
                <br/>
                <a href="https://www.travelandleisure.com/airlines-airports/boeing-virtual-cabin-assistant-ellen" 
                    target="_blank" className='no-underline'>https://www.travelandleisure.com/airlines-airports/boeing-virtual-cabin-assistant-ellen
                </a>
            </p>
            <p>
                Boeing (2019, July 1). Boeing Takes New Technologies Out of the Lab and Onto ecoDemonstrator Flying Test Bed.
                <br/>
                <a href="https://boeing.mediaroom.com/2019-07-01-Boeing-takes-new-technologies-out-of-the-lab-and-onto-ecoDemonstrator-flying-test-bed" 
                    target="_blank" className='no-underline'>https://boeing.mediaroom.com/2019-07-01-Boeing-takes-new-technologies-out-of-the-lab-and-onto-ecoDemonstrator-flying-test-bed
                </a>
            </p>
        </div>
    ]
}