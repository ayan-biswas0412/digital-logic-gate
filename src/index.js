import React from 'react';
import styles from './styles.module.css';
import {

  AndGateFunction,
  ORGateFunction,
  NoTGateFunction,
  NANDGateFunction,
  NORGateFunction,
  XORGateFunction,
  XNORGateFunction
} from './GateFunction';



export const AndGate = ({ input1, input2}) =>{
  const result = AndGateFunction(input1,input2);
  return result;
}

export const ORGate = ({ input1, input2}) =>{
  const result = ORGateFunction(input1,input2);
  return result;
}

export const NoTGate = ({ input1}) =>{
  const result = NoTGateFunction(input1);
  return result;
}

export const NANDGate = ({ input1,input2}) =>{
  const result = NANDGateFunction(input1,input2);
  return result;
}

export const NORGate = ({ input1,input2}) =>{
  const result = NORGateFunction(input1,input2);
  return result;
}

export const XORGate = ({ input1,input2}) =>{
  const result = XORGateFunction(input1,input2);
  return result;
}

export const XNORGate = ({ input1,input2}) =>{
  const result = XNORGateFunction(input1,input2);
  return result;
}

