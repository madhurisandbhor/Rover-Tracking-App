import {
  directionsToRight,
  directionsToLeft,
  defaultDir,
  x,
  y,
  maxX,
  maxY,
} from 'utils/constants'

const testGrid = (testString) => {
  const roverPosition = [x, y, defaultDir]
  const testArr = testString.split('')

  for (let i = 0; i < testArr.length; i++) {
    if (testArr[i] === 'r') {
      let currDirIndex = directionsToRight.findIndex(
        (item) => item === roverPosition[2]
      )
      if (currDirIndex > -1 && currDirIndex < 3)
        roverPosition[2] = directionsToRight[currDirIndex + 1]
      else roverPosition[2] = directionsToRight[0]
    } else if (testArr[i] === 'l') {
      let currDirIndex = directionsToLeft.findIndex(
        (item) => item === roverPosition[2]
      )
      if (currDirIndex > -1 && currDirIndex < 3)
        roverPosition[2] = directionsToLeft[currDirIndex + 1]
      else roverPosition[2] = directionsToLeft[0]
    } else if (testArr[i] === 'f') {
      if (roverPosition[2] === 'E') {
        if (roverPosition[1] < maxY) roverPosition[1]++
        else roverPosition[1] = 0
      } else if (roverPosition[2] === 'S') {
        if (roverPosition[0] < maxX) roverPosition[0]++
        else roverPosition[0] = 0
      } else if (roverPosition[2] === 'N') {
        if (roverPosition[0] <= 0) roverPosition[0] = maxX
        else roverPosition[0]--
      } else if (roverPosition[2] === 'W') {
        if (roverPosition[1] <= 0) roverPosition[1] = maxY
        else roverPosition[1]--
      }
    }
  }

  return roverPosition
}

export default testGrid
