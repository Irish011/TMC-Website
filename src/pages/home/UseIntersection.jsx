import {useState, useEffect} from 'react';

function UseIntersection(ref, options){
    const[isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observor = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, options);

        if(ref.current){
            observor.observe(ref.current);
        }

        return () => {
            if(ref.current){
                observor.unobserve(ref.current);
            }
        };
    }, [ref, options]);
    return isVisible;
}

export default UseIntersection;