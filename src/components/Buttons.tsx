import { useEffect } from "react";
import {
  WindowsFilled,
  ArrowUpOutlined,
  ArrowDownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

export default function Buttons() {
  const line1a = ["esc"];
  const line1b = ["F1"];
  const line1c = ["F2"];
  const line1d = ["F3"];
  const line1e = ["F4"];
  const line1f = ["F5"];
  const line1g = ["F6"];
  const line1h = ["F7"];
  const line1i = ["F8"];
  const line1j = ["F9"];
  const line1k = ["F10"];
  const line1l = ["F11"];
  const line1m = ["F12"];
  const line1n = ["prt sc"];
  const line1o = ["delete"];
  const line1p = ["home"];
  const line1q = ["end"];
  const line1r = ["pgup"];
  const line1s = ["pgdn"];
  const line2s1 = ["`"];
  const line2s2a = [1];
  const line2s2b = [2];
  const line2s2c = [3];
  const line2s2d = [4];
  const line2s2e = [5];
  const line2s2f = [6];
  const line2s2g = [7];
  const line2s2h = [8];
  const line2s2i = [9];
  const line2s2j = [0];
  const line2s2k = ["-"];
  const line2s2l = ["="];
  const line2s3 = ["backspace"];
  const line2s4a = ["/"];
  const line2s4b = ["*"];
  const line2s4c = ["-"];
  const line2s5 = ["Num lock"];
  const line3s1 = ["tab"];
  const line3s2a = ["Q"];
  const line3s2b = ["W"];
  const line3s2c = ["E"];
  const line3s2d = ["R"];
  const line3s2e = ["T"];
  const line3s2f = ["Y"];
  const line3s2g = ["U"];
  const line3s2h = ["I"];
  const line3s2i = ["O"];
  const line3s2j = ["P"];
  const line3s2k = ["["];
  const line3s2l = ["]"];
  const line3s3 = ["\\"];
  const line3s4a = [7];
  const line3s4b = [8];
  const line3s4c = [9];
  const line3s5 = ["+"];
  const line4s1 = ["capslock"];
  const line4s2a = ["A"];
  const line4s2b = ["S"];
  const line4s2c = ["D"];
  const line4s2d = ["F"];
  const line4s2e = ["G"];
  const line4s2f = ["H"];
  const line4s2g = ["J"];
  const line4s2h = ["K"];
  const line4s2i = ["L"];
  const line4s2j = [";"];
  const line4s2k = ["'"];
  const line4s3 = ["enter"];
  const line4s4a = [4];
  const line4s4b = [5];
  const line4s4c = [6];
  const line5s1 = ["shift"];
  const line5s2a = ["Z"];
  const line5s2b = ["X"];
  const line5s2c = ["C"];
  const line5s2d = ["V"];
  const line5s2e = ["B"];
  const line5s2f = ["N"];
  const line5s2g = ["M"];
  const line5s2h = [","];
  const line5s2i = ["."];
  const line5s2j = ["/"];
  const line5s3a = [1];
  const line5s3b = [2];
  const line5s3c = [3];
  const line6s1a = ["Ctrl"];
  const line6s1b = [""];
  const line6s1c = ["alt"];
  const line6s2 = [""];
  const line6s3a = ["alt"];
  const line6s3b = ["Ctrl"];
  const line6s3c = [""];
  const line6s4a = [""];
  const line6s4b = [""];
  const line6s5 = ["0"];
  const line6s6 = ["."];

  useEffect(() => {
    const handlekeyPress = (): void => {
      let button = document.querySelectorAll<HTMLButtonElement>(".button");
      let text = document.querySelector<HTMLDivElement>(".rtex");
      window.addEventListener("keydown", (e) => {
        button.forEach((btn) => {
          e.preventDefault();
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.backgroundColor = "#f56200";
            btn.style.color = "white";
            btn.style.border = "2px solid #f78a40";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let button1 = document.querySelectorAll<HTMLButtonElement>(".button1");
      window.addEventListener("keydown", (e) => {
        button1.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.backgroundColor = "#f56200";
            btn.style.color = "white";
            btn.style.border = "2px solid #f78a40";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let button2 = document.querySelectorAll<HTMLButtonElement>(".button2");
      window.addEventListener("keydown", (e) => {
        button2.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.backgroundColor = "#f56200";
            btn.style.color = "white";
            btn.style.border = "2px solid #f78a40";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let button3 = document.querySelectorAll<HTMLButtonElement>(".button3");
      window.addEventListener("keydown", (e) => {
        button3.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.backgroundColor = "#f56200";
            btn.style.color = "white";
            btn.style.border = "2px solid #f78a40";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let button4 = document.querySelectorAll<HTMLButtonElement>(".button4");
      window.addEventListener("keydown", (e) => {
        button4.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.backgroundColor = "#f56200";
            btn.style.color = "white";
            btn.style.border = "2px solid #f78a40";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let button5 = document.querySelectorAll<HTMLButtonElement>(".button5");
      window.addEventListener("keydown", (e) => {
        button5.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.backgroundColor = "#f56200";
            btn.style.color = "white";
            btn.style.border = "2px solid #f78a40";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let button6 = document.querySelectorAll<HTMLButtonElement>(".button6");
      window.addEventListener("keydown", (e) => {
        button6.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.backgroundColor = "#f56200";
            btn.style.color = "white";
            btn.style.border = "2px solid #f78a40";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let button7 = document.querySelectorAll<HTMLButtonElement>(".button7");
      window.addEventListener("keydown", (e) => {
        button7.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.backgroundColor = "#f56200";
            btn.style.color = "white";
            btn.style.border = "2px solid #f78a40";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let button8 = document.querySelectorAll<HTMLButtonElement>(".button8");
      window.addEventListener("keydown", (e) => {
        button8.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.backgroundColor = "#f56200";
            btn.style.color = "white";
            btn.style.border = "2px solid #f78a40";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let button9 = document.querySelectorAll<HTMLButtonElement>(".button9");
      window.addEventListener("keydown", (e) => {
        button9.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.backgroundColor = "#f56200";
            btn.style.color = "white";
            btn.style.border = "2px solid #f78a40";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let button10 = document.querySelectorAll<HTMLButtonElement>(".button10");
      window.addEventListener("keydown", (e) => {
        button10.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.backgroundColor = "#f56200";
            btn.style.color = "white";
            btn.style.border = "2px solid #f78a40";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let button11 = document.querySelectorAll<HTMLButtonElement>(".button11");
      window.addEventListener("keydown", (e) => {
        button11.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.backgroundColor = "#f56200";
            btn.style.color = "white";
            btn.style.border = "2px solid #f78a40";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let button12 = document.querySelectorAll<HTMLButtonElement>(".button12");
      window.addEventListener("keydown", (e) => {
        button12.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.backgroundColor = "#f56200";
            btn.style.color = "white";
            btn.style.border = "2px solid #f78a40";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let button13 = document.querySelectorAll<HTMLButtonElement>(".button13");
      window.addEventListener("keydown", (e) => {
        button13.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.backgroundColor = "#f56200";
            btn.style.color = "white";
            btn.style.border = "2px solid #f78a40";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });
    };
    window.addEventListener("keydown", handlekeyPress);
    return () => {
      window.removeEventListener("keydown", handlekeyPress);
    };
  }, []);

  return (
    <>
      <div className="container" id="tex">
        <div className="rtex"></div>
      </div>
      <div className="container1">
        {line1a.map((btn) => (
          <div className="button row1" data-key="ESCAPE">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1b.map((btn) => (
          <div className="button row1" data-key="F1">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1c.map((btn) => (
          <div className="button row1" data-key="F2">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1d.map((btn) => (
          <div className="button row1" data-key="F3">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1e.map((btn) => (
          <div className="button row1" data-key="F4">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1f.map((btn) => (
          <div className="button row1" data-key="F5">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1g.map((btn) => (
          <div className="button row1" data-key="F6">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1h.map((btn) => (
          <div className="button row1" data-key="F7">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1i.map((btn) => (
          <div className="button row1" data-key="F8">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1j.map((btn) => (
          <div className="button row1" data-key="F9">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1k.map((btn) => (
          <div className="button row1" data-key="F10">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1l.map((btn) => (
          <div className="button row1" data-key="F11">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1m.map((btn) => (
          <div className="button row1" data-key="F12">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1n.map((btn) => (
          <div className="button row1" data-key="PRINTSCREEN">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1o.map((btn) => (
          <div className="button row1" data-key="DELETE">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1p.map((btn) => (
          <div className="button row1" data-key="HOME">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1q.map((btn) => (
          <div className="button row1" data-key="END">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1r.map((btn) => (
          <div className="button row1" data-key="PAGEUP">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1s.map((btn) => (
          <div className="button row1" data-key="PAGEDOWN">
            {" "}
            {btn}{" "}
          </div>
        ))}
      </div>
      <div className="container2">
        {line2s1.map((btn) => (
          <div className="button1 row2" data-key="BACKQUOTE">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line2s2a.map((btn) => (
          <div className="button2 row2" data-key="DIGIT1">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line2s2b.map((btn) => (
          <div className="button2 row2" data-key="DIGIT2">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line2s2c.map((btn) => (
          <div className="button2 row2" data-key="DIGIT3">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line2s2d.map((btn) => (
          <div className="button2 row2" data-key="DIGIT4">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line2s2e.map((btn) => (
          <div className="button2 row2" data-key="DIGIT5">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line2s2f.map((btn) => (
          <div className="button2 row2" data-key="DIGIT6">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line2s2g.map((btn) => (
          <div className="button2 row2" data-key="DIGIT7">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line2s2h.map((btn) => (
          <div className="button2 row2" data-key="DIGIT8">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line2s2i.map((btn) => (
          <div className="button2 row2" data-key="DIGIT9">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line2s2j.map((btn) => (
          <div className="button2 row2" data-key="DIGIT0">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line2s2k.map((btn) => (
          <div className="button2 row2" data-key="MINUS">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line2s2l.map((btn) => (
          <div className="button2 row2" data-key="EQUAL">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line2s3.map((btn) => (
          <div className="button3 row2" data-key="BACKSPACE">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line2s5.map((btn) => (
          <div className="button13 row2" data-key="NUMLOCK">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line2s4a.map((btn) => (
          <div className="button2 row2" data-key="NUMPADDIVIDE">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line2s4b.map((btn) => (
          <div className="button2 row2" data-key="NUMPADMULTIPLY">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line2s4c.map((btn) => (
          <div className="button2 row2" data-key="NUMPADSUBTRACT">
            {" "}
            {btn}{" "}
          </div>
        ))}
      </div>
      <div className="container3">
        {line3s1.map((btn) => (
          <div className="button4 row3" data-key="TAB">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line3s2a.map((btn) => (
          <div className="button2 row3" data-key="KEYQ">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line3s2b.map((btn) => (
          <div className="button2 row3" data-key="KEYW">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line3s2c.map((btn) => (
          <div className="button2 row3" data-key="KEYE">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line3s2d.map((btn) => (
          <div className="button2 row3" data-key="KEYR">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line3s2e.map((btn) => (
          <div className="button2 row3" data-key="KEYT">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line3s2f.map((btn) => (
          <div className="button2 row3" data-key="KEYY">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line3s2g.map((btn) => (
          <div className="button2 row3" data-key="KEYU">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line3s2h.map((btn) => (
          <div className="button2 row3" data-key="KEYI">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line3s2i.map((btn) => (
          <div className="button2 row3" data-key="KEYO">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line3s2j.map((btn) => (
          <div className="button2 row3" data-key="KEYP">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line3s2k.map((btn) => (
          <div className="button2 row3" data-key="BRACKETLEFT">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line3s2l.map((btn) => (
          <div className="button2 row3" data-key="BRACKETRIGHT">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line3s3.map((btn) => (
          <div className="button4 row3" data-key="BACKSLASH">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line3s4a.map((btn) => (
          <div className="button2 row3" data-key="NUMPAD7">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line3s4b.map((btn) => (
          <div className="button2 row3" data-key="NUMPAD8">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line3s4c.map((btn) => (
          <div className="button2 row3" data-key="NUMPAD9">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line3s5.map((btn) => (
          <div className="button7 row3" data-key="NUMPADADD">
            {" "}
            {btn}{" "}
          </div>
        ))}
      </div>
      <div className="container4">
        {line4s1.map((btn) => (
          <div className="button5 row4" data-key="CAPSLOCK">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line4s2a.map((btn) => (
          <div className="button2 row4" data-key="KEYA">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line4s2b.map((btn) => (
          <div className="button2 row4" data-key="KEYS">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line4s2c.map((btn) => (
          <div className="button2 row4" data-key="KEYD">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line4s2d.map((btn) => (
          <div className="button2 row4" data-key="KEYF">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line4s2e.map((btn) => (
          <div className="button2 row4" data-key="KEYG">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line4s2f.map((btn) => (
          <div className="button2 row4" data-key="KEYH">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line4s2g.map((btn) => (
          <div className="button2 row4" data-key="KEYJ">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line4s2h.map((btn) => (
          <div className="button2 row4" data-key="KEYK">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line4s2i.map((btn) => (
          <div className="button2 row4" data-key="KEYL">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line4s2j.map((btn) => (
          <div className="button2 row4" data-key="SEMICOLON">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line4s2k.map((btn) => (
          <div className="button2 row4" data-key="QUOTE">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line4s3.map((btn) => (
          <div className="button6 row4" data-key="ENTER">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line4s4a.map((btn) => (
          <div className="button2 row4" data-key="NUMPAD4">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line4s4b.map((btn) => (
          <div className="button2 row4" data-key="NUMPAD5">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line4s4c.map((btn) => (
          <div className="button2 row4" data-key="NUMPAD6">
            {" "}
            {btn}{" "}
          </div>
        ))}
      </div>
      <div className="container5">
        {line5s1.map((btn) => (
          <div className="button8 row5" data-key="SHIFTLEFT">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line5s2a.map((btn) => (
          <div className="button2 row5" data-key="KEYZ">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line5s2b.map((btn) => (
          <div className="button2 row5" data-key="KEYX">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line5s2c.map((btn) => (
          <div className="button2 row5" data-key="KEYC">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line5s2d.map((btn) => (
          <div className="button2 row5" data-key="KEYV">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line5s2e.map((btn) => (
          <div className="button2 row5" data-key="KEYB">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line5s2f.map((btn) => (
          <div className="button2 row5" data-key="KEYN">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line5s2g.map((btn) => (
          <div className="button2 row5" data-key="KEYM">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line5s2h.map((btn) => (
          <div className="button2 row5" data-key="COMMA">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line5s2i.map((btn) => (
          <div className="button2 row5" data-key="PERIOD">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line5s2j.map((btn) => (
          <div className="button2 row5" data-key="SLASH">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line5s1.map((btn) => (
          <div className="button9 row5" data-key="SHIFTRIGHT">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line5s3a.map((btn) => (
          <div className="button2 row5" data-key="NUMPAD1">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line5s3b.map((btn) => (
          <div className="button2 row5" data-key="NUMPAD2">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line5s3c.map((btn) => (
          <div className="button2 row5" data-key="NUMPAD3">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line4s3.map((btn) => (
          <div className="button7 row5" data-key="NUMPADENTER">
            {" "}
            {btn}{" "}
          </div>
        ))}
      </div>
      <div className="container6">
        {line6s1a.map((btn) => (
          <div className="button2 row6" data-key="CONTROLLEFT">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line6s1b.map((btn) => (
          <div className="button2 row6" data-key="METALEFT">
            {" "}
            <WindowsFilled />
            {btn}{" "}
          </div>
        ))}
        {line6s1c.map((btn) => (
          <div className="button2 row6" data-key="ALTLEFT">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line6s2.map((btn) => (
          <div className="button10 row6" data-key="SPACE">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line6s3a.map((btn) => (
          <div className="button2 row6" data-key="ALTRIGHT">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line6s3b.map((btn) => (
          <div className="button2 row6" data-key="CONTROLRIGHT">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line6s3c.map((btn) => (
          <div className="button2 row6" data-key="ARROWLEFT">
            <ArrowLeftOutlined /> {btn}{" "}
          </div>
        ))}
        {line6s4a.map((btn) => (
          <div className="button2 row6" data-key="ARROWUP">
            {" "}
            <ArrowUpOutlined />
            {btn}{" "}
          </div>
        ))}
        {line6s4b.map((btn) => (
          <div className="button2 row6" data-key="ARROWRIGHT">
            <ArrowRightOutlined />
            {btn}{" "}
          </div>
        ))}
        {line6s5.map((btn) => (
          <div className="button12 row6" data-key="NUMPAD0">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line6s6.map((btn) => (
          <div className="button2 row6" data-key="NUMPADDECIMAL">
            {" "}
            {btn}{" "}
          </div>
        ))}
      </div>
      <div className="container7">
        {line6s2.map((btn) => (
          <div className="button2 row7" data-key="ARROWDOWN">
            <ArrowDownOutlined /> {btn}{" "}
          </div>
        ))}
      </div>
    </>
  );
}