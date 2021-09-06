import React from 'react'
import { maxY } from "./constants";

const wrapper = {
    display: 'grid',
    gridTemplateColumns: `repeat(${maxY}, 1fr)`,
    gridAutoRows: '200px',
    gridGap: '1px',
}

const Grid = () => {
    return (
        <div style={wrapper}>
            <div>One</div>
            <div>Two</div>
            <div>Three</div>
            <div>Four</div>
            <div>Five</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
        </div>
    )
}

export default Grid