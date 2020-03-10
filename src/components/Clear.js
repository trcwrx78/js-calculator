import React from 'react'
import useMath from '../hooks/useMath'

function Clear() {
    const { handleClear } = useMath()

    return(
        <div id="clear" className="btn btn-clear" onClick={() => handleClear()}>
            AC
        </div>
    )
}

export default Clear