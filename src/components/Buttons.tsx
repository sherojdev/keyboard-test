import { useEffect } from "react";


export default function Buttons() {

  const line1 = ["esc","f1","f2","f3","f4","f5","f6","f7","f8","f9","f10","f11","f12","prt sc","delete","home","end","pgup","pgdn"];
  const line2s1 = ["`"];
  const line2s2 = [1,2,3,4,5,6,7,8,9,0,"-","="];
  const line2s3 = ["backspace"];
  const line2s4 = ["/","*","-"];
  const line2s5 = ["num lock"];
  const line3s1 = ["Tab"];
  const line3s2 = ["Q","W","E","R","T","Y","U","I","O","P","[","]"];
  const line3s3 = ["\\"];
  const line3s4 = [7,8,9];
  const line3s5 = ["+"]
  const line4s1 = ["caps lock"];
  const line4s2 = ["A","S","D","F","G","H","J","K","L",";","'"];
  const line4s3 = ["enter"];
  const line4s4 = [4,5,6];
  const line5s1 = ["shift"];
  const line5s2 = ["Z","X","C","V","B","N","M",",",".","/"];
  const line5s3 = [1,2,3];
  const line6s1 = ["ctrl","","alt"];
  const line6s2 = [""];
  const line6s3 = ["alt","ctrl","<"];
  const line6s4 = ["",">"];
  const line6s5 = ["0"];
  const line6s6 = ["."];
 

  useEffect(()=>{
    const handlekeyPress = (e)=> {
     console.log(e);
     let btn1 = document.querySelector(".button1");
     if(btn1 && btn1.innerText ===  e.key){
      btn1.style.backgroundColor = "white" ;
     }
      }

      window.addEventListener("keydown", handlekeyPress);

    return () => {
    window.removeEventListener("keydown", handlekeyPress);
  };
  },[])
  
   
  return (
    <>
    <div className="container"><textarea className="tex"></textarea></div>
      <div className="container1">
      {line1.map((btn) => (<div className="button"> {btn} </div>))}
      </div>
      <div className="container2">
      {line2s1.map((btn) => (<div className="button1"> {btn} </div>))}
      {line2s2.map((btn) => (<div className="button2"> {btn} </div>))}
      {line2s3.map((btn) => (<div className="button3"> {btn} </div>))}
      {line2s5.map((btn) => (<div className="button13"> {btn} </div>))}
      {line2s4.map((btn) => (<div className="button2"> {btn} </div>))}
      </div>
      <div className="container3">
      {line3s1.map((btn) => (<div className="button4"> {btn} </div>))}
      {line3s2.map((btn) => (<div className="button2"> {btn} </div>))}
      {line3s3.map((btn) => (<div className="button4"> {btn} </div>))}
      {line3s4.map((btn) => (<div className="button2"> {btn} </div>))}
      {line3s5.map((btn) => (<div className="button7"> {btn} </div>))}
      </div>
      <div className="container4">
      {line4s1.map((btn) => (<div className="button5"> {btn} </div>))}
      {line4s2.map((btn) => (<div className="button2"> {btn} </div>))}
      {line4s3.map((btn) => (<div className="button6"> {btn} </div>))}
      {line4s4.map((btn) => (<div className="button2"> {btn} </div>))}
      </div>
      <div className="container5">
      {line5s1.map((btn) => (<div className="button8"> {btn} </div>))}
      {line5s2.map((btn) => (<div className="button2"> {btn} </div>))}
      {line5s1.map((btn) => (<div className="button9"> {btn} </div>))}
      {line5s3.map((btn) => (<div className="button2"> {btn} </div>))}
      {line4s3.map((btn) => (<div className="button7"> {btn} </div>))}
      </div>
      <div className="container6">
      {line6s1.map((btn) => (<div className="button2"> {btn} </div>))}
      {line6s2.map((btn) => (<div className="button10"> {btn} </div>))}
      {line6s3.map((btn) => (<div className="button2"> {btn} </div>))}
      {line6s4.map((btn) => (<div className="button2"> {btn} </div>))}
      {line6s5.map((btn) => (<div className="button12"> {btn} </div>))}
      {line6s6.map((btn) => (<div className="button2"> {btn} </div>))}
      </div>
      <div className="container7">
      {line6s2.map((btn) => (<div className="button2"> {btn} </div>))}
      </div>
    </>
  );

}