import "./AppleB.css";
import { useEffect } from "react";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  PoweroffOutlined,
  MacCommandFilled,
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
  const line1n = [""];
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
  const line2s3 = ["delete"];
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
  const line4s3 = ["return"];
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
  const line6s1a = ["fn"];
  const line6s1b = ["control"];
  const line6s1c = ["option"];
  const line6s1d = [""];
  const line6s2 = [""];
  const line6s3a = [""];
  const line6s3b = ["option"];
  const line6s3c = [""];
  const line6s4a = [""];
  const line6s4b = [""];

  useEffect(() => {
    const handlekeyPress = (): void => {
      let mbutton = document.querySelectorAll<HTMLButtonElement>(".mac-button");
      let text = document.querySelector<HTMLDivElement>(".return-text-mac");
      window.addEventListener("keydown", (e) => {
        mbutton.forEach((btn) => {
          e.preventDefault();
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.background = "linear-gradient(120deg, #06B6D4, #7C3AED)";
            btn.style.color = "white";
            btn.style.border = "2px solid #0b0860";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let mbutton1 = document.querySelectorAll<HTMLButtonElement>(".mac-button1");
      window.addEventListener("keydown", (e) => {
        mbutton1.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.background = "linear-gradient(120deg, #06B6D4, #7C3AED)";
            btn.style.color = "white";
            btn.style.border = "2px solid #0b0860";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let mbutton2 = document.querySelectorAll<HTMLButtonElement>(".mac-button2");
      window.addEventListener("keydown", (e) => {
        mbutton2.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.background = "linear-gradient(120deg, #06B6D4, #7C3AED)";
            btn.style.color = "white";
            btn.style.border = "2px solid #0b0860";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let mbutton3 = document.querySelectorAll<HTMLButtonElement>(".mac-button3");
      window.addEventListener("keydown", (e) => {
        mbutton3.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.background = "linear-gradient(120deg, #06B6D4, #7C3AED)";
            btn.style.color = "white";
            btn.style.border = "2px solid #0b0860";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let mbutton4 = document.querySelectorAll<HTMLButtonElement>(".mac-button4");
      window.addEventListener("keydown", (e) => {
        mbutton4.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.background = "linear-gradient(120deg, #06B6D4, #7C3AED)";
            btn.style.color = "white";
            btn.style.border = "2px solid #0b0860";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let mbutton5 = document.querySelectorAll<HTMLButtonElement>(".mac-button5");
      window.addEventListener("keydown", (e) => {
        mbutton5.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
           btn.style.background = "linear-gradient(120deg, #06B6D4, #7C3AED)";
            btn.style.color = "white";
            btn.style.border = "2px solid #0b0860";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let mbutton6 = document.querySelectorAll<HTMLButtonElement>(".mac-button6");
      window.addEventListener("keydown", (e) => {
        mbutton6.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.background = "linear-gradient(120deg, #06B6D4, #7C3AED)";
            btn.style.color = "white";
            btn.style.border = "2px solid #0b0860";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let mbutton7 = document.querySelectorAll<HTMLButtonElement>(".mac-button7");
      window.addEventListener("keydown", (e) => {
        mbutton7.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.background = "linear-gradient(120deg, #06B6D4, #7C3AED)";
            btn.style.color = "white";
            btn.style.border = "2px solid #0b0860";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let mbutton8 = document.querySelectorAll<HTMLButtonElement>(".mac-button8");
      window.addEventListener("keydown", (e) => {
        mbutton8.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.background = "linear-gradient(120deg, #06B6D4, #7C3AED)";
            btn.style.color = "white";
            btn.style.border = "2px solid #0b0860";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let mbutton9 = document.querySelectorAll<HTMLButtonElement>(".mac-button9");
      window.addEventListener("keydown", (e) => {
        mbutton9.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.background = "linear-gradient(120deg, #06B6D4, #7C3AED)";
            btn.style.color = "white";
            btn.style.border = "2px solid #0b0860";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let mbutton10 = document.querySelectorAll<HTMLButtonElement>(".mac-button10");
      window.addEventListener("keydown", (e) => {
        mbutton10.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.background = "linear-gradient(120deg, #06B6D4, #7C3AED)";
            btn.style.color = "white";
            btn.style.border = "2px solid #0b0860";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let mbutton11 =
        document.querySelectorAll<HTMLButtonElement>(".mac-button11");
      window.addEventListener("keydown", (e) => {
        mbutton11.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.background = "linear-gradient(120deg, #06B6D4, #7C3AED)";
            btn.style.color = "white";
            btn.style.border = "2px solid #0b0860";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let mbutton12 =
        document.querySelectorAll<HTMLButtonElement>(".mac-button12");
      window.addEventListener("keydown", (e) => {
        mbutton12.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.background = "linear-gradient(120deg, #06B6D4, #7C3AED)";
            btn.style.color = "white";
            btn.style.border = "2px solid #0b0860";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let mbutton13 =
        document.querySelectorAll<HTMLButtonElement>(".mac-button13");
      window.addEventListener("keydown", (e) => {
        mbutton13.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.background = "linear-gradient(120deg, #06B6D4, #7C3AED)";
            btn.style.color = "white";
            btn.style.border = "2px solid #0b0860";
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
      <div className="container mb-8 rounded-xl mx-32" id="display-box-mac">
        <div className="return-text-mac"></div>
      </div>
      <div className="container1-mac">
        {line1a.map((btn) => (
          <div className="mac-button row1-mac" data-key="ESCAPE">
            {btn}
          </div>
        ))}
        {line1b.map((btn) => (
          <div className="mac-button row1-mac" data-key="F1">
            {btn}
          </div>
        ))}
        {line1c.map((btn) => (
          <div className="mac-button row1-mac" data-key="F2">
            {btn}
          </div>
        ))}
        {line1d.map((btn) => (
          <div className="mac-button row1-mac" data-key="F3">
            {btn}
          </div>
        ))}
        {line1e.map((btn) => (
          <div className="mac-button row1-mac" data-key="F4">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1f.map((btn) => (
          <div className="mac-button row1-mac" data-key="F5">
            {btn}
          </div>
        ))}
        {line1g.map((btn) => (
          <div className="mac-button row1-mac" data-key="F6">
            {btn}
          </div>
        ))}
        {line1h.map((btn) => (
          <div className="mac-button row1-mac" data-key="F7">
            
            {btn}
          </div>
        ))}
        {line1i.map((btn) => (
          <div className="mac-button row1-mac" data-key="F8">
            
            {btn}
          </div>
        ))}
        {line1j.map((btn) => (
          <div className="mac-button row1-mac" data-key="F9">
            
            {btn}
          </div>
        ))}
        {line1k.map((btn) => (
          <div className="mac-button row1-mac" data-key="F10">
            
            {btn}
          </div>
        ))}
        {line1l.map((btn) => (
          <div className="mac-button row1-mac" data-key="F11">
            
            {btn}
          </div>
        ))}
        {line1m.map((btn) => (
          <div className="mac-button row1-mac" data-key="F12">
            
            {btn}
          </div>
        ))}
        {line1n.map((btn) => (
          <div className="mac-button row1-mac" data-key="">
            
            <PoweroffOutlined />
            {btn}
          </div>
        ))}
      </div>
      <div className="container2-mac">
        {line2s1.map((btn) => (
          <div className="mac-button1 row1-mac" data-key="BACKQUOTE">
            
            {btn}
          </div>
        ))}
        {line2s2a.map((btn) => (
          <div className="mac-button2  row1-mac" data-key="DIGIT1">
            
            {btn}
          </div>
        ))}
        {line2s2b.map((btn) => (
          <div className="mac-button2  row1-mac" data-key="DIGIT2">
            
            {btn}
          </div>
        ))}
        {line2s2c.map((btn) => (
          <div className="mac-button2  row1-mac" data-key="DIGIT3">
            
            {btn}
          </div>
        ))}
        {line2s2d.map((btn) => (
          <div className="mac-button2  row1-mac" data-key="DIGIT4">
            
            {btn}
          </div>
        ))}
        {line2s2e.map((btn) => (
          <div className="mac-button2  row1-mac" data-key="DIGIT5">
          
            {btn}
          </div>
        ))}
        {line2s2f.map((btn) => (
          <div className="mac-button2  row1-mac" data-key="DIGIT6">
            
            {btn}
          </div>
        ))}
        {line2s2g.map((btn) => (
          <div className="mac-button2  row1-mac" data-key="DIGIT7">
            
            {btn}
          </div>
        ))}
        {line2s2h.map((btn) => (
          <div className="mac-button2  row1-mac" data-key="DIGIT8">
            
            {btn}
          </div>
        ))}
        {line2s2i.map((btn) => (
          <div className="mac-button2  row1-mac" data-key="DIGIT9">
            
            {btn}
          </div>
        ))}
        {line2s2j.map((btn) => (
          <div className="mac-button2  row1-mac" data-key="DIGIT0">
            
            {btn}
          </div>
        ))}
        {line2s2k.map((btn) => (
          <div className="mac-button2  row1-mac" data-key="MINUS">
            
            {btn}
          </div>
        ))}
        {line2s2l.map((btn) => (
          <div className="mac-button2  row1-mac" data-key="EQUAL">
            
            {btn}
          </div>
        ))}
        {line2s3.map((btn) => (
          <div className="mac-button3 row1-mac" data-key="DELETE">
            
            {btn}
          </div>
        ))}
      </div>
      <div className="container3-mac">
        {line3s1.map((btn) => (
          <div className="mac-button4 row3-mac" data-key="TAB">
            
            {btn}
          </div>
        ))}
        {line3s2a.map((btn) => (
          <div className="mac-button2  row3-mac" data-key="KEYQ">
            
            {btn}
          </div>
        ))}
        {line3s2b.map((btn) => (
          <div className="mac-button2  row3-mac" data-key="KEYW">
            
            {btn}
          </div>
        ))}
        {line3s2c.map((btn) => (
          <div className="mac-button2  row3-mac" data-key="KEYE">
            
            {btn}
          </div>
        ))}
        {line3s2d.map((btn) => (
          <div className="mac-button2  row3-mac" data-key="KEYR">
            
            {btn}
          </div>
        ))}
        {line3s2e.map((btn) => (
          <div className="mac-button2  row3-mac" data-key="KEYT">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line3s2f.map((btn) => (
          <div className="mac-button2  row3-mac" data-key="KEYY">
            
            {btn}
          </div>
        ))}
        {line3s2g.map((btn) => (
          <div className="mac-button2  row3-mac" data-key="KEYU">
            
            {btn}
          </div>
        ))}
        {line3s2h.map((btn) => (
          <div className="mac-button2  row3-mac" data-key="KEYI">
            
            {btn}
          </div>
        ))}
        {line3s2i.map((btn) => (
          <div className="mac-button2  row3-mac" data-key="KEYO">
            
            {btn}
          </div>
        ))}
        {line3s2j.map((btn) => (
          <div className="mac-button2  row3-mac" data-key="KEYP">
            
            {btn}
          </div>
        ))}
        {line3s2k.map((btn) => (
          <div className="mac-button2  row3-mac" data-key="BRACKETLEFT">
            
            {btn}
          </div>
        ))}
        {line3s2l.map((btn) => (
          <div className="mac-button2  row3-mac" data-key="BRACKETRIGHT">
            
            {btn}
          </div>
        ))}
        {line3s3.map((btn) => (
          <div className="mac-button4 row3-mac" data-key="BACKSLASH">
            
            {btn}
          </div>
        ))}
      </div>
      <div className="container4-mac">
        {line4s1.map((btn) => (
          <div className="mac-button5 row4-mac" data-key="CAPSLOCK">
            
            {btn}
          </div>
        ))}
        {line4s2a.map((btn) => (
          <div className="mac-button2  row4-mac" data-key="KEYA">
            
            {btn}
          </div>
        ))}
        {line4s2b.map((btn) => (
          <div className="mac-button2  row4-mac" data-key="KEYS">
            
            {btn}
          </div>
        ))}
        {line4s2c.map((btn) => (
          <div className="mac-button2  row4-mac" data-key="KEYD">
            
            {btn}
          </div>
        ))}
        {line4s2d.map((btn) => (
          <div className="mac-button2  row4-mac" data-key="KEYF">
            
            {btn}
          </div>
        ))}
        {line4s2e.map((btn) => (
          <div className="mac-button2  row4-mac" data-key="KEYG">
            
            {btn}
          </div>
        ))}
        {line4s2f.map((btn) => (
          <div className="mac-button2  row4-mac" data-key="KEYH">
            
            {btn}
          </div>
        ))}
        {line4s2g.map((btn) => (
          <div className="mac-button2  row4-mac" data-key="KEYJ">
            
            {btn}
          </div>
        ))}
        {line4s2h.map((btn) => (
          <div className="mac-button2  row4-mac" data-key="KEYK">
            
            {btn}
          </div>
        ))}
        {line4s2i.map((btn) => (
          <div className="mac-button2  row4-mac" data-key="KEYL">
            
            {btn}
          </div>
        ))}
        {line4s2j.map((btn) => (
          <div className="mac-button2  row4-mac" data-key="SEMICOLON">
            
            {btn}
          </div>
        ))}
        {line4s2k.map((btn) => (
          <div className="mac-button2  row4-mac" data-key="QUOTE">
            
            {btn}
          </div>
        ))}
        {line4s3.map((btn) => (
          <div className="mac-button6 row4-mac" data-key="ENTER">
            
            {btn}
          </div>
        ))}
      </div>
      <div className="container5-mac">
        {line5s1.map((btn) => (
          <div className="mac-button8 row5-mac" data-key="SHIFTLEFT">
            
            {btn}
          </div>
        ))}
        {line5s2a.map((btn) => (
          <div className="mac-button2  row5-mac" data-key="KEYZ">
            
            {btn}
          </div>
        ))}
        {line5s2b.map((btn) => (
          <div className="mac-button2  row5-mac" data-key="KEYX">
            
            {btn}
          </div>
        ))}
        {line5s2c.map((btn) => (
          <div className="mac-button2  row5-mac" data-key="KEYC">
            
            {btn}
          </div>
        ))}
        {line5s2d.map((btn) => (
          <div className="mac-button2  row5-mac" data-key="KEYV">
            
            {btn}
          </div>
        ))}
        {line5s2e.map((btn) => (
          <div className="mac-button2  row5-mac" data-key="KEYB">
            
            {btn}
          </div>
        ))}
        {line5s2f.map((btn) => (
          <div className="mac-button2  row5-mac" data-key="KEYN">
            
            {btn}
          </div>
        ))}
        {line5s2g.map((btn) => (
          <div className="mac-button2  row5-mac" data-key="KEYM">
            
            {btn}
          </div>
        ))}
        {line5s2h.map((btn) => (
          <div className="mac-button2  row5-mac" data-key="COMMA">
            
            {btn}
          </div>
        ))}
        {line5s2i.map((btn) => (
          <div className="mac-button2  row5-mac" data-key="PERIOD">
            
            {btn}
          </div>
        ))}
        {line5s2j.map((btn) => (
          <div className="mac-button2  row5-mac" data-key="SLASH">
            
            {btn}
          </div>
        ))}
        {line5s1.map((btn) => (
          <div className="mac-button9 row5-mac" data-key="SHIFTRIGHT">
            {btn}
          </div>
        ))}
      </div>
      <div className="container6-mac">
        {line6s1a.map((btn) => (
          <div className="mac-button2 row6-mac" data-key="">
            {btn}
          </div>
        ))}
        {line6s1b.map((btn) => (
          <div className="mac-button4 row6-mac" data-key="CONTROLLEFT">
            {btn}
          </div>
        ))}
        {line6s1c.map((btn) => (
          <div className="mac-button4 row6-mac" data-key="ALTLEFT">
            {btn}
          </div>
        ))}
        {line6s1d.map((btn) => (
          <div className="mac-button4 row6-mac" data-key="METALEFT">
            <MacCommandFilled />
            {btn}
          </div>
        ))}
        {line6s2.map((btn) => (
          <div className="mac-button10 row6-mac" data-key="SPACE">
            {btn}
          </div>
        ))}
        {line6s3a.map((btn) => (
          <div className="mac-button4 row6-mac" data-key="METARIGHT">
            <MacCommandFilled />
            {btn}
          </div>
        ))}
        {line6s3b.map((btn) => (
          <div className="mac-button4 row6-mac" data-key="ALTRIGHT">
            
            {btn}
          </div>
        ))}
        {line6s3c.map((btn) => (
          <div className="mac-button2 row6-mac" data-key="ARROWLEFT">
            <ArrowLeftOutlined /> {btn}{" "}
          </div>
        ))}
        {line6s4a.map((btn) => (
          <div className="mac-button2 row6-mac" data-key="ARROWUP">
            
            <ArrowUpOutlined />
            {btn}
          </div>
        ))}
        {line6s4b.map((btn) => (
          <div className="mac-button2 row6-mac" data-key="ARROWRIGHT">
            <ArrowRightOutlined />
            {btn}
          </div>
        ))}
      </div>
      <div className="container7-mac">
        {line6s2.map((btn) => (
          <div className="mac-button2 row7-mac" data-key="ARROWDOWN">
            <ArrowDownOutlined /> {btn}
          </div>
        ))}
      </div>
    </>
  );
}
