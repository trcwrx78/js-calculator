import React, { useState } from 'react'


function Math() {
    const [lastNum, setLastNum] = useState('')
    const [calculation, setCalculation] = useState('0')

    const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
    const numNames = ['seven', 'eight', 'nine', 'four', 'five', 'six', 'one', 'two', 'three', 'zero']
    const signs = ['/', '*', '+', '-']
    const signNames = ['divide', 'multiply', 'add', 'subtract']

    const numButtons = nums.map((num, i) => {
        return (
            <button 
                key={num}
                id={numNames[i]}  
                className="btn"
                onClick={handleClick}>
                    {num}
            </button>
        )
    })

    const opButtons = signs.map((sym, i) => {
        return (
            <button 
                key={sym}
                id={signNames[i]}
                className="btn btn-ops" 
                onClick={handleClick}>
                    {sym}
            </button>
        )
    })

    function handleClick(e) {
        const { innerText } = e.target

        switch(innerText){
            case 'AC': {
                setCalculation('0')
                break
            }
            case '=': {
                const doCalc = eval(calculation)
                setCalculation(doCalc)
                break
            }
            case '.': {
                const re = calculation.split(/[+\-*/]/)
                const last = re.slice(-1)[0]

                if(!last.includes('.')) {
                    setCalculation(prev => prev + '.')
                }
                break
            }
            default: {
                let e = undefined

                if(signs.includes(innerText)){
                    if(signs.includes(lastNum) && innerText !== '-') {
                        const last = calculation.split('').reverse()
                            .findIndex(char => nums.includes(+char))
                        e = calculation.slice(0, last + 2) + ` ${innerText} `
                    } else {
                        e = `${calculation} ${innerText} `
                    }
                } else {
                    e = calculation === '0' ? innerText : calculation + innerText
                }

                setCalculation(e)
            }
            setLastNum(innerText)
        }
    }
    return { numButtons, opButtons, calculation, handleClick }
}

export default Math