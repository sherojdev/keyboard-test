import {
  WindowsFilled,
  ArrowUpOutlined,
  ArrowDownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

import { useNewStyle } from "../hooks/useStyle";

export default function Buttons() {
  const lever = [["esc"],["F1"],["F2"],["F3"],["F4"],["F5"],["F6"],["F7"],["F8"],["F9"],["F10"],["F11"],["F12"],["prt sc"],["delete"],["home"],["end"],["pgup"],["pgdn"],["`"],[1],[2],[3],[4],[5],[6],[7],[8],[9],[0],["-"],["="],["backspace"],["/"],["*"],["-"],["Num lock"],["tab"],["Q"],["W"],["E"],["R"],["T"],["Y"],["U"],["I"],["O"],["P"],["["],["]"],["\\"],["+"],["capslock"],["A"],["S"],["D"],["F"],["G"],["H"],["J"],["K"],["L"],[";"],["'"],["enter"],["shift"],["Z"],["X"],["C"],["V"],["B"],["N"],["M"],[","],["."],["/"],["Ctrl"],[""],["alt"],["."]];

  useNewStyle() ;
 
  return (
    <>
      <div className="container mb-8 rounded-xl mx-32 " id="display-box">
        <div className="return-text"></div>
      </div>
      <div className="container1">     
        {lever[0].map((btn) => (
          <div className="button  h-[26px] w-[48px] rounded-md bg-[#dcbeee] text-white font-medium border border-solid border-[#47126b] border-b-3 border-b-[rgb(74, 45, 96)] " data-key="ESCAPE">
            {btn}
          </div>
        ))}
        {lever[1].map((btn) => (
          <div className="button  h-[26px] w-[48px] rounded-md bg-[#dcbeee] text-white font-medium border border-solid border-[#47126b] border-b-3 border-b-[rgb(74, 45, 96)] " data-key="F1">
            {btn}
          </div>
        ))}
        {lever[2].map((btn) => (
          <div className="button  h-[26px] w-[48px] rounded-md bg-[#dcbeee] text-white font-medium border border-solid border-[#47126b] border-b-3 border-b-[rgb(74, 45, 96)] " data-key="F2">
            {btn}
          </div>
        ))}
        {lever[3].map((btn) => (
          <div className="button  h-[26px] w-[48px] rounded-md bg-[#dcbeee] text-white font-medium border border-solid border-[#47126b] border-b-3 border-b-[rgb(74, 45, 96)] " data-key="F3">
            {btn}
          </div>
        ))}
        {lever[4].map((btn) => (
          <div className="button  h-[26px] w-[48px] rounded-md bg-[#dcbeee] text-white font-medium border border-solid border-[#47126b] border-b-3 border-b-[rgb(74, 45, 96)] " data-key="F4">
            {btn}
          </div>
        ))}
        {lever[5].map((btn) => (
          <div className="button  h-[26px] w-[48px] rounded-md bg-[#dcbeee] text-white font-medium border border-solid border-[#47126b] border-b-3 border-b-[rgb(74, 45, 96)] " data-key="F5">
            {btn}
          </div>
        ))}
        {lever[6].map((btn) => (
          <div className="button  h-[26px] w-[48px] rounded-md bg-[#dcbeee] text-white font-medium border border-solid border-[#47126b] border-b-3 border-b-[rgb(74, 45, 96)] " data-key="F6">
            {btn}
          </div>
        ))}
        {lever[7].map((btn) => (
          <div className="button  h-[26px] w-[48px] rounded-md bg-[#dcbeee] text-white font-medium border border-solid border-[#47126b] border-b-3 border-b-[rgb(74, 45, 96)] " data-key="F7">
            {btn}
          </div>
        ))}
        {lever[8].map((btn) => (
          <div className="button  h-[26px] w-[48px] rounded-md bg-[#dcbeee] text-white font-medium border border-solid border-[#47126b] border-b-3 border-b-[rgb(74, 45, 96)] " data-key="F8">
            {btn}
          </div>
        ))}
        {lever[9].map((btn) => (
          <div className="button  h-[26px] w-[48px] rounded-md bg-[#dcbeee] text-white font-medium border border-solid border-[#47126b] border-b-3 border-b-[rgb(74, 45, 96)] " data-key="F9">
            {btn}
          </div>
        ))}
        {lever[10].map((btn) => (
          <div className="button  h-[26px] w-[48px] rounded-md bg-[#dcbeee] text-white font-medium border border-solid border-[#47126b] border-b-3 border-b-[rgb(74, 45, 96)] " data-key="F10">
            {btn}
          </div>
        ))}
        {lever[11].map((btn) => (
          <div className="button  h-[26px] w-[48px] rounded-md bg-[#dcbeee] text-white font-medium border border-solid border-[#47126b] border-b-3 border-b-[rgb(74, 45, 96)] " data-key="F11">
            {btn}
          </div>
        ))}
        {lever[12].map((btn) => (
          <div className="button  h-[26px] w-[48px] rounded-md bg-[#dcbeee] text-white font-medium border border-solid border-[#47126b] border-b-3 border-b-[rgb(74, 45, 96)] " data-key="F12">
            {btn}
          </div>
        ))}
        {lever[13].map((btn) => (
          <div className="button  h-[26px] w-[48px] rounded-md bg-[#dcbeee] text-white font-medium border border-solid border-[#47126b] border-b-3 border-b-[rgb(74, 45, 96)] " data-key="PRINTSCREEN">
            {btn}
          </div>
        ))}
        {lever[14].map((btn) => (
          <div className="button  h-[26px] w-[48px] rounded-md bg-[#dcbeee] text-white font-medium border border-solid border-[#47126b] border-b-3 border-b-[rgb(74, 45, 96)] " data-key="DELETE">
            {btn}
          </div>
        ))}
        {lever[15].map((btn) => (
          <div className="button  h-[26px] w-[48px] rounded-md bg-[#dcbeee] text-white font-medium border border-solid border-[#47126b] border-b-3 border-b-[rgb(74, 45, 96)] " data-key="HOME">
            {btn}
          </div>
        ))}
        {lever[16].map((btn) => (
          <div className="button  h-[26px] w-[48px] rounded-md bg-[#dcbeee] text-white font-medium border border-solid border-[#47126b] border-b-3 border-b-[rgb(74, 45, 96)] " data-key="END">
            {btn}
          </div>
        ))}
        {lever[17].map((btn) => (
          <div className="button  h-[26px] w-[48px] rounded-md bg-[#dcbeee] text-white font-medium border border-solid border-[#47126b] border-b-3 border-b-[rgb(74, 45, 96)] " data-key="PAGEUP">
            {btn}
          </div>
        ))}
        {lever[18].map((btn) => ( 
          <div className="button  h-[26px] w-[48px] rounded-md bg-[#dcbeee] text-white font-medium border border-solid border-[#47126b] border-b-3 border-b-[rgb(74, 45, 96)] " data-key="PAGEDOWN">
            {btn}
          </div>
        ))}
      </div>
      <div className="container2">
        {lever[19].map((btn) => (
          <div className="button  h-[48px] w-[35px] rounded-md text-base pt-3 bg-[#c29ae1] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="BACKQUOTE">
            {btn}
          </div>
        ))}
        {lever[20].map((btn) => (
          <div className="button  h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#c29ae1] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="DIGIT1">
            {btn}
          </div>
        ))}
        {lever[21].map((btn) => (
          <div className="button  h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#c29ae1] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="DIGIT2">
            {btn}
          </div>
        ))}
        {lever[22].map((btn) => (
          <div className="button  h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#c29ae1] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="DIGIT3">
            {btn}
          </div>
        ))}
        {lever[23].map((btn) => (
          <div className="button  h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#c29ae1] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="DIGIT4">
            {btn}
          </div>
        ))}
        {lever[24].map((btn) => (
          <div className="button  h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#c29ae1] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="DIGIT5">
            {btn}
          </div>
        ))}
        {lever[25].map((btn) => (
          <div className="button  h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#c29ae1] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="DIGIT6">
            {btn}
          </div>
        ))}
        {lever[26].map((btn) => (
          <div className="button  h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#c29ae1] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="DIGIT7">
            {btn}
          </div>
        ))}
        {lever[27].map((btn) => (
          <div className="button  h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#c29ae1] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="DIGIT8">
            {btn}
          </div>
        ))}
        {lever[28].map((btn) => (
          <div className="button  h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#c29ae1] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="DIGIT9">
            {btn}
          </div>
        ))}
        {lever[29].map((btn) => (
          <div className="button  h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#c29ae1] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="DIGIT0">
            {btn}
          </div>
        ))}
        {lever[30].map((btn) => (
          <div className="button  h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#c29ae1] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="MINUS">
            {btn}
          </div>
        ))}
        {lever[31].map((btn) => (
          <div className="button  h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#c29ae1] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="EQUAL">
            {btn}
          </div>
        ))}
        {lever[32].map((btn) => (
          <div className="button  h-[48px] w-[94px] rounded-md pt-2 text-sm bg-[#c29ae1] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="BACKSPACE">
            {btn}
          </div>
        ))}
        {lever[33].map((btn) => (
          <div className="button  h-[48px] w-[48px] rounded-md text-xs pt-0 bg-[#c29ae1] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="NUMLOCK"> 
            {btn}
          </div>
        ))}
        {lever[34].map((btn) => (
          <div className="button  h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#c29ae1] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="NUMPADDIVIDE">
            {btn}
          </div>
        ))}
        {lever[35].map((btn) => (
          <div className="button  h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#c29ae1] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="NUMPADMULTIPLY">
            {btn}
          </div>
        ))}
        {lever[36].map((btn) => (
          <div className="button  h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#c29ae1] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="NUMPADSUBTRACT">
            {btn}
          </div>
        ))}
      </div>
      <div className="container3">
        {lever[37].map((btn) => (
          <div className="button row3 h-[48px] w-[64px] rounded-md text-base pt-1 bg-[#9d4edd] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="TAB">
            {btn}
          </div>
        ))}
        {lever[38].map((btn) => (
          <div className="button row3 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#9d4edd] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="KEYQ">
            {btn}
          </div>
        ))}
        {lever[39].map((btn) => (
          <div className="button row3 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#9d4edd] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="KEYW">
            {btn}
          </div>
        ))}
        {lever[40].map((btn) => (
          <div className="button row3 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#9d4edd] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="KEYE">
            {btn}
          </div>
        ))}
        {lever[41].map((btn) => (
          <div className="button row3 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#9d4edd] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="KEYR">
            {btn}
          </div>
        ))}
        {lever[42].map((btn) => (
          <div className="button row3 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#9d4edd] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="KEYT">
            {btn}
          </div>
        ))}
        {lever[43].map((btn) => (
          <div className="button row3 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#9d4edd] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="KEYY">
            {btn}
          </div>
        ))}
        {lever[44].map((btn) => (
          <div className="button row3 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#9d4edd] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="KEYU">
            {btn}
          </div>
        ))}
        {lever[45].map((btn) => (
          <div className="button row3 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#9d4edd] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="KEYI">
            {btn}
          </div>
        ))}
        {lever[46].map((btn) => (
          <div className="button row3 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#9d4edd] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="KEYO">
            {btn}
          </div>
        ))}
        {lever[47].map((btn) => (
          <div className="button row3 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#9d4edd] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="KEYP">
            {btn}
          </div>
        ))}
        {lever[48].map((btn) => (
          <div className="button row3 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#9d4edd] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="BRACKETLEFT">
            {btn}
          </div>
        ))}
        {lever[49].map((btn) => (
          <div className="button row3 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#9d4edd] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="BRACKETRIGHT">
            {btn}
          </div>
        ))}
        {lever[50].map((btn) => (
          <div className="button row3 h-[48px] w-[64px] rounded-md text-base pt-1 bg-[#9d4edd] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="BACKSLASH">
            {btn}
          </div>
        ))}
        {lever[26].map((btn) => (
          <div className="button row3 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#9d4edd] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="NUMPAD7">
            {btn}
          </div>
        ))}
        {lever[27].map((btn) => (
          <div className="button row3 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#9d4edd] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="NUMPAD8">
            {btn}
          </div>
        ))}
        {lever[28].map((btn) => (
          <div className="button row3 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#9d4edd] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="NUMPAD9">
            {btn}
          </div>
        ))}
        {lever[51].map((btn) => (
          <div className="button row3 h-[108px] w-[48px] rounded-md text-base pt-9 bg-[#9d4edd] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="NUMPADADD">
            {btn}
          </div>
        ))}
      </div>
      <div className="container4">
        {lever[52].map((btn) => (
          <div className="button row4 h-[48px] w-[92px] rounded-md text-base pt-1 bg-[#5a189a] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="CAPSLOCK">
           {btn}
          </div>
        ))}
        {lever[53].map((btn) => (
          <div className="button row4 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#5a189a] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="KEYA">
            {btn}
          </div>
        ))}
        {lever[54].map((btn) => (
          <div className="button row4 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#5a189a] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="KEYS">
            {btn}
          </div>
        ))}
        {lever[55].map((btn) => (
          <div className="button row4 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#5a189a] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="KEYD">
            {btn}
          </div>
        ))}
        {lever[56].map((btn) => (
          <div className="button row4 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#5a189a] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="KEYF">
            {btn}
          </div>
        ))}
        {lever[57].map((btn) => (
          <div className="button row4 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#5a189a] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="KEYG">
            {btn}
          </div>
        ))}
        {lever[58].map((btn) => (
          <div className="button row4 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#5a189a] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="KEYH">
            {btn}
          </div>
        ))}
        {lever[59].map((btn) => (
          <div className="button row4 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#5a189a] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="KEYJ">
            {btn}
          </div>
        ))}
        {lever[60].map((btn) => (
          <div className="button row4 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#5a189a] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="KEYK">
            {btn}
          </div>
        ))}
        {lever[61].map((btn) => (
          <div className="button row4 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#5a189a] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="KEYL">
            {btn}
          </div>
        ))}
        {lever[62].map((btn) => (
          <div className="button row4 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#5a189a] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="SEMICOLON">
            {btn}
          </div>
        ))}
        {lever[63].map((btn) => (
          <div className="button row4 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#5a189a] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="QUOTE">
            {btn}
          </div>
        ))}
        {lever[64].map((btn) => (
          <div className="button row4 h-[48px] w-[98px] rounded-md text-base pt-1 bg-[#5a189a] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="ENTER">
            {btn}
          </div>
        ))}
        {lever[23].map((btn) => (
          <div className="button row4 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#5a189a] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="NUMPAD4">
            {btn}
          </div>
        ))}
        {lever[24].map((btn) => (
          <div className="button row4 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#5a189a] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="NUMPAD5">
            {btn}
          </div>
        ))}
        {lever[25].map((btn) => (
          <div className="button row4 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#5a189a] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="NUMPAD6">
            {btn}
          </div>
        ))}
      </div>
      <div className="container5">
        {lever[65].map((btn) => (
          <div className="button row5 h-[48px] w-[118px] rounded-md text-base pt-1 bg-[#3c096c] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="SHIFTLEFT">
            {btn}
          </div>
        ))}
        {lever[66].map((btn) => (
          <div className="button row5 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#3c096c] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="KEYZ">
            {btn}
          </div>
        ))}
        {lever[67].map((btn) => (
          <div className="button row5 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#3c096c] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="KEYX">
            {btn}
          </div>
        ))}
        {lever[68].map((btn) => (
          <div className="button row5 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#3c096c] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="KEYC">
            {btn}
          </div>
        ))}
        {lever[69].map((btn) => (
          <div className="button row5 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#3c096c] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="KEYV">
            {btn}
          </div>
        ))}
        {lever[70].map((btn) => (
          <div className="button row5 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#3c096c] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="KEYB">
            {btn}
          </div>
        ))}
        {lever[71].map((btn) => (
          <div className="button row5 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#3c096c] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="KEYN">
            {btn}
          </div>
        ))}
        {lever[72].map((btn) => (
          <div className="button row5 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#3c096c] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="KEYM">
            {btn}
          </div>
        ))}
        {lever[79].map((btn) => (
          <div className="button row5 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#3c096c] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="COMMA">
            {btn}
          </div>
        ))}
        {lever[73].map((btn) => (
          <div className="button row5 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#3c096c] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="PERIOD">
            {btn}
          </div>
        ))}
        {lever[74].map((btn) => (
          <div className="button row5 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#3c096c] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="SLASH">
            {btn}
          </div>
        ))}
        {lever[65].map((btn) => (
          <div className="button row5 h-[48px] w-[174px] rounded-md text-base pt-2 bg-[#3c096c] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="SHIFTRIGHT">
            {btn}
          </div>
        ))}
        {lever[20].map((btn) => (
          <div className="button row5 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#240046] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="NUMPAD1">
            {btn}
          </div>
        ))}
        {lever[21].map((btn) => (
          <div className="button row5 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#240046] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="NUMPAD2">
            {btn}
          </div>
        ))}
        {lever[22].map((btn) => (
          <div className="button row5 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#240046] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="NUMPAD3">
            {btn}
          </div>
        ))}
        {lever[65].map((btn) => (
          <div className="button row5 h-[108px] w-[48px] rounded-md text-xs pt-9 bg-[#240046] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="NUMPADENTER">
            {btn}
          </div>
        ))}
      </div>
      <div className="container6">
        {lever[76].map((btn) => (
          <div className="button row6 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#240046] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="CONTROLLEFT">
            {btn}
          </div>
        ))}
        {lever[77].map((btn) => (
          <div className="button row6 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#240046] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="METALEFT">
            <WindowsFilled />
            {btn}
          </div>
        ))}
        {lever[78].map((btn) => (
          <div className="button row6 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#240046] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="ALTLEFT">
            {btn}
          </div>
        ))}
        {lever[77].map((btn) => (
          <div className="button row6 h-[48px] w-[444px] rounded-md text-base pt-2 bg-[#240046] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="SPACE">
            {btn}
          </div>
        ))}
        {lever[78].map((btn) => (
          <div className="button row6 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#240046] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="ALTRIGHT">
            {btn}
          </div>
        ))}
        {lever[76].map((btn) => (
          <div className="button row6 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#240046] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="CONTROLRIGHT">
            {btn}
          </div>
        ))}
        {lever[77].map((btn) => (
          <div className="button row6 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#240046] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="ARROWLEFT">
            <ArrowLeftOutlined /> {btn}
          </div>
        ))}
        {lever[77].map((btn) => (
          <div className="button row6 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#240046] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="ARROWUP">
            <ArrowUpOutlined />
            {btn}
          </div>
        ))}
        {lever[77].map((btn) => (
          <div className="button row6 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#240046] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="ARROWRIGHT">
            <ArrowRightOutlined />
            {btn}
          </div>
        ))}
        {lever[29].map((btn) => (
          <div className="button row6 h-[48px] w-[120px] rounded-md text-base pt-2 bg-[#240046] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="NUMPAD0">
            {btn}
          </div>
        ))}
        {lever[79].map((btn) => (
          <div className="button row6 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#240046] text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="NUMPADDECIMAL">
            {btn}
          </div>
        ))}
      </div>
      <div className="container7">
        {lever[77].map((btn) => (
          <div className="button row7 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#10002b] text-white border border-solid border-[#47126b] border-b-5 border-b-[rgb(74, 45, 96)]" data-key="ARROWDOWN">
            <ArrowDownOutlined /> {btn}
          </div>
        ))}
      </div>
    </>
  );
}
