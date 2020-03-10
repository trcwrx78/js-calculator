import React from 'react'

function Operands() {
    const signs = ['+', '-', 'x', '/']
    const names = ['add', 'subtract', 'multiply', 'divide']

    const opButtons = signs.map((sym, i) => {
        return (
            <div key={i} id={names[i]} className="btn">{sym}</div>
        )
    })

    return(
        <>
            {opButtons}
        </>
    )
}

export default Operands