import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DoneIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={28}
      viewBox="0 -960 960 960"
      width={28}
      {...props}
      fill={'white'}
    >
      <Path d="M382-240L154-468l57-57 171 171 367-367 57 57-424 424z" />
    </Svg>
  )
}

export default DoneIcon