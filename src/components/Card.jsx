import React, {useState} from "react";


function Card({text, year}){
    const [isHovered, setIsHovered] = useState(false);
    
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    
    return(
        <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="card-content">
                {isHovered ? (
                    <div className="card-text-content"> {text} </div>
                ) : (
                    <div className="card-year-content">{year}</div>
                )}
            </div>
        </div>
    );
}

export default Card;