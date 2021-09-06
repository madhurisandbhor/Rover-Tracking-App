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
    const gridLength = maxX * maxY
    return (
        <div style={wrapper}>
            {Array(gridLength).fill().map(<div style={item} />)}
        </div>
    )
}

export default Grid