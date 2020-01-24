import React, { useState, useEffect } from 'react';
import Intro from '../../components/ProjIntro';
import Footer from '../../components/ProjFooter';
import LinkText from '../../components/content/LinkText';
import Video from '../../components/content/Video';
import ImageBlock from '../../components/content/ImageBlock';

export default function journi(props) {
    return (
        <div className='project container'>
            <Intro project="journi"/>
            <div className='body'>
            <div className="right-bleed">
                <div>
                    <h2>
                        <LinkText link="http://projectjourni.com/" text="journi"/> is a mobile application for young solo travelers to assist them in being more aware of their surroundings and to provide accessible emergency support.
                    </h2>
                </div>
                <Video source="https://player.vimeo.com/video/338786123"/>
            </div>
            <div className="block-text">
                <div>
                    <h1>my role</h1>
                    <p>
                        For our senior capstone project in 2019, our whole team performed UX Research and designed a solution around a problem. My other role within this project was to develop a mobile prototype of this app and the product showcase video production.
                    </p>
                </div>
                <div>
                    <h1>team members</h1>
                    <p/>
                    <LinkText link="https://www.angelabirchman.com/" text="Angela Birchman"/>
                    <LinkText link="https://benjaminsiev.com/" text="Benjamin Siev"/> 
                    <LinkText link="https://juniortranthien.wixsite.com/website" text="Junior Tran-Thien"/> 
                    <LinkText link="https://www.yinyindesign.com/" text="Yin Yin"/> 
                </div>
            </div>
            <div className="full-text">
                <h1>
                    How might we design a tool that helps solo travelers to be aware of their safety and provide accessible emergency support?
                </h1>
            </div>
            <div className="image-full">
                <img src={require('../../assets/journi/brainstorm.jpg')} />
                <span>brain storming our scope</span>
            </div>
            <div className="block">
                <div>
                    <h1>background research</h1>
                    <p>
                        The initial social issue that we looked at was safety concerns targeting women. Throughout our research, we also found that solo traveling has been a rising trend especially in the young female group.
            </p>
                    <p>
                        Ultimately, we want our tool to be opened to all user groupos. We decided to narrow down our scope to solo traveling and safety and gathered more data from online survey results and database.
            </p>
                </div>
                <ImageBlock source={require('../../assets/journi/research_1.jpg')}/>
            </div>
            <div className="block">
                <ImageBlock source={require('../../assets/journi/research_2.jpg')}/>
                <div>
                    <h1>user research</h1>
                    <p>
                        To further analyze the problem and understand the common travel safety concerns, we performed <b>12</b> qualitative interviews and questionnaire survey with <b>100</b> responses.
                    </p>
                    <p>
                        The findings in solo travelers concerns are summarized down to the keywords on the left.
                    </p>
                </div>
            </div>
            <div className="block">
                <div>
                    <h1>the problem</h1>
                    <p>
                        1. It is difficult to do research on information related to safe traveling areas.
                    </p>
                    <p>
                        2. There are no concise information and guides for safe traveling.
                    </p>
                    <p>
                        3. Solo travelers are concerned about accessible solution under emergency situations.
                    </p>
                </div>
                <ImageBlock source={require('../../assets/journi/research_3.jpg')}/>
            </div>
            <div className="block">
                <ImageBlock source={require('../../assets/journi/research_4.jpg')}/>
                <div>
                    <h1>competitive analysis</h1>
                    <p>
                        We did analysis on similar/potential competitors such as Airbnb, Google Trips, Trip Advisor and Booking.com. The features are more towards the area of “reporting” which is reactive instead of preventative.
            </p>
                    <p>
                        We came to a conclusion that our opportunity window lies within a product that provides effective and proactive features.
            </p>
                </div>
            </div>
            <div className="block-left">
                <div>
                    <h1>app prototype</h1>
                    <p>
                        We drafted the features corresponding to our problem statements to design our solution.
                        For the purpose of concept demonstration and user testing, I created a high fidelity mobile prototype with React Native.
            </p>
                </div>
                <div />
            </div>
            <div className="image-full">
                <img src={require('../../assets/journi/wireframe.png')} />
                <img src={require('../../assets/journi/mockup.png')} />
            </div>
            <div className="block-center">
                <div>
                    <h1>safety card</h1>
                    <p>
                        Home screen is a “pocket card” that provides accessible information regarding real time location, nearby resources, emergency contact, landmarks and safe areas.
            </p>
                </div>
                <div>
                    <img className="image-hh" src={require('../../assets/journi/app_map.gif')} />
                </div>
            </div>
            <div className="block-center">
                <div>
                    <h1>safety check-in</h1>
                    <p>
                        Depending on user’s settings, journi will send a notification where user can confirm their safety. If user failed to confirm, their emergency contacts will be notified.            </p>
                </div>
                <div>
                    <img className="image-hh" src={require('../../assets/journi/app_checkin.gif')} />
                </div>
            </div>
            <div className="block-center">
                <div>
                    <h1>create trips</h1>
                    <p>
                        Home screen is a “pocket card” that provides accessible information regarding real time location, nearby resources, emergency contact, landmarks and safe areas.
            </p>
                </div>
                <div>
                    <img className="image-hh" src={require('../../assets/journi/app_create.gif')} />
                </div>
            </div>
            <div className="block-center">
                <div>
                    <h1>travel info</h1>
                    <p>
                        journi provides concised city travel tips according to the destination of the trip.
            </p>
                </div>
                <div>
                    <img className="image-hh" src={require('../../assets/journi/app_trip.gif')} />
                </div>
            </div>
            <div className="left-bleed">
                <div>
                    <img src={require('../../assets/journi/ideas.jpg')} />
                </div>
                <div>
                    <h1>capstone exhibit</h1>
                    <p>
                        The two quarters long preparation led up to our final presentation. The senior capstone exhibit was held on June 4th, 2019. We designed and created all the artifacts that went on the 4ft by 8ft walls. We projected our product showcase video and ran the mobile prototype app on an iPhone mounted on the wall.
        </p>
                </div>
            </div>
            <div className="image-full">
                <img src={require('../../assets/journi/exhibit3.jpg')} />
                <img src={require('../../assets/journi/exhibit1.jpg')} />
                <img src={require('../../assets/journi/exhibit2.jpg')} />
            </div>
        </div>
        <Footer project="journi"/>
    </div>
    );
}