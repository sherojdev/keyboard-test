import { useEffect } from "react";

export function useNewStyle() {

    useEffect(() => {
        let button = document.querySelectorAll<HTMLButtonElement>(".button");
        let animation = document.querySelector<HTMLDivElement>(".container-animation");
        const onChange = (e: KeyboardEvent) => {
            button.forEach((btn) => {
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
                        animation.innerHTML += `<div id="return-text" class="m-2 rounded-xl h-[30px] w-[10vw] bg-[#3dda09] text-black  text-base border border-solid border-[#253237] border-[3px]">${e.code}</div>`
                        }
                    setTimeout(() => {
                         document.getElementById("return-text")!.remove();
                         }, 2000);
                }
            })
        }


        window.addEventListener("keydown", onChange);
        return () => window.removeEventListener("keydown", onChange);
    }, [])
}


