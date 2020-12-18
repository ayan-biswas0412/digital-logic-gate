# digital-logic-gate

> This is for simulation of basic digital logic gates using javascript

[![NPM](https://img.shields.io/npm/v/digital-logic-gate.svg)](https://www.npmjs.com/package/digital-logic-gate) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<p align="center">
   <img alt="GitHub issues" src="https://img.shields.io/github/issues/ayan-biswas0412/digital-logic-gate"></a>
   <img alt="GitHub forks" src="https://img.shields.io/github/forks/ayan-biswas0412/digital-logic-gate"></a>
   <img alt="GitHub stars" src="https://img.shields.io/github/stars/ayan-biswas0412/digital-logic-gate"></a>
   <img alt="Github license" src="https://img.shields.io/github/license/ayan-biswas0412/digital-logic-gate"></a>
</p>

### Welcome to the digital-logic-gate documentation!

## Overview
The main motivation to create this npm based package is to connect the digital electronics simulation domain to the essence of javascript
and also making the simulation of the basic gates simpler. Anyone wishing to contribute is most welcome to the repository.

## Welcome contributors
### What you need to learn before the start?
You have to know about the basics of digital gates AND, OR, NOT, NAND, NOR, XOR and XNOR.You have to know about the truth table of that particular gate for which you are writing code.
#### Head over to the [wiki](https://github.com/ayan-biswas0412/digital-logic-gate/wiki) for more developer documentations.


* See the [Contributing Guidelines Wiki Page](https://github.com/ayan-biswas0412/digital-logic-gate/wiki/Contributing-Guide) For more info.

## Install

```bash
npm install --save digital-logic-gate
```

## Usage
Here is the basic usage of the following basic gates.

```jsx
import React, { Component } from 'react'

import { AndGate,ORGate,NoTGate,NANDGate,NORGate,XORGate,XNORGate } from 'digital-logic-gate'

function simuLateSomething(){

  const AndGateResult = AndGate(1,1); // 1
  const ORGateResult = ORGate(0,1); // 1
  const NoTGateResult = NoTGate(1);  // 0
  const NANDGateResult = NANDGate(0,0); //1
  const NORGateResult = NORGate(0,1); // 0
  const XORResult = XORGate(0,1); // 1
  const XNORResult = XNORGate(0,0); // 1

}
```

## Gates Demonstration

### AND Gate

The following figure shows the logic diagram of a 2 input AND gate.

![Alt text](docs/images/and-gate.png?raw=true "AND Gate")

Here is the truth table of the above gate.

| A  | B | F = A.B |
| ---|:-:| -------:|
| 0  | 0 | 0       |
| 0  | 1 | 0       |
| 1  | 0 | 0       |
| 1  | 1 | 1       |

#### Usage of the above gate

```jsx
import React, { Component } from 'react'

import { AndGate } from 'digital-logic-gate'


function simuLateSomething(){

  const AndGateResultA = AndGate(0,0); // 0
  const AndGateResultB = AndGate(0,1); // 0
  const AndGateResultC = AndGate(1,0); // 0
  const AndGateResultD = AndGate(1,1); // 1

}
```


### OR Gate

The following figure shows the logic diagram of a 2 input OR gate.

![Alt text](docs/images/or-gate.png?raw=true "OR Gate")

Here is the truth table of the above gate.

| A  | B | F = A+B |
| ---|:-:| -------:|
| 0  | 0 | 0       |
| 0  | 1 | 1       |
| 1  | 0 | 1       |
| 1  | 1 | 1       |

#### Usage of the above gate

```jsx
import React, { Component } from 'react'

import { ORGate } from 'digital-logic-gate'


function simuLateSomething(){
  const ORGateResultA = ORGate(0,0); // 0
  const ORGateResultB = ORGate(0,1); // 1
  const ORGateResultC = ORGate(1,0); // 1
  const ORGateResultD = ORGate(1,1); // 1


}
```

### NOT Gate

The following figure shows the logic diagram of a NOT gate.

![Alt text](docs/images/not-gate.png?raw=true "NOT Gate")

Here is the truth table of the above gate.

| A  | F = A' |
| ---|:-------:|
| 0  | 1       |
| 1  | 0       |


#### Usage of the above gate

```jsx
import React, { Component } from 'react'

import { NoTGate } from 'digital-logic-gate'


function simuLateSomething(){
  const NoTGateResultA = NoTGate(1);  // 0
  const NoTGateResultB = NoTGate(0);  // 1


}
```

## How to Contribute

### Instructions-

- Fork this Repository using the button at the top
- Clone your forked repository to your pc ( git clone ```'git@github.com:ayan-biswas0412/digital-logic-gate.git'```)
- Create a new branch for your modifications (ie. `git branch new-user` and check it out `git checkout new-user` and `git checkout -b new-user`)
- Run ```npm install``` from inside the cloned project and run ```npm install``` from inside the example folder.
- See the issues from the https://github.com/ayan-biswas0412/digital-logic-gate/issues and comment and ask for   working
- After your assigned work do the following
- Add your files (`git add -A`), commit (`git commit -m "added myself"`) and push (`git push origin new-user`)
- Create a pull request to the `develop` branch and your pull request title must contain `[dev]` keyword and your work short title
- Star this repository

#### If your branch is not fully updated with the develop branch please follow the below instructions before making any PR

>CAUTION: Synch up your local repo with [original repo](https://github.com/ayan-biswas0412/digital-logic-gate) (Upstream) before pushing your commits.
>This avoids unnecessary conflicts during the merge.

>NOTE: You can do so by adding a [remote handler](https://www.atlassian.com/de/git/tutorials/syncing) reference to the original repo and pull the changes from the respective branch.
>Resolve the [merge-conflicts](https://www.atlassian.com/de/git/tutorials/using-branches/merge-conflicts) if any.


>```bash
>#Add upstream repo
>git remote add upstream https://github.com/ayan-biswas0412/digital-logic-gate.git
>
>#Disable accidental push to the upstream
>git remote set-url --push upstream DISABLE
>
>#List the remote repo and fetch references
>git remote -v && git fetch upstream
>
>#Check for any new commits in the upstream branch
>git log HEAD..upstream/master #No output indicates, upstream has not moved ahead
>
>#See the patch difference between local and upstream branch
>git diff -p HEAD..upstream/master
>
>```

>CAUTION: If the upstream has moved ahead, rebase your commit and resolve conflicts if any. [Skip otherwise]
>```bash
>git rebase upstream/master
>```
>

**7.** Push your local commits to the remote repo.

```bash
git push -u origin <your_branch_name>
```

**8.** Create a [PR](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) !

**9.** **Congratulations!** Sit and relax, you've made your contribution to [digital-logic-gates](https://github.com/ayan-biswas0412/digital-logic-gate) project.


* See the [Contributing Guidelines Wiki](https://github.com/ayan-biswas0412/digital-logic-gate/wiki/Contributing-Guide) For more info.


## Changelog

Keep an eye at the detailed [Changelog wiki page](https://github.com/ayan-biswas0412/digital-logic-gate/wiki/Changelog)

## License

MIT © [ayan-biswas0412](https://github.com/ayan-biswas0412)
