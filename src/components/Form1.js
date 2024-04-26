import React, { useState } from 'react'

export default function Form1() {
  const changeColor=()=>{
      if(color=="red")
      setColor("blue");
    else if(color=="blue")
      setColor("green");
    else if(color=="green")
      setColor("yellow");
  else if(color=="yellow")
    setColor("red");
  }

  const convertUpper=()=>{
    let newText=text.toUpperCase()
   setText(newText);
   document.getElementById("show_div").innerHTML=newText;
  }

  const handleText=(event)=>{
    setText(event.target.value);
  }

  const[color,setColor]=useState("red");

  const [text,setText]=useState("Enter Text");
  return (
    <>
    <div>
    <div style={{width:"100px",height:"100px",border:'1px solid black',backgroundColor:color}}>
       </div>
       <button onClick={changeColor}>Change Color</button>
       </div>
       <textarea name="" id="" cols="30" rows="10" value={text} onChange={handleText}>
       </textarea>
       <div id="show_div"></div>
       <button onClick={convertUpper}>Convert To UpperCase</button>
       </>
  )
}

