import React from "react";
import { Button } from "react-bootstrap";
import "./about.css";
// import ReactVisibilitySensor from 'react-visibility-sensor';
import CountUp from "react-countup";

function About(){

    // const[isVisible, setIsVisible] = useState(false);

    // const onVisibilityChange = (isVisible) => {
    //     if(isVisible){
    //         setIsVisible(true);
    //     }
    // };

    
    return (
        <div className="aboutHomePage">
            <div className="aboutHomeTitle">
                About
            </div>
            <div className="aboutHomeBody">
                <div className="aboutHomeTextContainer">
                    <div className="aboutHomeText">
                        We are proud to call ourselves as experts of Turnkey projects!
                        Each and every project that we undertake are phenomenally designed for the client, keeping in mind the uniqueness of the family and the property.
                        Versatility is our Core Concept. We have no specific style or design. Our belief is to experiment with everything, from combining different cultural hues, to designing out of the box. We don’t, and we never will shy away from experimentation to create the most innovative space for our clients.
                    </div>
                    <div className="aboutHomeTextButton">
                        <Button type="button" href="/aboutUs" className="readMoreButton">Read More</Button>
                    </div>
                </div>
                <div className="aboutHomeNumbers">
                
                        <div className="numberContainer">
                            <CountUp className="number" end={100} duration={5}/> 
                        <div className="numberText">Projects Completed</div>   
                        </div>
                    <div className="numberContainer">
                        <CountUp className="number" end={150} duration={5}/>
                        <div className="numberText">Upcoming Projects</div>
                    </div>
                    <div className="numberContainer">
                        <CountUp className="number" end={200} duration={5}/>
                        <div className="numberText">Residential Projects</div>
                    </div>
                    <div className="numberContainer">
                        <CountUp className="number" end={20} duration={5}/>
                        <div className="numberText">Commercial Projects</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
