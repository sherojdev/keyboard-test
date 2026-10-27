import { useEffect } from "react";

export function useNewStyleMac() {
    
    useEffect(() => {
        let mbutton = document.querySelectorAll<HTMLButtonElement>(".mac-button");
        let text = document.querySelector<HTMLDivElement>(".return-text");
        const onChange = (e: KeyboardEvent) =>  {
                mbutton.forEach((btn) => {
                    e.preventDefault();
                if(btn.getAttribute("data-key")?.toUpperCase().split(",").includes(e.code.toUpperCase())){ 
                        btn.style.background = "linear-gradient(120deg, #06B6D4, #7C3AED)";
                        btn.style.color = "white";
                        btn.style.border = "2px solid #0b0860";
                        if (text) {
                            text.style.visibility = "visible";
                            text.innerText = e.code;
                        } 
                }if(btn.getAttribute("data-key")?.toUpperCase().split(",").includes(e.key.toUpperCase())){ 
                        btn.style.background = "linear-gradient(120deg, #06B6D4, #7C3AED)";
                        btn.style.color = "white";
                        btn.style.border = "2px solid #0b0860";
                        if (text) {
                            text.style.visibility = "visible";
                            text.innerText = e.code;
                        }  
                }
                })}
                
            
               window.addEventListener("keydown", onChange);
    return () => window.removeEventListener("keydown", onChange);
        }, [])
}  
      

