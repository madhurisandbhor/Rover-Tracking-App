import React from 'react'
import { maxX, maxY } from "./constants";

const Grid = () => {
    const grid = [maxX + 1, maxY + 1]
    return (
        <div className="wrapper">
            <div>One</div>
            <div>Two</div>
            <div>Three</div>
            <div>Four</div>
            <div>Five</div>
        </div>
    )
}

export default Grid