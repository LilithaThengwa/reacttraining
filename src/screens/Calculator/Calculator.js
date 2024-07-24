import React, { useEffect, useState } from "react";
// import Calculator from "../../component/Calculator";
import { useNavigate } from "react-router-dom";

// const Calculator = () => {
//   const navigate = useNavigate();
//   const [counter, setCounter] = useState(0);
//   useEffect(() => {
//     // heavy lifting job
//    console.log("useEffect is been triggered!"); //2
//   }, []); // [] - array dependency
//   console.log("Home function is been called."); //1
//   // if(counter === 0) {
//   //   return (
//   //     <React.Fragment>
//   //       <h1>{`Counter - ${counter}`}</h1>
//   //       <p>Let's start the counter!</p>
//   //       <button onClick={() => setCounter(counter+1)}>Increment</button>
//   //     </React.Fragment>
//   //   )
//   // }
//   const navigateTo = () => {
//     navigate('/about');
//   }
//   // const renderItem = () => {
//   //   return [].map(item => <li></li>)
//   // }
//   return (
//     <div>
//       <h1>{`Counter - ${counter}`}</h1>
//       <CustomText counterValue={counter} />
//       <button onClick={() => setCounter(counter+1)}>Increment</button>
//       <button onClick={() => navigateTo()}>Go to about page</button>
//     </div>
//   )
// };
 
// export default Home;

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
 