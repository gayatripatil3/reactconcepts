import React, { useEffect } from 'react'
import { useState } from 'react'


export default function GrandChild1({item1,updateFun1}) {

 const UpdateFun=()=>{
    updateFun1([1,2,3]);
}

  return (
    <div>
      <button onClick={UpdateFun}>Click to Update</button>
    </div>
  )
}