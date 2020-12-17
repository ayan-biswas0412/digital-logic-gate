import React from 'react';
import styles from './styles.module.css';
import {AndGateFunction} from './GateFunction';

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const AndGate = ({ input1, input2}) =>{
  const result = AndGateFunction(input1,input2);
  return result;
}
