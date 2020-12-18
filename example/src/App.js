import React from 'react'
import { AndGate,ORGate,NoTGate,NANDGate,NORGate,XORGate,XNORGate } from 'digital-logic-gate'


const App = () => {

  const AndGateResult = AndGate(1,1);
  const ORGateResult = ORGate(0,1);
  const NoTGateResult = NoTGate(1);
  const NANDGateResult = NANDGate(0,0);
  const NORGateResult = NORGate(0,1);
  const XORResult = XORGate(0,1);
  const XNORResult = XNORGate(0,0);

  console.log(AndGateResult);
  console.log(ORGateResult);
  console.log(NoTGateResult);
  console.log(NANDGateResult);
  console.log(NORGateResult);
  console.log(XORResult);
  console.log(XNORResult);

  return (

    <div>
      <p>App is running</p>
    </div>
  )
}

export default App
