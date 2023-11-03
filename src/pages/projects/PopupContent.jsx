import React from 'react';

function PopupContent(props){
    return(
        <div onClick={() => props.setPopup(false)}>
            {props.popup.text}
        </div>
    );
}

export default PopupContent;