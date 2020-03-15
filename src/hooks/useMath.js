import React, { useState } from 'react'


function Math() {
    const [numOne, setNumOne] = useState('')
    const [operand, setOperand] = useState('')
    const [numDisplay, setNumDisplay] = useState('0')
    const [toggle, setToggle] = useState(false)
    const [holder, setHolder] = useState('')

    const nums = ['0','1','2','3','4','5','6','7','8','9']
    const word = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

    const numButtons = nums.map((num, i) => {
        return (
            <div 
                key={num} 
                id={word[i]}
                className="btn" 
                onClick={() => handleNum(num)}>
                    {num}
            </div>
        )
    })

    const signs = ['+', '-', 'x', '/', '.', '=', 'AC']
    const names = ['add', 'subtract', 'multiply', 'divide', 'decimal', 'equals', 'clear']

    const opButtons = signs.map((sym, i) => {
        return (
            <div 
                key={i} 
                id={names[i]} 
                className="btn" 
                onClick={handleMath}>
                    {sym}
                </div>
        )
    })

    function handleNum(number) {
        numDisplay === '0' || toggle ? setNumDisplay(number) : setNumDisplay(prev => prev + number)
        setToggle(false)
    }

    function handleMath(e) {
        const { id } = e.target
        if(id === 'clear'){
            setNumDisplay('0')
            setNumOne('')
            setOperand('')
        }

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
        }
        
    }

    function calculate(n1, op, n2) {
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
    }

    return { numButtons, opButtons, numDisplay }
}

export default Math