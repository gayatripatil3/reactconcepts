import React, { useEffect } from 'react'
import { useState } from 'react'
import GrandChild1 from './GrandChild1'

export default function Child1({item,updateFun}) {

  return (
    <div>

      <GrandChild1 item1={item}  updateFun1={updateFun} />
    </div>
  )
}
