import React from "react";
import img1 from "../../images/home-slider-1.jpg"
import img2 from "../../images/home-slider-2.jpg"
import img3 from "../../images/home-slider-3.jpg"
import Carousel from "./Carousel";

const Completed = () => {

    const slides = [
        {url: img1, type: "image", title: "Image1"},
        {url: img2, type: "image", title: "Image1"},
        {url: img3, type: "image", title: "Image1"},
    ];


    return (
        <div>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
        <div className="completedTitle"> Completed Projects 
        <div className="completedTitle2"> Completed Projects </div> </div>
            <div className="w3-row-padding completedProjects">
                <div className="w3-third w3-container w3-margin-bottom projectsContainer">
                    <Carousel slides = {slides}></Carousel>
                    <div className="carouselText">Jaldhara Bunglows</div>
                </div>
                <div className="w3-third w3-container w3-margin-bottom projectsContainer" >
                    <Carousel slides = {slides}></Carousel>
                    <div className="carouselText">Jaldhara Bunglows</div>
                </div>
                <div className="w3-third w3-container w3-margin-bottom projectsContainer" >
                    <Carousel slides = {slides}></Carousel>
                    <div className="carouselText">Jaldhara Bunglows</div>
                </div>
                <div className="w3-third w3-container w3-margin-bottom projectsContainer" >
                    <Carousel slides = {slides}></Carousel>
                    <div className="carouselText">Jaldhara Bunglows</div>
                </div>
                <div className="w3-third w3-container w3-margin-bottom projectsContainer" >
                    <Carousel slides = {slides}></Carousel>
                    <div className="carouselText">Jaldhara Bunglows</div>
                </div>
                <div className="w3-third w3-container w3-margin-bottom projectsContainer" >
                    <Carousel slides = {slides}></Carousel>
                    <div className="carouselText">Jaldhara Bunglows</div>
                </div>
                <div className="w3-third w3-container w3-margin-bottom projectsContainer" >
                    <Carousel slides = {slides}></Carousel>
                    <div className="carouselText">Jaldhara Bunglows</div>
                </div>
                <div className="w3-third w3-container w3-margin-bottom projectsContainer" >
                    <Carousel slides = {slides}></Carousel>
                    <div className="carouselText">Jaldhara Bunglows</div>
                </div>
                <div className="w3-third w3-container w3-margin-bottom projectsContainer" >
                    <Carousel slides = {slides}></Carousel>
                    <div className="carouselText">Jaldhara Bunglows</div>
                </div>
            </div>
        </div>
    );
};

export default Completed;