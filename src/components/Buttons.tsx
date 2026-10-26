import {
  WindowsFilled,
  ArrowUpOutlined,
  ArrowDownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

import { useNewStyle } from "../hooks/useStyle";

export default function Buttons() {
  const lever = [["esc","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","prt sc","delete","home","end","pgup","pgdn"],["`"],[1,2,3,4,5,6,7,8,9,0,"-","="],["backspace"],["Num lock","/","*","-"],["tab"],["Q","W","E","R","T","Y","U","I","O","P","[","]"],["\\"],[7,8,9],["+"],["capslock"],["A","S","D","F","G","H","J","K","L",";","'"],["enter"],[4,5,6],["shift"],["Z","X","C","V","B","N","M",",",".","/"],[1,2,3],["Ctrl"],[""],["alt"],[0],["."]];
  const codes = [["Escape","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","PrintScreen","Delete","Home","End","PageUp","PageDown"],["Backquote"],["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal"],["Backspace"],["NumLock","NumpadDivide","NumpadMultiply","NumpadSubtract"],["Tab"],["KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight"],["Backslash"],["Numpad7","Numpad8","Numpad9"],["NumpadAdd"],["CapsLock"],["KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote"],["Enter"],["Numpad4","Numpad5","Numpad6"],["ShiftLeft"],["KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash"],["Numpad1","Numpad2","Numpad3"],["ControlLeft"],["MetaLeft"],["AltLeft"],["Numpad0"],["NumpadDecimal"],["NumpadEnter"],["ShiftRight"],["ControlRight"],["Altgraph"],["Space"],["ArrowLeft"],["ArrowUp"],["ArrowRight"],["ArrowDown"]];

  useNewStyle() ;
 
  return (
    <>
      <div className="container mb-8 rounded-xl mx-32 " id="display-box">
        <div className="return-text"></div>
      </div>
      <div className="container h-[20px] w-full flex justify-evenly">     
        {lever[0].map((btn, i) => (
          <div className="button  h-[26px] w-[48px] rounded-md bg-[#dcbeee] text-white font-medium border border-solid border-[#47126b] border-b-3 border-b-[rgb(74, 45, 96)] " data-key={codes[0][i]}>
            {btn}
          </div>
        ))}
      </div>
      <div className="container h-[20px] mt-5 w-full flex justify-evenly">
        {lever[1].map((btn, i) => (
          <div className="button  h-[48px] w-[35px] rounded-md text-base pt-3 bg-[#c29ae1] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={codes[1][i]}>
            {btn}
          </div>
        ))}
        {lever[2].map((btn, i) => (
          <div className="button  h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#c29ae1] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={codes[2][i]}>
            {btn}
          </div>
        ))}
        {lever[3].map((btn, i) => (
          <div className="button  h-[48px] w-[94px] rounded-md pt-2 text-sm bg-[#c29ae1] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={codes[3][i]}>
            {btn}
          </div>
        ))}
        {lever[4].map((btn, i) => (
          <div className="button  h-[48px] w-[48px] rounded-md text-xs pt-0 bg-[#c29ae1]  font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={codes[4][i]}> 
            {btn}
          </div>
        ))}
      </div>
      <div className="container h-[20px] mt-9 w-full flex justify-evenly">
        {lever[5].map((btn, i) => (
          <div className="button h-[48px] w-[64px] rounded-md text-base pt-1 bg-[#9d4edd] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={codes[5][i]}>
            {btn}
          </div>
        ))}
        {lever[6].map((btn,  i) => (
          <div className="button row3 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#9d4edd] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={codes[6][i]}>
            {btn}
          </div>
        ))}
        {lever[7].map((btn,  i) => (
          <div className="button h-[48px] w-[64px] rounded-md text-base pt-1 bg-[#9d4edd]  font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={codes[7][i]}>
            {btn}
          </div>
        ))}
        {lever[8].map((btn,  i) => (
          <div className="button h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#9d4edd] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={codes[8][i]}>
            {btn}
          </div>
        ))}
        {lever[9].map((btn,  i) => (
          <div className="button h-[108px] w-[48px] rounded-md text-base pt-9 bg-[#9d4edd] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={codes[9][i]}>
            {btn}
          </div>
        ))}
        </div>
      <div className="container h-[20px] mt-9 w-[95%] flex justify-evenly">
        {lever[10].map((btn,  i) => (
          <div className="button h-[48px] w-[92px] rounded-md text-base pt-1 bg-[#5a189a] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={codes[10][i]}>
           {btn}
          </div>
        ))}
        {lever[11].map((btn,  i) => (
          <div className="button h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#5a189a] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={codes[11][i]}>
            {btn}
          </div>
        ))}
        {lever[12].map((btn,  i) => (
          <div className="button h-[48px] w-[98px] rounded-md text-base pt-1 bg-[#5a189a] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={codes[12][i]}>
            {btn}
          </div>
        ))}
        {lever[13].map((btn,  i) => (
          <div className="button h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#5a189a] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={codes[13][i]}>
            {btn}
          </div>
        ))}
      </div>
      <div className="container h-[20px] mt-9 w-full flex justify-evenly">
        {lever[14].map((btn,  i) => (
          <div className="button h-[48px] w-[118px] rounded-md text-base pt-1 bg-[#3c096c] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={codes[14][i]}>
            {btn}
          </div>
        ))}
        {lever[15].map((btn,  i) => (
          <div className="button h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#3c096c] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={codes[15][i]}>
            {btn}
          </div>
        ))}
        {lever[14].map((btn,  i) => (
          <div className="button h-[48px] w-[174px] rounded-md text-base pt-2 bg-[#3c096c] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={codes[23][i]}>
            {btn}
          </div>
        ))}
        {lever[16].map((btn,  i) => (
          <div className="button h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#3c096c] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={codes[16][i]}>
            {btn}
          </div>
        ))}
        {lever[12].map((btn,  i) => (
          <div className="button h-[108px] w-[48px] rounded-md text-xs pt-9 bg-[#240046] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={codes[22][i]}>
            {btn}
          </div>
        ))}
      </div>
      <div className="container h-[20px] mt-9 w-[95%] flex justify-evenly">
        {lever[17].map((btn,  i) => (
          <div className="button h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#240046] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={codes[17][i]}>
            {btn}
          </div>
        ))}
        {lever[18].map((btn,  i) => (
          <div className="button h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#240046] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={codes[18][i]}>
            <WindowsFilled />
            {btn}
          </div>
        ))}
        {lever[19].map((btn,  i) => (
          <div className="button h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#240046] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={codes[19][i]}>
            {btn}
          </div>
        ))}
        {lever[18].map((btn,  i) => (
          <div className="button h-[48px] w-[444px] rounded-md text-base pt-2 bg-[#240046] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={codes[26][i]}>
            {btn}
          </div>
        ))}
        {lever[19].map((btn,  i) => (
          <div className="button h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#240046] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={codes[25][i]}>
            {btn}
          </div>
        ))}
        {lever[17].map((btn,  i) => (
          <div className="button h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#240046] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={codes[24][i]}>
            {btn}
          </div>
        ))}
        {lever[18].map((btn,  i) => (
          <div className="button h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#240046] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={codes[27][i]}>
            <ArrowLeftOutlined /> {btn}
          </div>
        ))}
        {lever[18].map((btn,  i) => (
          <div className="button h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#240046] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={codes[28][i]}>
            <ArrowUpOutlined />
            {btn}
          </div>
        ))}
        {lever[18].map((btn,  i) => (
          <div className="button h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#240046] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={codes[29][i]}>
            <ArrowRightOutlined />
            {btn}
          </div>
        ))}
        {lever[20].map((btn,  i) => (
          <div className="button h-[48px] w-[120px] rounded-md text-base pt-2 bg-[#240046] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={codes[20][i]}>
            {btn}
          </div>
        ))}
        {lever[21].map((btn,  i) => (
          <div className="button h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#240046] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={codes[21][i]}>
            {btn}
          </div>
        ))}
      </div>
      <div className="container h-[20px] mt-7 w-[95%] absolute left-68 flex justify-evenly">
        {lever[18].map((btn,  i) => (
          <div className="button h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#10002b] font-medium text-white border border-solid border-[#47126b] border-b-5 border-b-[rgb(74, 45, 96)]" data-key={codes[30][i]}>
            <ArrowDownOutlined /> {btn}
          </div>
        ))}
      </div>
    </>
  );
}
