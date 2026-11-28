import { useEffect } from "react";

import { Blink } from "./useTerminalBlink";

export function useNewStyle() {

    useEffect(() => {
        let card = document.querySelectorAll<HTMLButtonElement>(".card");
        let animation = document.querySelector<HTMLDivElement>(".container-animation");
        const onChange = (e: KeyboardEvent) => {
            console.log(e)
            card.forEach((btn) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                e.preventDefault();
               
                if (animation && e.code==="") {
                        animation.innerHTML += `<div id="return-text" class="m-2 rounded-xl h-[30px] w-[10vw]">Numlock</div>`
                        setTimeout(() => {
                        document.getElementById("return-text")!.remove();
                         }, 2000);
                        }       
                if (btn.getAttribute("data-key")?.toUpperCase() === e.code.toUpperCase()) {
                    btn.style.background = "linear-gradient(145deg, #F472B6, #FB923C)";
                    btn.style.color = "white";
                    btn.style.border = "2px solid rgba(255, 255, 255, 0.4)";
                    if (animation && e.code!=="") {
                        animation.innerHTML += `<div id="return-text" style="font-family: 'VT323', monospace" class="2xl:m-3 xl:m-2 lg:m-3 md:m-3 sm:m-3 m-3 2xl:rounded-xl xl:rounded-md lg:rounded-md md:rounded-md sm:rounded-md rounded-xs 2xl:text-center xl:text-center lg:text-center md:text-center sm:text-center text-center 2xl:h-[30px] 2xl:w-[190px] xl:h-[26px] xl:w-[160px] lg:h-[24px] lg:w-[140px] md:h-[20px] md:w-[120px] sm:h-[18px] sm:w-[100px] h-[16px] w-[70px] bg-transparent 2xl:text-[#3dda09] xl:text-[#3dda09] lg:text-[#3dda09] md:text-[#3dda09] sm:text-[#3dda09] text-[#3dda09] 2xl:flex 2xl:flex-wrap 2xl:justify-center xl:items-center xl:flex xl:flex-wrap xl:justify-center lg:flex lg:flex-wrap lg:justify-center lg:items-center md:flex md:flex-wrap md:justify-center md:items-center sm:flex sm:flex-wrap sm:justify-center sm:items-center xl:items-center flex flex-wrap justify-center items-center 2xl:font-bold xl:font-bold lg:font-bold md:font-bold sm:font-semibold font-semibold 2xl:text-[28px] xl:text-[24px] lg:text-[20px] md:text-[16px] sm:text-[14px] text-[12px]"><p>${e.code}<p></div>`
                        }
                     setTimeout(() => {
                        document.getElementById("return-text")!.remove();
                         }, 2000);
                }
            })
        }


        window.addEventListener("keydown", onChange);
        return () => window.removeEventListener("keydown", onChange);
    },[])
}


