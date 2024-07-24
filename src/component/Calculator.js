import CalculatorModules from './CalculatorModules';
import React, { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('');

    const handleInput = (value) => {setInput(input + value)};

    const setOutput = () => {
        try {
            const result = calculate(input);
            setInput(result.toString());
        } catch (error) {
            setInput('Error');
        }
    };

    const calculate = (expression) => {
        const operators = ['+', '-', '*', '/'];
        let currNumber = '';
        let currOperator = '+';
        let result = 0;
        let currentExpression = expression + '+'; 

        for (let i = 0; i < currentExpression.length; i++) {
            const char = currentExpression[i];

            if (operators.includes(char)) {
                if (currNumber !== '') {
                    result = applyOperator(result, currNumber, currOperator);
                }
                currOperator = char;
                currNumber = '';
            } else {
                currNumber += char;
            }
        }

        return result;
    };

    const applyOperator = (a, b, operator) => {
        const num1 = parseFloat(a);
        const num2 = parseFloat(b);

        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                if (num2 === 0) {
                    return "Zero division no allowed";
                }
                return num1 / num2;
            default:
                return 0;
        }
    };

    return (
        <div>
            <h2>Calculator</h2>
            <input type="text" value={input} readOnly />
            <div>
                <button onClick={() => handleInput('1')}>1</button>
                <button onClick={() => handleInput('2')}>2</button>
                <button onClick={() => handleInput('3')}>3</button>
                <button onClick={() => handleInput('+')}>+</button>
            </div>
            <div>
                <button onClick={() => handleInput('4')}>4</button>
                <button onClick={() => handleInput('5')}>5</button>
                <button onClick={() => handleInput('6')}>6</button>
                <button onClick={() => handleInput('-')}>-</button>
            </div>
            <div>
                <button onClick={() => handleInput('7')}>7</button>
                <button onClick={() => handleInput('8')}>8</button>
                <button onClick={() => handleInput('9')}>9</button>
                <button onClick={() => handleInput('*')}>*</button>
            </div>
            <div>
                <button onClick={() => handleInput('0')}>0</button>
                <button onClick={setOutput}>=</button>
                <button onClick={() => handleInput('/')}>/</button>
            </div>
        </div>
    );
};

export default Calculator;