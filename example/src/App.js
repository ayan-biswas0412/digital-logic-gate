import React from 'react'

import { AndGate,ORGate,NoTGate,NANDGate } from 'digital-logic-gate'


const App = () => {
  return (
    <div>
       <AndGate input1='0' input2='1'/>
       <ORGate input1='0' input2='0'/>
       <NoTGate input1='0'/>
       <NANDGate input1 = '0' input2 = '1'/>
    </div>
  )
}

export default App
