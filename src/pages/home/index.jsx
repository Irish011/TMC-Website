import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/css/global.css';
import '../../App.css';
import ImgSlider from "../../components/img-slider";
import loadable from '@loadable/component';

const About = loadable(() => import("./about"), {
  fallback: 
    <div style={{height: '100%'}}>Loading...</div>
});

const Projects = loadable(() => import("./projects"), {
  fallback: <div style={{height: '50%'}}>Loading...</div>
});

function HomePage() {
  return (
    <div>
      <ImgSlider />
      <About />
      <Projects />
    </div>
  );
}

export default HomePage;
