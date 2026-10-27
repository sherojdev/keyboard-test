import "./AppleB.css";

import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  PoweroffOutlined,
  MacCommandFilled,
} from "@ant-design/icons";

import { useNewStyleMac } from "../hooks/useStyleMac";

export default function Buttons() {
  const lever = [["esc","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12"],[""],["`"],[1,2,3,4,5,6,7,8,9,0,"-","="],["delete"],["tab"],["Q","W","E","R","T","Y","U","I","O","P","[","]"],["\\"],["capslock"],["A","S","D","F","G","H","J","K","L",";","'"],["return"],["shift"],["Z","X","C","V","B","N","M",",",".","/"],["fn"],["Control"],["option"],[""]];
  const codes = [["Escape","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12"],["Backquote"],["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal"],["Backspace"],["Tab"],["KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight"],["Backslash"],["CapsLock"],["KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote"],["Enter"],["ShiftLeft"],["KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash"],["ShiftRight"],["ControlLeft"],["AltLeft"],["MetaLeft"],["Space"],["MetaRight"],["Altgraph"],["ArrowLeft"],["ArrowUp"],["ArrowRight"],["ArrowDown"]];

  useNewStyleMac() ;

  return (
    <>
      <div className="container mb-8 rounded-xl mx-32" id="display-box-mac">
        <div className="return-text-mac"></div>
      </div>
      <div className="container1-mac">
        {lever[0].map((btn, i) => (
          <div className="rounded-xs h-[26px] w-[52px] font-semibold text-white bg-[#ccff33] border border-solid border-[#183a20] border-b-4 border-b-[#183a20]" data-key={codes[0][i]}>           
            {btn}
          </div>
        ))}
        {lever[1].map(() => (
          <div className="rounded-xs h-[26px] w-[52px] font-medium text-white bg-[#ccff33] border border-solid border-[#ccff33] border-b-4 border-b-[#183a20]" data-key="">                               
            <PoweroffOutlined />
          </div>
        ))}
      </div>
      <div className="container2-mac">
        {lever[2].map((btn, i) => (
          <div className="rounded-md h-[48px] w-[35px] text-[1rem] font-medium text-white bg-[#9ef01a] border border-solid border-[#ccff33] border-b-4 border-b-[#183a20]" data-key={codes[1][i]}>
            {btn}
          </div>
        ))}
        {lever[3].map((btn, i) => (
          <div className="rounded-md h-[50px] w-[50px] text-[1rem] pt-2 font-medium text-white bg-[#9ef01a] border border-solid border-[#ccff33] border-b-4 border-b-[#183a20]" data-key={codes[2][i]}>     
            {btn}
          </div>
        ))}
        {lever[4].map((btn, i) => (
          <div className="rounded-md h-[48px] w-[94px] text-[0.8rem] pt-2 font-medium text-white bg-[#9ef01a] border border-solid border-[#ccff33] border-b-4 border-b-[#183a20]" data-key={codes[3][i]}>         
            {btn}
          </div>
        ))}
      </div>
      <div className="container3-mac">
        {lever[5].map((btn, i) => (
          <div className="mac-button font-medium text-white bg-[#70e000] border border-solid border-[#ccff33] border-b-4 border-b-[#183a20]" data-key={codes[4][i]}>
            {btn}
          </div>
        ))}
        {lever[6].map((btn, i) => (
          <div className="mac-button font-medium text-white bg-[#70e000] border border-solid border-[#ccff33] border-b-4 border-b-[#183a20]" data-key={codes[5][i]}>     
            {btn}
          </div>
        ))}
        {lever[7].map((btn, i) => (
          <div className="mac-button font-medium text-white bg-[#70e000] border border-solid border-[#ccff33] border-b-4 border-b-[#183a20]" data-key={codes[6][i]}> 
            {btn}
          </div>
        ))}
      </div>
      <div className="container4-mac">
        {lever[8].map((btn, i) => (
          <div className="mac-button font-medium text-white bg-[#38b000] border border-solid border-[#ccff33] border-b-4 border-b-[#183a20]" data-key={codes[7][i]}>
            {btn}
          </div>
        ))}
        {lever[9].map((btn, i) => (
          <div className="mac-button font-medium text-white bg-[#38b000] border border-solid border-[#ccff33] border-b-4 border-b-[#183a20]" data-key={codes[8][i]}>
            {btn}
          </div>
        ))}
      </div>
      <div className="container5-mac">
        {lever[10].map((btn, i) => (
          <div className="mac-button font-medium text-white bg-[#008000] border border-solid border-[#ccff33] border-b-4 border-b-[#183a20]" data-key={codes[9][i]}>
            {btn}
          </div>
        ))}
        {lever[11].map((btn, i) => (
          <div className="mac-button font-medium text-white bg-[#008000] border border-solid border-[#ccff33] border-b-4 border-b-[#183a20]" data-key={codes[10][i]}>
            {btn}
          </div>
        ))}
        {lever[10].map((btn, i) => (
          <div className="mac-button font-medium text-white bg-[#008000] border border-solid border-[#ccff33] border-b-4 border-b-[#183a20]" data-key={codes[11][i]}>
            {btn}
          </div>
        ))}
       </div>
      <div className="container6-mac">
        {lever[12].map((btn) => (
          <div className="mac-button font-medium text-white rounded-md  bg-[#007200] border border-solid border-[#ccff33] border-b-4 border-b-[#183a20]" data-key="">
            {btn}
          </div>
        ))}
        {lever[13].map((btn, i) => (
          <div className="mac-button font-medium text-white bg-[#007200] border border-solid border-[#ccff33] border-b-4 border-b-[#183a20]" data-key={codes[12][i]}>
            {btn}
          </div>
        ))}
        {lever[14].map((btn, i) => (
          <div className="mac-button font-medium text-white bg-[#007200] border border-solid border-[#ccff33] border-b-4 border-b-[#183a20]" data-key={codes[13][i]}>
            {btn}
          </div>
        ))}
        {lever[1].map((btn, i) => (
          <div className="mac-button font-medium text-white bg-[#007200] border border-solid border-[#ccff33] border-b-4 border-b-[#183a20]" data-key={codes[14][i]}>
            <MacCommandFilled />
            {btn}
          </div>
        ))}
        {lever[1].map((btn, i) => (
          <div className="mac-button font-medium text-white bg-[#007200] border border-solid border-[#ccff33] border-b-4 border-b-[#183a20]" data-key={codes[15][i]}>
            {btn}
          </div>
        ))}
        {lever[1].map((btn, i) => (
          <div className="mac-button font-medium text-white bg-[#007200] border border-solid border-[#ccff33] border-b-4 border-b-[#183a20]" data-key={codes[14][i]}>
            <MacCommandFilled />
            {btn}
          </div>
        ))}
        {lever[15].map((btn, i) => (
          <div className="mac-button font-medium text-white bg-[#007200] border border-solid border-[#ccff33] border-b-4 border-b-[#183a20]" data-key={codes[15][i]}>
            {btn}
          </div>
        ))}
         {lever[1].map((btn, i) => (
          <div className="mac-button font-medium text-white bg-[#007200] border border-solid border-[#ccff33] border-b-4 border-b-[#183a20]" data-key={codes[14][i]}>
            <ArrowLeftOutlined />
            {btn}
          </div>
        ))}
         {lever[1].map((btn, i) => (
          <div className="mac-button font-medium text-white bg-[#007200] border border-solid border-[#ccff33] border-b-4 border-b-[#183a20]" data-key={codes[14][i]}>
            <ArrowUpOutlined />
            {btn}
          </div>
        ))}
         {lever[1].map((btn, i) => (
          <div className="mac-button font-medium text-white bg-[#007200] border border-solid border-[#ccff33] border-b-4 border-b-[#183a20]" data-key={codes[14][i]}>
            <ArrowRightOutlined />
            {btn}
          </div>
        ))}
      </div>
       <div className="container7-mac">
         {lever[1].map((btn, i) => (
          <div className="mac-button font-medium text-white bg-[#006400] border border-solid border-[#ccff33] border-b-5 border-b-[#183a20]" data-key={codes[14][i]}>
            <ArrowDownOutlined />
            {btn}
          </div>
        ))}
      </div>

    </>
  );
}
