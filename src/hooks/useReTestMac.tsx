import { useEffect } from "react";

export function Retestmac() {

    useEffect(() => {
       let mbutton = document.querySelectorAll<HTMLButtonElement>(".button");
       let test = document.querySelector<HTMLButtonElement>(".test");
        const onClear = (e: MouseEvent) => {
            
            mbutton.forEach((btn) => { 
                 btn.style.background = "";
                 btn.style.color = "";
                 btn.style.border = "";    
                 setTimeout(() => {
                         document.getElementById("return-text-mac")!.remove();
                         }, 100);     
        })
        }

        test!.addEventListener("click", onClear);
        return () => test!.removeEventListener("click", onClear);
    }, [])
}