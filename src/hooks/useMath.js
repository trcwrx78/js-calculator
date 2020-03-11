import React, { useState, useEffect } from 'react'


function Math() {
    const [numOne, setNumOne] = useState('0')
    const [numTwo, setNumTwo] = useState('')
    const [operand, setOperand] = useState('')
    const [numDisplay, setNumDisplay] = useState([])

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

    const signs = ['+', '-', 'x', '/']
    const names = ['add', 'subtract', 'multiply', 'divide']

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

    const symbol = ['.', '=', 'AC']
    const symbolNames = ['decimal', 'equals', 'clear']

    const workButtons = symbol.map((sym, i) => {
        return (
        <div 
            key={i}
            id={symbolNames[i]} 
            className="btn" 
            onClick={handleMath}>
                {sym}
            </div>
        )
    })

    function handleNum(number) {
        numOne === '0' ? setNumOne(number) : setNumOne(prev => prev + number)
    }

    function handleMath(e) {
        const { id } = e.target
        if(id === 'clear'){
            setNumOne('0')
        }
    }

    useEffect(() => {
        window.addEventListener('onclick', handleMath)
        return () => {
            window.removeEventListener('onclick', handleMath)
        }
    },[] )

    return { numButtons, workButtons, opButtons, numOne }
}

export default Math