function handleMath(symbol){
    if(buffer ==='0'){
        return;
    }

    const intBuffer = parseInt(buffer);

    if(runninTotal === 0){
        runninTotal = intBuffer;
    }else{
        flushOperation(intBuffer);
    }
    previousOperator = symbol;
    buffer = '0'
}

function flushOperation(intBuffer){
    if(previousOperator === '+'){
        runninTotal += intBuffer;
    }else if(previousOperator === '-'){
        runninTotal -= intBuffer;
    }else if(previousOperator === '*'){
        runninTotal *= intBuffer
    }else if(previousOperator === '/'){
        runninTotal /= intBuffer;
    }
}

function handleNumber(numberString){
    if(buffer === '0'){
        buffer = numberString;
    }else{
        buffer += numberString;
    }
}
