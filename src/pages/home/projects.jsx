import React from 'react';
import img1 from '../../images/Sahjanand Heliconia/10.jpg';
import './projects.css';


function Projects(){

    return(
        <div className='projectsHomeContainer'>
            <div className="home-projects-title">Projects</div>
            <div className='home-photo-container'>
                <div className='home-projects-container'>
                <a href="/completed">
                    <div className='home-projects-text'>Completed</div>
                    <img src={img1} className='home-projects-image' alt='completed projects'></img>
                </a>
                </div>
                <div className='w3-half w3-container w3-margin-bottom home-projects-container'>
                <a href="/completed">
                    <div className='home-projects-text'>Upcoming</div>
                    <img src={img1} className='home-projects-image' alt='upcoming projects'></img>
                </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;