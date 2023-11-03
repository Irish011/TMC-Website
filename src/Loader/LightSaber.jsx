import React, { useEffect } from "react"
import './lightsaber.css';

function LightSaber(){

        useEffect(()=>{
                document.documentElement.style.overflow = 'hidden';
                document.body.scroll = 'no';
                console.log(0);
                return ()=>{
                        document.documentElement.style.overflow = 'auto';
                        document.body.scroll = 'yes';
                        console.log(1);
                }
        },[]);
return(
        <div id="loader">
                <div class="ls-particles ls-part-1"></div>
                <div class="ls-particles ls-part-2"></div>
                <div class="ls-particles ls-part-3"></div>
                <div class="ls-particles ls-part-4"></div>
                <div class="ls-particles ls-part-5"></div>
                <div class="lightsaber ls-left ls-green"></div>
                <div class="lightsaber ls-right ls-red"></div>
        </div>
    )
}    

export default LightSaber;
