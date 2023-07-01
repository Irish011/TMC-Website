import React from "react";
import Person from '../../images/logo-1.png';
import Youtube from 'react-youtube';
import Card from 'react-bootstrap/Card';


function AboutUs(){
    //video coordinates
    const opts = {
        width:'853', //360
        height:'480', //234
        playerVars: {autoplay: 0},
    };

    return (
        <div style={{margin:'9rem 1rem 1rem 1rem',display: 'flex', flexDirection: 'column',fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"
    }}>
    <div className="about-header">About
    <div className="about-header2"> About </div></div>
           <div className="about-title">What do we specialise in ?</div>
           <div className="about-text">
                We are proud to call ourselves as experts of Turnkey projects!
                Each and every project that we undertake are phenomenally designed for the client, keeping in mind the uniqueness of the family and the property.
                Versatility is our Core Concept. We have no specific style or design. Our belief is to experiment with everything, from combining different cultural hues, to designing out of the box. We don’t, and we never will shy away from experimentation to create the most innovative space for our clients.
            </div>
<br/>
            <div className="about-title">Our Journey</div>
                <div className="about-youtube">
                    <div className="about-timestamp">
                        <Card className="card">
                            <Card.Body className="cardBody">
                                <b>2016 :</b> The firm was Registered as an LLP.
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className="cardBody">
                                <b>2017 :</b> Continued focussing on conceptual product development.
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className="cardBody">
                                <b>2018 :</b> Took our first small scale interior project.
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className="cardBody">
                                <b>2019 :</b> Our first office was officially set up!
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className="cardBody">
                                <b>2020 :</b> Covid took a toll on us for 6 months but held strong on our projects.
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className="cardBody">
                                <b>2021 :</b> Got back with doing Major projects with our new and more efficient team!
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className="cardBody">
                                <b>2022 :</b> YouTube success - Got love from all over India.
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className="cardBody">
                                <b>2023 :</b> 50+ projects completed and working on expanding our horizons.
                            </Card.Body>
                        </Card>
                    </div> 
                    <div className="about-video">
                        <Youtube className="youtube"
                            videoId="GOuwOI-WSkE" opts= {opts}
                        />
                    </div>
                </div>
<br/>
            <div>
                <div className="about-title">Founders</div>
                <div className="row m-2">
                    <div className='col text-center'>
                        <img src={Person} className="founder"></img>
                        <div className="founder-info">
                            <b>Mohit Parmar</b><br/>
                            (NIFT Graduate - Bdes)
                        </div>
                    </div>
                    <div className='col text-center'>
                        <img src={Person} className="founder"></img>
                        <div className="founder-info">
                            <b>Bhagirath Patel</b><br/>
                            (MBA in Marketing)
                        </div>
                    </div>
                </div>
            </div>
<br/>
            <div className="about-title">Project Process <i> @TMC</i></div>
            <div className="about-text">
            We personally select the projects that we want to undertake and the best 
            part about working with us is that the client will get to visually see and 
            change the way their project would look after execution. A whole 3D video 
            is made for each project before the work is started so that one can be 
            sure about their space to be the best form of luxury that they always wanted to experience.
            </div>  
<br/>
            <div className="about-title">How our projects are so Unique?</div>
            <div className="about-text">
                Clients inspire us! We believe that each individual has its own unique 
                Vision that needs to be understood and defined through art, creativity and design.
<br/>
                <p> We also focus and take inspiration from the space that our projects are to be 
                built on. Each place has its own aura and a story that we want to enhance and put 
                in place. This right here, makes our projects different from one another so our 
                customers can enjoy luxurious exclusivity. </p>
            </div>   

        </div>
    )
}

export default AboutUs;