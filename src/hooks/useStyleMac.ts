import { useEffect } from "react";

export function useNewStyleMac() {
    
    useEffect(() => {
        let mbutton = document.querySelectorAll<HTMLButtonElement>(".button");
        let animation = document.querySelector<HTMLDivElement>(".container-animation");
        const onChange = (e: KeyboardEvent) =>  {
                mbutton.forEach((btn) => {
                   e.stopImmediatePropagation();
                   e.stopPropagation();
                   e.preventDefault();
                if(btn.getAttribute("data-key")?.toUpperCase() === e.code.toUpperCase()){ 
                        btn.style.background = "linear-gradient(120deg, #06B6D4, #7C3AED)";
                        btn.style.color = "white";
                        btn.style.border = "2px solid #0b0860";
                         if (animation && e.code!=="") {
                             animation.innerHTML += `<div id="return-text-mac" class="m-2 rounded-xl h-[30px] w-[10vw] bg-[#ff0000] text-black  text-base border border-solid border-[#d3ea07] border-[3px]">${e.code}</div>`
                        }
                        setTimeout(() => {
                         document.getElementById("return-text-mac")!.remove();
                         }, 2000);
                }
                })}
                
            
               window.addEventListener("keydown", onChange);
    return () => window.removeEventListener("keydown", onChange);
        }, [])
}  
      

