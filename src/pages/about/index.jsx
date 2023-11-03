import React, { useEffect, useState, useRef } from "react";
import Founder2 from '../../images/founder2.jpg';
import { LazyLoadImage } from "react-lazy-load-image-component";
import Youtube from 'react-youtube';
import LightSaber from "../../Loader/LightSaber";
// import autoAnimate from "@formkit/auto-animate";
import Card from "../../components/Card";
import './aboutUs.css';


<head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato"/>
</head>

function AboutUs(){
   
    const [isSpecialiseVisible, setIsSpecialiseVisible] = useState(false);
    const [isFounderVisible, setIsFounderVisible] = useState(false);
    const [isJourneyVisible, setIsJourneyVisible] = useState(false);
    const [isVideoVisible, setIsVideoVisible] = useState(false);
    const [isProcessVisible, setIsProcessVisible] = useState(false);
    const [isUniqueVisible, setIsUniqueVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    const specialiseRef = useRef(null);
    const journeyRef = useRef(null);
    const videoRef = useRef(null);
    const founderRef = useRef(null);
    const processRef = useRef(null);
    const uniqueRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            setIsSpecialiseVisible(true);
            setIsFounderVisible(true);
            setIsJourneyVisible(true);
            setIsProcessVisible(true);
            setIsUniqueVisible(true);
        }, 3500);
    }, []);


    // useEffect(() => {
    //     if(isSpecialiseVisible && specialiseRef.current){
    //         autoAnimate(specialiseRef.current);
    //     }
    //     if(isJourneyVisible && journeyRef.current){
    //         autoAnimate(journeyRef.current);
    //     }
    //     if(isFounderVisible && founderRef.current){
    //         autoAnimate(founderRef.current);
    //     }
    //     if(isProcessVisible && processRef.current){
    //         autoAnimate(processRef.current);
    //     }
    //     if(isUniqueVisible && uniqueRef.current){
    //         autoAnimate(uniqueRef.current);
    //     }
    // },[isSpecialiseVisible, isJourneyVisible, isFounderVisible, isProcessVisible, isUniqueVisible]);

    //Intersection Observer
    const handleIntersection = (entry, setIsVisible) => {
        if(entry.isIntersecting && entry.intersectionRatio >= 0.2){
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }
    };

    useEffect(() => {
            const options = {
                threshold: 0.2,
            };

        const callback = (entries, observer) => {
            entries.forEach((entry) => {
                if(entry.target === specialiseRef.current){
                    handleIntersection(entry, setIsSpecialiseVisible);
                }else if(entry.target === journeyRef.current){
                    handleIntersection(entry, setIsJourneyVisible);
                }else if(entry.target === videoRef.current){
                    handleIntersection(entry, setIsVideoVisible);
                }else if(entry.target === founderRef.current){
                    handleIntersection(entry, setIsFounderVisible);
                }else if(entry.target === processRef.current){
                    handleIntersection(entry, setIsProcessVisible);
                }else if(entry.target === uniqueRef.current){
                    handleIntersection(entry, setIsUniqueVisible);
                }
            });
        };

        

        const observer = new IntersectionObserver(callback, options);

        if(specialiseRef.current){
            observer.observe(specialiseRef.current);
        }
        if(journeyRef.current){
            observer.observe(journeyRef.current);
        }
        if(videoRef.current){
            observer.observe(videoRef.current);
        }
        if(founderRef.current){
            observer.observe(founderRef.current);
        }
        if(processRef.current){
            observer.observe(processRef.current);
        }
        if(uniqueRef.current){
            observer.observe(uniqueRef.current);
        }

        return () => {
            if(specialiseRef.current){
                observer.unobserve(specialiseRef.current);
            }
            if(journeyRef.current){
                observer.unobserve(journeyRef.current);
            }
            if(videoRef.current){
                observer.unobserve(videoRef.current);
            }
            if(founderRef.current){
                observer.unobserve(founderRef.current);
            }
            if(processRef.current){
                observer.unobserve(processRef.current);
            }
            if(uniqueRef.current){
                observer.unobserve(uniqueRef.current);
            }
        };
    
    },[]);

    //video coordinates
    const opts = {
        width:'80%', //360
        height:'600', //234
        playerVars: {autoplay: 0},
    };

    return (
        <div style={{margin:'1.5rem 1rem 1rem 1rem',display: 'flex', flexDirection: 'column'}}>
            {isLoading ? (
                <div style={{height: '123rem', overflowY: 'hidden'}}>
                    <LightSaber/>
                </div>
            ):(

            
            <div>
                <div className="about-title">What do we Specialise In ?</div>
                <div className="about-text" ref={specialiseRef}>
                {isSpecialiseVisible?(
                        <div>
                            WE TAKE IMMENSE PRIDE IN OUR EXPERTISE IN TURNKEY PROJECTS. EVERY PROJECT WE EMBARK ON IS METICULOUSLY CRAFTED TO CATER TO THE DISTINCT NEEDS OF OUR CLIENTS AND THEIR PROPERTIES.
                            VERSATILITY IS AT THE HEART OF OUR PHILOSOPHY; WE HAVE NO FIXED STYLE OR DESIGN, OPTING INSTEAD TO EMBRACE EXPERIMENTATION. OUR APPROACH INVOLVES BLENDING DIVERSE CULTURAL ELEMENTS 
                            AND THINKING OUTSIDE THE CONVENTIONAL DESIGN NORMS. WE WHOLEHEARTEDLY EMBRACE INNOVATION AND CONTINUALLY PUSH BOUNDARIES TO CRAFT THE MOST IMAGINATIVE AND UNIQUE SPACES FOR OUR CLIENTS.
                        </div>
                ):null}
                </div> 
            <br/>
            <div className="about-title">Our Journey</div>
                <div className="about-youtube" style={{height: '20rem'}} ref={journeyRef}>
                {isJourneyVisible ? (
                    <div className="about-timestamp">
                        <Card text="The Firm was Registered as an LLP." year="2016" className="cardForm"/>
                        <Card text="Continued focussing on conceptual product development." year="2017" className="cardForm"/>
                        <Card text="Took our first small scale interior project" year="2018" className="cardForm"/>
                        <Card text="Our first office was officially set up!" year="2019" className="cardForm"/>
                        <Card text="Covid took a toll on us for 6 months but held strong on our projects." year="2020" className="cardForm"/>
                        <Card text="Got back with doing Major projects with our new and more efficient team!" year="2021" className="cardForm"/>
                        <Card text="YouTube success - Got love from all over India." year="2022" className="cardForm"/>
                        <Card text="50+ projects completed and working on expanding our horizons." year="2023" className="cardForm"/>
                    </div>
                ):null}
                     
                </div>
                <div className="about-video">         
                    {/* {isVideoVisible ? ( */}
                        <Youtube className="youtube" style={{width: '100%', textAlignLast: 'center'}}
                            videoId="WvyGfdyLCsA" opts= {opts} allowFullScreen="true"
                            loading="lazy" 
                        />
                    {/* ) : null}   */}
                </div>
            <br/>

           
                <div className="about-title" >Founders</div>
           <div className="founder-img-container" ref={founderRef}>
                
                {isFounderVisible ? (
                    <div className="row m-2">
                    
                    <div className='col text-center'>
                        <LazyLoadImage className="founder" src={Founder2}/>
                        <div className="founder-info">
                            <b>Mohit Parmar</b><br/>
                            (NIFT Graduate - Bdes)
                        </div>
                    </div>
                    <div className='col text-center'>
                    <LazyLoadImage className="founder" src={Founder2}/>
                        <div className="founder-info">
                            <b>Bhagirath Patel</b><br/>
                            (MBA in Marketing)
                        </div>
                    </div>
                    </div>
                ) : null}
                    
                 </div>
            <br/>
            <div className="about-title" >Project Process <i> @TMC</i></div>
            <div className="about-text" ref={processRef}>
            {isProcessVisible?(
                    <div> 
                        We personally select the projects that we want to undertake and the best 
                        part about working with us is that the client will get to visually see and 
                        change the way their project would look after execution. A whole 3D video 
                        is made for each project before the work is started so that one can be 
                        sure about their space to be the best form of luxury that they always wanted to experience.
                    </div>
            ):null}
            </div>  
            <br/>
            <div className="about-title">How our projects are so Unique?</div>
            <div className="about-text" ref={uniqueRef}>
            {isUniqueVisible?(
                <div>
                Clients inspire us! We believe that each individual has its own unique 
                Vision that needs to be understood and defined through art, creativity and design.
            <br/>
                <> We also focus and take inspiration from the space that our projects are to be 
                built on. Each place has its own aura and a story that we want to enhance and put 
                in place. This right here, makes our projects different from one another so our 
                customers can enjoy luxurious exclusivity. </>
            
                </div>
            ):null}
                </div>
                </div>   
                )}
        </div>
    );
}

export default AboutUs;