import React from 'react'
import { maxY } from "./constants";

const wrapper = {
    display: 'grid',
    gridTemplateColumns: `repeat(${maxY}, 1fr)`,
    gridTemplateRows: `repeat(${maxX}, 1fr)`,
    gridAutoRows: '200px',
    gridGap: '1px',
}

const item = {
    padding: '10px',
    backgroundColor: '#ccc',
}

const Grid = () => {
    return (
        <div style={wrapper}>
            <div style={item}>One</div>
            <div style={item}>Two</div>
            <div style={item}>Three</div>
            <div style={item}>Four</div>
            <div style={item}>Five</div>
            <div style={item}>6</div>
            <div style={item}>7</div>
            <div style={item}>8</div>
            <div style={item}>9</div>
            <div style={item}>10</div>
        </div>
    )
}

export default Grid