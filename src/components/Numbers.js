import React from 'react'

function Numbers() {
    const nums = [0,1,2,3,4,5,6,7,8,9]
    const word = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

    const numButtons = nums.map((num, i) => {
        return (
            <div key={num} id={word[i]} className="btn">{num}</div>
        )
    })

    return(
        <>
            {numButtons}
        </>
    )
}

export default Numbers