import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/css/global.css';
import '../../App.css';
import ImgSlider from "../../components/img-slider";
const About = React.lazy(() => import("./about"));
const Projects = React.lazy(() => import("./projects"));

function HomePage(){

    return(
        <div>
            <ImgSlider/>
            <About />
            <Projects />
        </div>
    );
}

export default HomePage;