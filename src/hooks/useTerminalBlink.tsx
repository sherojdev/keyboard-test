import { useEffect } from "react";

export function Blink() {

    useEffect(() => {
       let blink = document.querySelector<HTMLDivElement>(".blink");
        const onLoad = () => {     
            setInterval(()=>{
                 setTimeout(() => {
                         blink!.style.visibility = "hidden" ;
                         }, 700);   
                 blink!.style.visibility = "visible" ;
            },1400)
                  
        }

        window!.addEventListener("load", onLoad);
        return () => window!.removeEventListener("load", onLoad);
    }, [])
}


