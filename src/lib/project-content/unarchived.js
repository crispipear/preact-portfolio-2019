export default [
    <div className="right-full">
        <div>
            <h2>
             <a href="https://unarchived.org" target="_blank">unARchived</a> is an interactive experience that uses geolocation and augmented reality to visualize and experience the past and present of development and displacement in Seattle through interrelated, media-rich place-based stories
            </h2>
        </div>
        <div className='body-video'>
            <iframe src="https://player.vimeo.com/video/371237760" frameBorder="0" 
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
        </div>
    </div>,
    <div className="block-text">
        <div>
            <h1>my role</h1>
            <p>
            My primary role is to design and develop the unARchived website to showcase artifacts and information about this project. My secondary role is to collaborate with other designers in the UI/UX design of the unARchived mobile experience.            </p>
        </div>
        <div>
            <h1>the team</h1>
            <p>
            unARchived started out as a collaborative project between Abraham Avnisan, Christian Anderson, Amir Sheikh and the People’s Geography of Seattle. Design students from UW were then recruited on the team in Fall 2018. Learn more about the team on our website.            </p>
        </div>
    </div>,
    <div className="full-text">
        <h1>How might we create an experience that educates the general public about the history of development, gentrification and displacement in Seattle?</h1>
    </div>,
    <div className="right-full">
        <div>
            <h1>background</h1>
            <p>
                Seattle is the third most gentrifying U.S. city in 2019. The cultural and historical elements of Seattle has took a toll for the city’s development. There are many displaced and disappearing institutions, small businesses and architectures.
            </p>
            <p>
                Inspired by the projects like the <a href="https://www.vanishingseattle.org/" target="_blank">Vanishing Seattle</a>,  our team started with brainstorming ways to create and experience that can raise public awareness to the loss of historical buildings and culture as the cost of development in Seattle. 
            </p>
        </div>
        <div>
            <img src={require('../../assets/unarchived/background.jpg')}/>
        </div>
    </div>,
    <div className="left-full">
            <div>
            <img src={require('../../assets/unarchived/ideation.jpg')}/>
        </div>
        <div>
            <h1>initial ideation</h1>
            <p>
            My approach started with creating a mobile application integrated with augmented reality that has the abilities to display the past and the possible future of the community landmarks. As a public platform, users will be able to share their stories and memories to create emotional connections with the public.
            </p>
        </div>
    </div>,
    <div className="image-full">
        <img src={require('../../assets/unarchived/userflow.jpg')}/>
    </div>,
    <div className="block-text">
        <div>
            <h1>iteration</h1>
            <p>
                After some feedbacks and discussions, we have decided to shift the idea of sharing personal stories as a future stretch goal. As the initial product, we should put the focus on presenting the stories and historical images of different points of interests in neighborhoods in Seattle.
            </p>
        </div>
        <div/>
    </div>,
    <div className="image-full">
        <img src={require('../../assets/unarchived/wireframe.jpg')}/>
        <img src={require('../../assets/unarchived/appflow.jpg')}/>
    </div>,
    <div className="block-right">
        <div>
            <h1>tour mode</h1>
            <p>
            Depending on the tour mode and user location, the app will provide direction guidance to each relevant location (point of interest).
            </p>
        </div>
        <div>
            <img src={require('../../assets/unarchived/app_tour.png')}/>
        </div>
    </div>,
    <div className="block-right">
        <div>
            <h1>POI information</h1>
            <p>
            The app will display the points of interest of each neighborhood with information and stories of each point of interest.
            </p>
        </div>
        <div>
            <img src={require('../../assets/unarchived/app_info.png')}/>
        </div>
    </div>,
    <div className="block-right">
        <div>
            <h1>AR Exploration</h1>
            <p>
            When user enters the augmented reality view, a historical photograph will overlay on the real time location, showing the environmental contrast between the past and present.
            </p>
        </div>
        <div>
            <img src={require('../../assets/unarchived/app_ar.gif')}/>
        </div>
    </div>,
    <div className="block">
        <div>
            <h1>unARchived website</h1>
            <p>
            The unARchived website shows the project information, team, blog entries and points of interest information for those who are not using the mobile app.
            </p>
            <p>
            I designed and developed the mobile-responsive website using React and Contentful as a content management, the front-end structure was set up for dynamic content and data.
            </p>
        </div>
        <div/>
    </div>,
    <div className="image-full">
        <img src={require('../../assets/unarchived/web.png')}/>
    </div>,
    <div className="block-images">
        <div>
            <img src={require('../../assets/unarchived/web_1.png')}/>
        </div>
        <div>
            <img src={require('../../assets/unarchived/web_2.png')}/>
        </div>
        <div>
            <img src={require('../../assets/unarchived/web_3.png')}/>
        </div>
        <div>
            <img src={require('../../assets/unarchived/web_4.png')}/>
        </div>
        <div>
            <img src={require('../../assets/unarchived/web_5.png')}/>
        </div>
        <div>
            <img src={require('../../assets/unarchived/web_6.png')}/>
        </div>
    </div>
]