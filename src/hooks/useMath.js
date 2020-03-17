import React, { useState } from 'react'


function Math() {
    const [lastNum, setLastNum] = useState('')
    const [prevNum, setPrevNum] = useState('')
    const [currentNum, setCurrentNum] = useState('0')
    const [operand, setOperand] = useState('')
    const [numDisplay, setNumDisplay] = useState('0')
    const [toggle, setToggle] = useState(false)
    const [holder, setHolder] = useState('')

    const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
    const signs = ['/', '×', '+', '-', '.', '=', 'AC']

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
                setPrevNum('')
                break
            }
            
        }

        if(!Number.isNaN(Number(innerText))) {
            if(currentNum === '0'){
                setCurrentNum(innerText)
            } else {
                setCurrentNum(prev => prev + innerText)
            }
        }

        setLastNum(innerText)
        /*
        if(id === 'decimal') {
            setNumDisplay(prev => prev.includes('.') ? prev + '' : prev + '.')
        }

        if(id === 'add' || 'subtract' || 'multiply' || 'divide') {
            id === 'decimal' ? setHolder(numDisplay) : setNumOne(numDisplay)
        }
        
        if (id === 'add') {
            if (!operand) {
                setOperand('+')
                setNumDisplay('+')
                setToggle(true)
            } else {
                calculate(numOne, operand, numDisplay)
            }
        }

        if (id === 'subtract') {
            if (!operand) {
                setOperand('-')
                setNumDisplay('-')
                setToggle(true)
            } else {
                calculate(numOne, operand, numDisplay)
            }
        }

        if (id === 'multiply') {
            if (!operand) {
                setOperand('x')
                setNumDisplay('x')
                setToggle(true)
            } else {
                calculate(numOne, operand, numDisplay)
            }
        }

        if (id === 'divide') {
            if (!operand) {
                setOperand('/')
                setNumDisplay('/')
                setToggle(true)
            } else {
                calculate(numOne, operand, numDisplay)
            }
        }

        if (id === 'equals') {
            calculate(numOne, operand, numDisplay)
            setToggle(true)
        }*/
        
    }

    /*function calculate(n1, op, n2) {
        console.log(n1, op, n2)
        console.log(operand)
        if(op === '+') {
            setNumDisplay(parseFloat(n1) + parseFloat(n2))
            setNumOne(numDisplay)
            setOperand('')
        }

        if(op === '-') {
            setNumDisplay(parseFloat(n1) - parseFloat(n2))
            setNumOne(numDisplay)
            setOperand('')
        }

        if(op === 'x') {
            setNumDisplay(parseFloat(n1) * parseFloat(n2))
            setNumOne(numDisplay)
            setOperand('')
        }

        if(op === '/') {
            setNumDisplay(parseFloat(n1) / parseFloat(n2))
            setNumOne(numDisplay)
            setOperand('')
        }
    }*/

    return { numButtons, opButtons, currentNum, handleClick }
}

export default Math