import React, {useState, useEffect, useRef, useCallback} from "react";
// import Popup from "./Popup";
// import About from '../home/about';

const Carousel = ({slides}) => {
    // const [buttonPopup, setButtonPopup] = useState(false);

    const timerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    // const [transitionEnabled, setTransitionEnabled] = useState(false);


    const sliderContainerStyle = {
        cursor: 'pointer',
        width: `${slides.length * 100}%`,
        transform: `translateX(-${(currentIndex * 100) / slides.length}%)`,
    };

    const goToPrev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = useCallback(() => {
        // setTransitionEnabled(true);
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, slides]);

    useEffect(() => {
        if(timerRef.current){
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            goToNext();
        }, 5500);
        
        return () => clearTimeout(timerRef.current);
    }, [goToNext]);

    const renderSlide = () => {
        return slides.map((slide, index) => {
            if (slide.type === "image") {
                return (
                    <div
                        key={index}
                        style={{ width: `${100 / slides.length}%` }}>
                    <img
                      src={slide.url}
                      alt={slide.title}
                      style={{ width: '100%', height: '100%' }}/>
                  </div>
                );
            }

            if (slide.type === "video") {
                return (
                    <div
                        key={index}
                        style={{ width: `${100 / slides.length}%` }}>
                        <video src={slide.url}
                        type="video/mp4"
                        autoPlay
                        loop
                        muted
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                    </div>
                );
            }
            return null;
        });
    };

    return(
        <div className='carouselContainer'>
            <div className='carousel-leftbtn' onClick={goToNext}> &#9654; </div>
            <div className='carousel-rightbtn' onClick={goToPrev}> &#9664;</div>
            <div className="carouselSlider" style={sliderContainerStyle}>{renderSlide()}</div>

            {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}><div className="popup-content"><About/></div></Popup> */}
        </div>
    )
};

export default Carousel;