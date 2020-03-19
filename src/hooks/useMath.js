import React, { useState } from 'react'


function Math() {
    const [lastNum, setLastNum] = useState('')
    const [calculation, setCalculation] = useState('')
    const [currentNum, setCurrentNum] = useState('0')
    const [operand, setOperand] = useState('')

    const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
    const signs = ['/', '*', '+', '-', '=']

    const numButtons = nums.map((num) => {
        return (
            <button 
                key={num}  
                className="btn"
                onClick={handleClick}>
                    {num}
            </button>
        )
    })

    const opButtons = signs.map((sym) => {
        return (
            <button 
                key={sym} 
                className="btn" 
                onClick={handleClick}>
                    {sym}
            </button>
        )
    })

    function handleClick(e) {
        const { innerText } = e.target

        switch(innerText){
            case 'AC': {
                setCurrentNum('0')
                setCalculation('')
                break
            }
            case '=': {
                const doCalc = eval(calculation)
                setCurrentNum(doCalc)
                setCalculation(doCalc)
                break
            }
            default: {
                let e = undefined

                if(signs.includes(lastNum) && signs.includes(innerText)) {
                    e = calculation.slice(0, -1) + innerText
                } else {
                    e = currentNum === '0' ? innerText : currentNum + innerText
                }

                setCurrentNum(e)
                setCalculation(e)
                setLastNum(innerText)
            }
        }
    }

    // function handleClick(e) {
    //     const { innerText } = e.target

    //     setLastNum(innerText)
        
    //     if(!Number.isNaN(Number(innerText))) {
    //         if(currentNum === '0'){
    //             setCurrentNum(innerText)
    //         }else if(operand.includes(lastNum)) {
    //             setCurrentNum(innerText)
    //         }else {
    //             setCurrentNum(prev => prev + innerText)
    //         }
    //         return
    //     }

    //     switch(innerText){
    //         case 'AC': {
    //             setCurrentNum('0')
    //             setCalculation('')
    //             setOperand('')
    //             break
    //         }
    //         case '.': {
    //             if(!currentNum.includes('.')) {
    //                 setCurrentNum(prev => prev + innerText)
    //             }
    //             break
    //         }
    //         default: {
    //             if(!operand) {
    //                 setOperand(innerText)
    //                 setCalculation(currentNum)
    //                 setCurrentNum('')
    //             } else if (innerText === '=') {
    //                 const doMath = eval(`${calculation} ${operand} ${currentNum}`)
    //                 setOperand('')
    //                 setCalculation(doMath)
    //                 setCurrentNum(doMath)
    //             } else {
    //                 const doMath = eval(`${calculation} ${operand} ${currentNum}`)
    //                 setOperand(innerText)
    //                 setCalculation(doMath)
    //                 setCurrentNum(doMath)
    //             }
    //         }
    //     }

    return { numButtons, opButtons, currentNum, calculation, operand, handleClick }
}

export default Math

    //     if(id === 'decimal') {
    //         setNumDisplay(prev => prev.includes('.') ? prev + '' : prev + '.')
    //     }

    //     if(id === 'add' || 'subtract' || 'multiply' || 'divide') {
    //         id === 'decimal' ? setHolder(numDisplay) : setNumOne(numDisplay)
    //     }
        
    //     if (id === 'add') {
    //         if (!operand) {
    //             setOperand('+')
    //             setNumDisplay('+')
    //             setToggle(true)
    //         } else {
    //             calculate(numOne, operand, numDisplay)
    //         }
    //     }

    //     if (id === 'subtract') {
    //         if (!operand) {
    //             setOperand('-')
    //             setNumDisplay('-')
    //             setToggle(true)
    //         } else {
    //             calculate(numOne, operand, numDisplay)
    //         }
    //     }

    //     if (id === 'multiply') {
    //         if (!operand) {
    //             setOperand('x')
    //             setNumDisplay('x')
    //             setToggle(true)
    //         } else {
    //             calculate(numOne, operand, numDisplay)
    //         }
    //     }

    //     if (id === 'divide') {
    //         if (!operand) {
    //             setOperand('/')
    //             setNumDisplay('/')
    //             setToggle(true)
    //         } else {
    //             calculate(numOne, operand, numDisplay)
    //         }
    //     }

    //     if (id === 'equals') {
    //         calculate(numOne, operand, numDisplay)
    //         setToggle(true)
    //     }
        
    // }

    // function calculate(n1, op, n2) {
    //     if(op === '+') {
    //         return parseFloat(n1) + parseFloat(n2)
    //     }

    //     if(op === '-') {
    //         return parseFloat(n1) - parseFloat(n2)
    //     }

    //     if(op === '×') {
    //         return parseFloat(n1) * parseFloat(n2)
    //     }

    //     if(op === '/') {
    //         return parseFloat(n1) / parseFloat(n2)
    //     }
    // }