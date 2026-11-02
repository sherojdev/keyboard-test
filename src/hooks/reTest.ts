import { useEffect } from "react";

export function Retest() {

    useEffect(() => {
        let button = document.querySelectorAll<HTMLButtonElement>(".button");
        let test = document.querySelector<HTMLButtonElement>(".test");
        const onClear = (e: KeyboardEvent) => {
            button.forEach((btn) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                e.preventDefault();   
                if(test)  {
                      btn.style.background = "";
                      btn.style.color = "";
                      btn.style.border = "";
                      document.getElementById("return-text")!.remove();
                }
            })
        }


        test!.addEventListener("keydown", onClear);
        return () => test!.removeEventListener("keydown", onClear);
    }, [])
}