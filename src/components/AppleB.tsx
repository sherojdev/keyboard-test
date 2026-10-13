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
      let abutton = document.querySelectorAll<HTMLButtonElement>(".abutton");
      let text = document.querySelector<HTMLDivElement>(".rtexx");
      window.addEventListener("keydown", (e) => {
        abutton.forEach((btn) => {
          e.preventDefault();
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.backgroundColor = "#1e88e5";
            btn.style.color = "white";
            btn.style.border = "2px solid #0b0860";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let abutton1 = document.querySelectorAll<HTMLButtonElement>(".abutton1");
      window.addEventListener("keydown", (e) => {
        abutton1.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.backgroundColor = "#1e88e5";
            btn.style.color = "white";
            btn.style.border = "2px solid #0b0860";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let abutton2 = document.querySelectorAll<HTMLButtonElement>(".abutton2");
      window.addEventListener("keydown", (e) => {
        abutton2.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.backgroundColor = "#1e88e5";
            btn.style.color = "white";
            btn.style.border = "2px solid #0b0860";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let abutton3 = document.querySelectorAll<HTMLButtonElement>(".abutton3");
      window.addEventListener("keydown", (e) => {
        abutton3.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.backgroundColor = "#1e88e5";
            btn.style.color = "white";
            btn.style.border = "2px solid #0b0860";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let abutton4 = document.querySelectorAll<HTMLButtonElement>(".abutton4");
      window.addEventListener("keydown", (e) => {
        abutton4.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.backgroundColor = "#1e88e5";
            btn.style.color = "white";
            btn.style.border = "2px solid #0b0860";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let abutton5 = document.querySelectorAll<HTMLButtonElement>(".abutton5");
      window.addEventListener("keydown", (e) => {
        abutton5.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.backgroundColor = "#1e88e5";
            btn.style.color = "white";
            btn.style.border = "2px solid #0b0860";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let abutton6 = document.querySelectorAll<HTMLButtonElement>(".abutton6");
      window.addEventListener("keydown", (e) => {
        abutton6.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.backgroundColor = "#1e88e5";
            btn.style.color = "white";
            btn.style.border = "2px solid #0b0860";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let abutton7 = document.querySelectorAll<HTMLButtonElement>(".abutton7");
      window.addEventListener("keydown", (e) => {
        abutton7.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.backgroundColor = "#1e88e5";
            btn.style.color = "white";
            btn.style.border = "2px solid #0b0860";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let abutton8 = document.querySelectorAll<HTMLButtonElement>(".abutton8");
      window.addEventListener("keydown", (e) => {
        abutton8.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.backgroundColor = "#1e88e5";
            btn.style.color = "white";
            btn.style.border = "2px solid #0b0860";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let abutton9 = document.querySelectorAll<HTMLButtonElement>(".abutton9");
      window.addEventListener("keydown", (e) => {
        abutton9.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.backgroundColor = "#1e88e5";
            btn.style.color = "white";
            btn.style.border = "2px solid #0b0860";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let abutton10 =
        document.querySelectorAll<HTMLButtonElement>(".abutton10");
      window.addEventListener("keydown", (e) => {
        abutton10.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.backgroundColor = "#1e88e5";
            btn.style.color = "white";
            btn.style.border = "2px solid #0b0860";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let abutton11 =
        document.querySelectorAll<HTMLButtonElement>(".abutton11");
      window.addEventListener("keydown", (e) => {
        abutton11.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.backgroundColor = "#1e88e5";
            btn.style.color = "white";
            btn.style.border = "2px solid #0b0860";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let abutton12 =
        document.querySelectorAll<HTMLButtonElement>(".abutton12");
      window.addEventListener("keydown", (e) => {
        abutton12.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.backgroundColor = "#1e88e5";
            btn.style.color = "white";
            btn.style.border = "2px solid #0b0860";
            if (text) {
              text.style.visibility = "visible";
              text.innerText = e.code;
            }
          }
        });
      });

      let abutton13 =
        document.querySelectorAll<HTMLButtonElement>(".abutton13");
      window.addEventListener("keydown", (e) => {
        abutton13.forEach((btn) => {
          if (e.code.toUpperCase() === btn.getAttribute("data-key")) {
            btn.style.backgroundColor = "#1e88e5";
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
      <div className="container" id="texx">
        <div className="rtexx"></div>
      </div>
      <div className="containerr1">
        {line1a.map((btn) => (
          <div className="abutton roww1" data-key="ESCAPE">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1b.map((btn) => (
          <div className="abutton roww1" data-key="F1">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1c.map((btn) => (
          <div className="abutton roww1" data-key="F2">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1d.map((btn) => (
          <div className="abutton roww1" data-key="F3">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1e.map((btn) => (
          <div className="abutton roww1" data-key="F4">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1f.map((btn) => (
          <div className="abutton roww1" data-key="F5">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1g.map((btn) => (
          <div className="abutton roww1" data-key="F6">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1h.map((btn) => (
          <div className="abutton roww1" data-key="F7">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1i.map((btn) => (
          <div className="abutton roww1" data-key="F8">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1j.map((btn) => (
          <div className="abutton roww1" data-key="F9">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1k.map((btn) => (
          <div className="abutton roww1" data-key="F10">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1l.map((btn) => (
          <div className="abutton roww1" data-key="F11">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1m.map((btn) => (
          <div className="abutton roww1" data-key="F12">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line1n.map((btn) => (
          <div className="abutton roww1" data-key="">
            {" "}
            <PoweroffOutlined />
            {btn}{" "}
          </div>
        ))}
      </div>
      <div className="containerr2">
        {line2s1.map((btn) => (
          <div className="abutton1 roww2" data-key="BACKQUOTE">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line2s2a.map((btn) => (
          <div className="abutton2 roww2" data-key="DIGIT1">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line2s2b.map((btn) => (
          <div className="abutton2 roww2" data-key="DIGIT2">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line2s2c.map((btn) => (
          <div className="abutton2 roww2" data-key="DIGIT3">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line2s2d.map((btn) => (
          <div className="abutton2 roww2" data-key="DIGIT4">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line2s2e.map((btn) => (
          <div className="abutton2 roww2" data-key="DIGIT5">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line2s2f.map((btn) => (
          <div className="abutton2 roww2" data-key="DIGIT6">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line2s2g.map((btn) => (
          <div className="abutton2 roww2" data-key="DIGIT7">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line2s2h.map((btn) => (
          <div className="abutton2 roww2" data-key="DIGIT8">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line2s2i.map((btn) => (
          <div className="abutton2 roww2" data-key="DIGIT9">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line2s2j.map((btn) => (
          <div className="abutton2 roww2" data-key="DIGIT0">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line2s2k.map((btn) => (
          <div className="abutton2 roww2" data-key="MINUS">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line2s2l.map((btn) => (
          <div className="abutton2 roww2" data-key="EQUAL">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line2s3.map((btn) => (
          <div className="abutton3 roww2" data-key="DELETE">
            {" "}
            {btn}{" "}
          </div>
        ))}
      </div>
      <div className="containerr3">
        {line3s1.map((btn) => (
          <div className="abutton4 roww3" data-key="TAB">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line3s2a.map((btn) => (
          <div className="abutton2 roww3" data-key="KEYQ">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line3s2b.map((btn) => (
          <div className="abutton2 roww3" data-key="KEYW">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line3s2c.map((btn) => (
          <div className="abutton2 roww3" data-key="KEYE">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line3s2d.map((btn) => (
          <div className="abutton2 roww3" data-key="KEYR">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line3s2e.map((btn) => (
          <div className="abutton2 roww3" data-key="KEYT">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line3s2f.map((btn) => (
          <div className="abutton2 roww3" data-key="KEYY">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line3s2g.map((btn) => (
          <div className="abutton2 roww3" data-key="KEYU">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line3s2h.map((btn) => (
          <div className="abutton2 roww3" data-key="KEYI">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line3s2i.map((btn) => (
          <div className="abutton2 roww3" data-key="KEYO">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line3s2j.map((btn) => (
          <div className="abutton2 roww3" data-key="KEYP">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line3s2k.map((btn) => (
          <div className="abutton2 roww3" data-key="BRACKETLEFT">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line3s2l.map((btn) => (
          <div className="abutton2 roww3" data-key="BRACKETRIGHT">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line3s3.map((btn) => (
          <div className="abutton4 roww3" data-key="BACKSLASH">
            {" "}
            {btn}{" "}
          </div>
        ))}
      </div>
      <div className="containerr4">
        {line4s1.map((btn) => (
          <div className="abutton5 roww4" data-key="CAPSLOCK">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line4s2a.map((btn) => (
          <div className="abutton2 roww4" data-key="KEYA">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line4s2b.map((btn) => (
          <div className="abutton2 roww4" data-key="KEYS">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line4s2c.map((btn) => (
          <div className="abutton2 roww4" data-key="KEYD">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line4s2d.map((btn) => (
          <div className="abutton2 roww4" data-key="KEYF">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line4s2e.map((btn) => (
          <div className="abutton2 roww4" data-key="KEYG">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line4s2f.map((btn) => (
          <div className="abutton2 roww4" data-key="KEYH">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line4s2g.map((btn) => (
          <div className="abutton2 roww4" data-key="KEYJ">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line4s2h.map((btn) => (
          <div className="abutton2 roww4" data-key="KEYK">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line4s2i.map((btn) => (
          <div className="abutton2 roww4" data-key="KEYL">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line4s2j.map((btn) => (
          <div className="abutton2 roww4" data-key="SEMICOLON">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line4s2k.map((btn) => (
          <div className="abutton2 roww4" data-key="QUOTE">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line4s3.map((btn) => (
          <div className="abutton6 roww4" data-key="ENTER">
            {" "}
            {btn}{" "}
          </div>
        ))}
      </div>
      <div className="containerr5">
        {line5s1.map((btn) => (
          <div className="abutton8 roww5" data-key="SHIFTLEFT">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line5s2a.map((btn) => (
          <div className="abutton2 roww5" data-key="KEYZ">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line5s2b.map((btn) => (
          <div className="abutton2 roww5" data-key="KEYX">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line5s2c.map((btn) => (
          <div className="abutton2 roww5" data-key="KEYC">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line5s2d.map((btn) => (
          <div className="abutton2 roww5" data-key="KEYV">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line5s2e.map((btn) => (
          <div className="abutton2 roww5" data-key="KEYB">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line5s2f.map((btn) => (
          <div className="abutton2 roww5" data-key="KEYN">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line5s2g.map((btn) => (
          <div className="abutton2 roww5" data-key="KEYM">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line5s2h.map((btn) => (
          <div className="abutton2 roww5" data-key="COMMA">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line5s2i.map((btn) => (
          <div className="abutton2 roww5" data-key="PERIOD">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line5s2j.map((btn) => (
          <div className="abutton2 roww5" data-key="SLASH">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line5s1.map((btn) => (
          <div className="abutton9 roww5" data-key="SHIFTRIGHT">
            {" "}
            {btn}{" "}
          </div>
        ))}
      </div>
      <div className="containerr6">
        {line6s1a.map((btn) => (
          <div className="abutton2 roww6" data-key="">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line6s1b.map((btn) => (
          <div className="abutton4 roww6" data-key="CONTROLLEFT">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line6s1c.map((btn) => (
          <div className="abutton4 roww6" data-key="ALTLEFT">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line6s1d.map((btn) => (
          <div className="abutton4 roww6" data-key="METALEFT">
            {" "}
            <MacCommandFilled />
            {btn}{" "}
          </div>
        ))}
        {line6s2.map((btn) => (
          <div className="abutton10 roww6" data-key="SPACE">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line6s3a.map((btn) => (
          <div className="abutton4 roww6" data-key="METARIGHT">
            <MacCommandFilled />
            {btn}{" "}
          </div>
        ))}
        {line6s3b.map((btn) => (
          <div className="abutton4 roww6" data-key="ALTRIGHT">
            {" "}
            {btn}{" "}
          </div>
        ))}
        {line6s3c.map((btn) => (
          <div className="abutton2 roww6" data-key="ARROWLEFT">
            <ArrowLeftOutlined /> {btn}{" "}
          </div>
        ))}
        {line6s4a.map((btn) => (
          <div className="abutton2 roww6" data-key="ARROWUP">
            {" "}
            <ArrowUpOutlined />
            {btn}{" "}
          </div>
        ))}
        {line6s4b.map((btn) => (
          <div className="abutton2 roww6" data-key="ARROWRIGHT">
            <ArrowRightOutlined />
            {btn}{" "}
          </div>
        ))}
      </div>
      <div className="containerr7">
        {line6s2.map((btn) => (
          <div className="abutton2 roww7" data-key="ARROWDOWN">
            <ArrowDownOutlined /> {btn}{" "}
          </div>
        ))}
      </div>
    </>
  );
}
