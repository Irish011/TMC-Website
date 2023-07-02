import React from 'react';
import img1 from '../../images/Sahjanand Heliconia/10.jpg';
function Projects(){

    return(
        <div>

            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>

            <div className="home-projects-title">Projects</div>
            <div className="home-projects-title2">Projects</div>
            <div className='w3-row-padding'>
                <div className='w3-half w3-container w3-margin-bottom home-projects-container'>
                <a href="/completed">
                    <div className='home-projects-text'>Completed</div>
                    <img src={img1} className='home-projects-image'></img>
                </a>
                </div>
                <div className='w3-half w3-container w3-margin-bottom home-projects-container'>
                <a href="/completed">
                    <div className='home-projects-text'>Upcoming</div>
                    <img src={img1} className='home-projects-image'></img>
                </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;