import React from 'react'
import { maxY, maxX } from "./constants";

const wrapper = {
    display: 'grid',
    gridTemplateColumns: `repeat(${maxY}, 1fr)`,
    gridTemplateRows: `repeat(${maxX}, 1fr)`,
    gridAutoRows: '20px',
    gridGap: '1px',
}

const item = {
    padding: '10px',
    backgroundColor: '#ccc',
}

const Grid = () => {
    return (
        <div style={wrapper}>
           
            <div style={item}></div>
            <div style={item}></div>
            <div style={item}></div>
            <div style={item}></div>
            <div style={item}></div>
            <div style={item}></div>
            <div style={item}></div>
            <div style={item}></div>

        </div>
    )
}

export default Grid