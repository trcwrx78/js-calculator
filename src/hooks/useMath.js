import React, { useState, useEffect } from 'react'

function Math() {
    const [mathArr, setMathArr] = useState('0')

    function Calc(num) {
        setMathArr(prev => prev + num)
    }
    
    function Addition(a,b) {
        return a + b
    }

    function Subtraction(a,b) {
        return a - b
    }

    function Multiplication(a,b) {
        return a * b
    }

    function Division(a,b) {
        return a / b
    }

    const nums = [0,1,2,3,4,5,6,7,8,9]
    const word = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

    const numButtons = nums.map((num, i) => {
        return (
            <div 
                key={num} 
                id={word[i]} 
                className="btn" 
                onClick={() => Calc(num)}>
                    {num}
            </div>
        )
    })

    function handleClear() {
        console.log('hello')
        setMathArr(0)
    }

    /*useEffect(() => {
        window.addEventListener('onClick', handleClear)
        return () => {
            window.removeEventListener('onClick', handleClear)
        }
    },[] )*/

    return { Addition, Subtraction, Multiplication, Division, mathArr, numButtons, handleClear }
}

export default Math