import React from 'react'

function Math() {
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

    return { Addition, Subtraction, Multiplication, Division }
}

export default Math