import React from 'react'
import { maxY, maxX } from "./constants";

const wrapper = {
    display: 'grid',
    gridTemplateColumns: `repeat(${maxY}, 100px)`,
    gridTemplateRows: `repeat(${maxX}, 100px)`,
    gridAutoRows: '20px',
    gridAutoColumns: '20px',
    gridGap: '1px',
}

const item = {
    padding: '10px',
    backgroundColor: '#ccc',
}

const Grid = () => {
    // const gridLength = (maxX + 1) * (maxY + 1)
    const arr = Array(100).fill();
    
    return (
        <div style={wrapper}>
            {arr.map(<div style={item} />)}
        </div>
    )
}

export default Grid