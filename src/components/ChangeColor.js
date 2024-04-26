import React from 'react'

export default function ChangeColor(props) {
  return (
    <>
    <div style={{width:"100px",height:"100px",border:"1px solid black",backgroundColor:props.color1}}>
    </div>
    <button onClick={()=>props.changeCol1("red")}>Red</button>
      <button onClick={()=>props.changeCol1("blue")}>Blue</button>
      <button onClick={()=>props.changeCol1("green")}>Green</button>
      <button onClick={()=>props.changeCol1("orange")}>Orange</button>
      <button onClick={()=>props.changeCol1("yellow")}>Yellow</button>
    </>
  )
}
