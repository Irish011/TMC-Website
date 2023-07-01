import React from "react";
import { Button } from "react-bootstrap";

function About(){
    return (
        <div className="career">
            <div className="home-about-title">About
                <div className="home-about-title2" >About</div>
            </div>
            <div className="row m-4">
                <div>
                    <p className="container home-about-text">
                    We are proud to call ourselves as experts of Turnkey projects!
                    Each and every project that we undertake are phenomenally designed for the client, keeping in mind the uniqueness of the family and the property.
                    Versatility is our Core Concept. We have no specific style or design. Our belief is to experiment with everything, from combining different cultural hues, to designing out of the box. We don’t, and we never will shy away from experimentation to create the most innovative space for our clients.
                    </p>
                    <Button type="button" href="/aboutUs" className="read-more-btn">Read More</Button>
                </div>
            </div>
        </div>
    )
}

export default About;