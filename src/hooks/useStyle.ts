import { useEffect } from "react";

export function useNewStyle() {

    useEffect(() => {
        let button = document.querySelectorAll<HTMLButtonElement>(".button");
        let text = document.querySelector<HTMLDivElement>(".return-text");
        const onChange = (e: KeyboardEvent) => {
            button.forEach((btn) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                e.preventDefault();
                if (e.code==="") {
                        text!.style.visibility = "visible";
                        text!.innerText = "NumLock";
                }
                if (btn.getAttribute("data-key")?.toUpperCase() === e.code.toUpperCase()) {
                    btn.style.background = "linear-gradient(145deg, #F472B6, #FB923C)";
                    btn.style.color = "white";
                    btn.style.border = "2px solid rgba(255, 255, 255, 0.4)";
                    if (text && e.code!=="") {
                        text.style.visibility = "visible";
                        text.innerText = e.code;
                    }
                }
            })
        }


        window.addEventListener("keydown", onChange);
        return () => window.removeEventListener("keydown", onChange);
    }, [])
}


