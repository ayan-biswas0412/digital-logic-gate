# digital-logic-gate

> This is for simulation of basic digital logic gates using javascript

[![NPM](https://img.shields.io/npm/v/digital-logic-gate.svg)](https://www.npmjs.com/package/digital-logic-gate) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### Welcome to the digital-logic-gate wiki!

## Overview
The main motivation to create this npm based package is to connect the digital electronics simulation domain to the essence of javascript
and also making the simulation of the basic gates simpler. Anyone wishing to contribute is most welcome to the repository.

## Welcome contributors
### What you need to learn before the start?
You have to know about the basics of digital gates AND, OR, NOT, NAND, NOR, XOR and XNOR.You have to know about the truth table of that particular gate for which you are writing code.
#### Head over to the [wiki](https://github.com/ayan-biswas0412/digital-logic-gate/wiki) for more developer documentations.

## Install

```bash
npm install --save digital-logic-gate
```

## Usage

```jsx
import React, { Component } from 'react'

import { AndGate } from 'digital-logic-gate'

class Example extends Component {
  render() {
    return (
      <div>
        <AndGate input1='1' input2='1' /> // It will give result 1
        <ORGate input1='0' input2='0'/> // It will give result 0
        <NoTGate input1='0'/> // It will give result 1
        <NANDGate input1 = '0' input2 = '1'/> // It will give result 1
        <NORGate input1 = '1' input2 = '0'/> // It will give result 0
        <XORGate input1 = '1' input2 = '0'/> // Inequality detector
        <XNORGate input1 = '1' input2 = '1'/> // Equality detector
      </div>
    )
  }
}
```

## License

MIT © [ayan-biswas0412](https://github.com/ayan-biswas0412)
