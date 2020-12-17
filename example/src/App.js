import React from 'react'

import { AndGate,ORGate,NoTGate,NANDGate,NORGate,XORGate,XNORGate } from 'digital-logic-gate'


const App = () => {
  return (
    <div>
       <AndGate input1='0' input2='1'/>
       <ORGate input1='0' input2='0'/>
       <NoTGate input1='0'/>
       <NANDGate input1 = '0' input2 = '1'/>
       <NORGate input1 = '1' input2 = '0'/>
       <XORGate input1 = '1' input2 = '0'/>
       <XNORGate input1 = '1' input2 = '1'/>
    </div>
  )
}

export default App
