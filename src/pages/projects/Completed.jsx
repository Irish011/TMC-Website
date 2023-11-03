import {React, useState} from "react";
// import About from "../home/about";
import img1 from "../../images/pics/home-slider-1.jpg"
import img2 from "../../images/pics/home-slider-2.jpg"
import img3 from "../../images/pics/home-slider-3.jpg"
import Carousel from "./Carousel";
import { marutiAmarkunj, sahjanandHeliconia } from "../../images/imgFunc";

// import Popup  from  './Popup';
import PopupContent from './PopupContent';


const Completed = () => {

    // const [buttonPopup, setButtonPopup] = useState(false);
    const [popup, setPopup] = useState(false);

    const slides = [
        {url: img1, type: "image", title: "Image1"},
        {url: img2, type: "image", title: "Image1"},
        {url: img3, type: "image", title: "Image1"},
    ];

    return (
        <>
        {
            popup && <PopupContent popup={popup} setPopup={setPopup}/>
        }
        <div style={{margin: '2rem 1rem'}}>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
            <div className="w3-row-padding completedProjects">
                <div className="w3-third w3-container projectsContainer">
                {/* onClick={() => setPopup({img:"",text:"abdc",})} */}
                    <Carousel slides = {marutiAmarkunj}></Carousel>
                    <div className="carouselText">Maruti Amarkunj</div>
                </div>
               
                <div className="w3-third w3-container projectsContainer" >
                {/* onClick={() => setButtonPopup()} */}
                    <Carousel slides = {sahjanandHeliconia}></Carousel>
                    <div className="carouselText">Sahjanand Heliconia</div>
                </div>
            
                <div className="w3-third w3-container projectsContainer" >
                    <Carousel slides = {slides}></Carousel>
                    <div className="carouselText">Jaldhara Bunglows</div>
                </div>
                <div className="w3-third w3-container  projectsContainer" >
                    <Carousel slides = {slides}></Carousel>
                    <div className="carouselText">Jaldhara Bunglows</div>
                </div>
                <div className="w3-third w3-container  projectsContainer" >
                    <Carousel slides = {slides}></Carousel>
                    <div className="carouselText">Jaldhara Bunglows</div>
                </div>
                <div className="w3-third w3-container  projectsContainer" >
                    <Carousel slides = {slides}></Carousel>
                    <div className="carouselText">Jaldhara Bunglows</div>
                </div>
                
            </div>
            {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}><div className="popup-content"><About/></div></Popup> */}
        </div>  
        </>
    );
};

export default Completed;