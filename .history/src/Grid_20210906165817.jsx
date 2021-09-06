import React from 'react'
import { maxY, maxX } from "./constants";

const wrapper = {
    display: 'grid',
    gridTemplateColumns: `repeat(${maxY}, 20px)`,
    gridTemplateRows: `repeat(${maxX}, 20px)`,
    gridAutoRows: '20px',
    gridAutoColumns: '20px',
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