import { useEffect } from "react";

export function useNewStyle() {
    
    useEffect(() => {
        let button = document.querySelectorAll<HTMLButtonElement>(".container1");
        let text = document.querySelector<HTMLDivElement>(".return-text");
        const onChange = (e: KeyboardEvent) =>  {
                button.forEach((btn) => {
                    e.preventDefault();
                    if(btn.getAttribute("data-key")?.toUpperCase().split(",").filter(ele => ele === e.code.toUpperCase())){ 
                        btn.style.background = "linear-gradient(145deg, #F472B6, #FB923C)";
                        btn.style.color = "white";
                        btn.style.border = "2px solid rgba(255, 255, 255, 0.4)";
                        if (text) {
                            text.style.visibility = "visible" ;
                            text.innerText = e.code ;
                    }
                }   
                })
                }
            
               window.addEventListener("keydown", onChange);
    return () => window.removeEventListener("keydown", onChange);
        }, [])
}  
      

