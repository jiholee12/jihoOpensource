function handleSymbol(symbol){
    switch(symbol){
        case 'C':
            buffer = '0';
            runninTotal = 0;
            break;

            case '=':
                if(previousOperator === null){
                    return
                }
                flushOperation(parseInt(buffer));
                previousOperator = null;
                buffer = runninTotal;
                runninTotal = 0;
                break;

                case'←':
                if(buffer.length ===1){
                    buffer ='0';
                }else{
                    buffer = buffer.substring(0,buffer.length -1);
                }
                break; 

                case '+':
                case '-':
                case '*':
                case '/':
                    handleMath(symbol);
                    break;
    }
}
