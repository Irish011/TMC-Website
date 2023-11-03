import React from "react";
import ImgSlider from "../../components/img-slider";
import loadable from '@loadable/component';
// import UseIntersection from './UseIntersection';
// import Fade from 'react-reveal/Fade'
// import ReactVisibilitySensor from "react-visibility-sensor";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../styles/css/global.css';
// import '../../App.css';
// import About from "./about";
// import Projects from "./projects";

const About = loadable(() => import("./about"), {
  fallback: 
    <div style={{height: '100%'}}>Loading...</div>
});

const Projects = loadable(() => import("./projects"), {
  fallback: <div style={{height: '50%'}}>Loading...</div>
});

function HomePage() {
  // const aboutRef = useRef(null);
  // const projectRef = useRef(null);

  // const aboutVisible = UseIntersection(aboutRef, {threshold: 0});
  // const projectVisible = UseIntersection(projectRef, {threshold: 0});

  return (
    <div>
      <ImgSlider />
      {/* <div className="aboutVisible" ref={aboutRef}>
        {aboutVisible && <About/>}
      </div>
      <div className="projectVisible" ref={projectRef}>
        {projectVisible && <Projects/>}
      </div> */}
      <About/>
      <Projects/>
    </div>
  );
}

export default HomePage;
