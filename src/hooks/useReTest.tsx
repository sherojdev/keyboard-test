import { useEffect } from "react";

export function Retest() {

    useEffect(() => {
        let card = document.querySelectorAll<HTMLButtonElement>(".card");
        let test = document.querySelector<HTMLButtonElement>(".test");
        const onClear = (e: MouseEvent) => {
            
            card.forEach((btn) => { 
                 btn.style.background = "";
                 btn.style.color = "";
                 btn.style.border = "";    
                 setTimeout(() => {
                         document.getElementById("return-text")!.remove();
                         }, 100);     
        })
        }

        test!.addEventListener("click", onClear);
        return () => test!.removeEventListener("click", onClear);
    }, [])
}