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
        </div>
    )
}

export default Grid