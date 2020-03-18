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
                setOperand('')
                break
            }
            case '=': {
                const doMath = eval(calculation)
                setCurrentNum(doMath)
                setCalculation(doMath)
            }
            default: {
                const e = currentNum === '0' ? innerText : currentNum + innerText
                setCalculation(e)
                setCurrentNum(e)
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