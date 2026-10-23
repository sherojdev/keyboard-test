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

  useNewStyle() ;
 
  return (
    <>
      <div className="container mb-8 rounded-xl mx-32 " id="display-box">
        <div className="return-text"></div>
      </div>
      <div className="container1">     
        {lever[0].map((btn) => (
          <div className="button  h-[26px] w-[48px] rounded-md bg-[#dcbeee] text-white font-medium border border-solid border-[#47126b] border-b-3 border-b-[rgb(74, 45, 96)] " data-key={["Escape", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "PrintScreen", "Delete", "Home", "End", "PageUp", "PageDown"]}>
            {btn}
          </div>
        ))}
      </div>
      <div className="container2">
        {lever[1].map((btn) => (
          <div className="button  h-[48px] w-[35px] rounded-md text-base pt-3 bg-[#c29ae1] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key="Backquote">
            {btn}
          </div>
        ))}
        {lever[2].map((btn) => (
          <div className="button  h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#c29ae1] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={["Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal"]}>
            {btn}
          </div>
        ))}
        {lever[3].map((btn) => (
          <div className="button  h-[48px] w-[94px] rounded-md pt-2 text-sm bg-[#c29ae1] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={["Backspace"]}>
            {btn}
          </div>
        ))}
        {lever[4].map((btn) => (
          <div className="button  h-[48px] w-[48px] rounded-md text-xs pt-0 bg-[#c29ae1]  font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={["NumLock","NumpadDivide", "NumpadMultiply", "NumpadSubtract"]}> 
            {btn}
          </div>
        ))}
      </div>
      <div className="container3">
        {lever[5].map((btn) => (
          <div className="button row3 h-[48px] w-[64px] rounded-md text-base pt-1 bg-[#9d4edd] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={["Tab"]}>
            {btn}
          </div>
        ))}
        {lever[6].map((btn) => (
          <div className="button row3 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#9d4edd] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight"]}>
            {btn}
          </div>
        ))}
        {lever[7].map((btn) => (
          <div className="button row3 h-[48px] w-[64px] rounded-md text-base pt-1 bg-[#9d4edd]  font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={["Backslash"]}>
            {btn}
          </div>
        ))}
        {lever[8].map((btn) => (
          <div className="button row3 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#9d4edd] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={["Numpad7", "Numpad8", "Numpad9"]}>
            {btn}
          </div>
        ))}
        {lever[9].map((btn) => (
          <div className="button row3 h-[108px] w-[48px] rounded-md text-base pt-9 bg-[#9d4edd] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={["Numpadadd"]}>
            {btn}
          </div>
        ))}
        </div>
      <div className="container4">
        {lever[10].map((btn) => (
          <div className="button row4 h-[48px] w-[92px] rounded-md text-base pt-1 bg-[#5a189a] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={["capslock"]}>
           {btn}
          </div>
        ))}
        {lever[11].map((btn) => (
          <div className="button row4 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#5a189a] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote"]}>
            {btn}
          </div>
        ))}
        {lever[12].map((btn) => (
          <div className="button row4 h-[48px] w-[98px] rounded-md text-base pt-1 bg-[#5a189a] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={["Enter"]}>
            {btn}
          </div>
        ))}
        {lever[13].map((btn) => (
          <div className="button row4 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#5a189a] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={["Numpad4", "Numpad5", "Numpad6"]}>
            {btn}
          </div>
        ))}
      </div>
      <div className="container5">
        {lever[14].map((btn) => (
          <div className="button row5 h-[48px] w-[118px] rounded-md text-base pt-1 bg-[#3c096c] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={["Shiftleft"]}>
            {btn}
          </div>
        ))}
        {lever[15].map((btn) => (
          <div className="button row5 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#3c096c] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={["KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash"]}>
            {btn}
          </div>
        ))}
        {lever[14].map((btn) => (
          <div className="button row5 h-[48px] w-[174px] rounded-md text-base pt-2 bg-[#3c096c] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={["Shiftright"]}>
            {btn}
          </div>
        ))}
        {lever[16].map((btn) => (
          <div className="button row5 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#3c096c] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={["Numpad1", "Numpad2", "Numpad3"]}>
            {btn}
          </div>
        ))}
        {lever[12].map((btn) => (
          <div className="button row5 h-[108px] w-[48px] rounded-md text-xs pt-9 bg-[#240046] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={["Numpadenter"]}>
            {btn}
          </div>
        ))}
      </div>
      <div className="container6">
        {lever[17].map((btn) => (
          <div className="button row6 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#240046] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={["Controlleft"]}>
            {btn}
          </div>
        ))}
        {lever[18].map((btn) => (
          <div className="button row6 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#240046] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={["Metaleft"]}>
            <WindowsFilled />
            {btn}
          </div>
        ))}
        {lever[19].map((btn) => (
          <div className="button row6 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#240046] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={["Altleft"]}>
            {btn}
          </div>
        ))}
        {lever[18].map((btn) => (
          <div className="button row6 h-[48px] w-[444px] rounded-md text-base pt-2 bg-[#240046] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={["Space"]}>
            {btn}
          </div>
        ))}
        {lever[19].map((btn) => (
          <div className="button row6 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#240046] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={["Altright"]}>
            {btn}
          </div>
        ))}
        {lever[17].map((btn) => (
          <div className="button row6 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#240046] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={["Controlright"]}>
            {btn}
          </div>
        ))}
        {lever[18].map((btn) => (
          <div className="button row6 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#240046] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={["Arrowleft"]}>
            <ArrowLeftOutlined /> {btn}
          </div>
        ))}
        {lever[18].map((btn) => (
          <div className="button row6 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#240046] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={["Arrowup"]}>
            <ArrowUpOutlined />
            {btn}
          </div>
        ))}
        {lever[18].map((btn) => (
          <div className="button row6 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#240046] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={["Arrowright"]}>
            <ArrowRightOutlined />
            {btn}
          </div>
        ))}
        {lever[20].map((btn) => (
          <div className="button row6 h-[48px] w-[120px] rounded-md text-base pt-2 bg-[#240046] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={["Numpad0"]}>
            {btn}
          </div>
        ))}
        {lever[21].map((btn) => (
          <div className="button row6 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#240046] font-medium text-white border border-solid border-[#47126b] border-b-4 border-b-[rgb(74, 45, 96)]" data-key={["Numpaddecimal"]}>
            {btn}
          </div>
        ))}
      </div>
      <div className="container7">
        {lever[18].map((btn) => (
          <div className="button row7 h-[48px] w-[48px] rounded-md text-base pt-2 bg-[#10002b] font-medium text-white border border-solid border-[#47126b] border-b-5 border-b-[rgb(74, 45, 96)]" data-key={["Arrowdown"]}>
            <ArrowDownOutlined /> {btn}
          </div>
        ))}
      </div>
    </>
  );
}
