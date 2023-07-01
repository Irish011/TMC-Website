import React, { Suspense, useRef, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/css/global.css';
import '../../App.css';
import ImgSlider from "../../components/img-slider";
const About = React.lazy(() => import("./about"));
const Projects = React.lazy(() => import("./projects"));

function HomePage(){
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const [aboutVisible, setAboutVisible] = useState(false);
    const [projectVisible, setProjectVisible] = useState(false);

    useEffect (() => {
        const aboutObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    setAboutVisible(true);
                }
            });
        });

        const projectObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    setProjectVisible(true);
                }
            });
        });

        if(aboutRef.current){
            aboutObserver.observe(aboutRef.current);
        }
        if(projectRef.current){
            projectObserver.observe(projectRef.current);
        }

        return () => {
            if(aboutRef.current){
                aboutObserver.unobserve(aboutRef.current);
            }

            if(projectRef.current){
                projectObserver.unobserve(projectRef.current);
            }
        };
    }, []);

    return(
        <div>
    
            <div ref={aboutRef}>
                {aboutVisible && (
                    <Suspense fallback={<div>Loading...</div>}>
                        <About/>
                    </Suspense>
                )}
            </div>
            <div ref={projectRef}>
                {projectVisible && (
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <Projects/>
                    </React.Suspense>
                )}
            </div>
        </div>
    );
}

export default HomePage;