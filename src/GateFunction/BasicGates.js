const AndGateFunction = (input1, input2) =>{
    if (input1 == 1 && input2 == 1) {
        return 1;
    } else {
        return 0;
    }

}

const ORGateFunction = (input1, input2) =>{
    if (input1 == 0 && input2 == 0) {
        return 0;
    } else {
        return 1;
    }

}

const NoTGateFunction = (input1) =>{
    if (input1 == 0) {
        return 1;
    }else if(input1 == 1){
        return 0;
    }else{
        return 'Error';
    }

}

const NANDGateFunction = (input1, input2) =>{
    if (input1 == 1 && input2 == 1) {
        return 0;
    } else {
        return 1;
    }

}

const NORGateFunction = (input1, input2) =>{
    if (input1 == 0 && input2 == 0) {
        return 0;
    } else {
        return 0;
    }

}

const XORGateFunction = (input1, input2) =>{
    if (input1 == input2) {
        return 0;
    } else {
        return 1;
    }

}

const XNORGateFunction = (input1, input2) =>{
    if (input1 == input2) {
        return 1;
    } else {
        return 0;
    }

}



export {
    AndGateFunction,
    ORGateFunction,
    NoTGateFunction,
    NANDGateFunction,
    NORGateFunction,
    XORGateFunction,
    XNORGateFunction
}

