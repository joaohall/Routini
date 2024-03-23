import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ExpandButtonIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={24}
      viewBox="0 -960 960 960"
      width={24}
      {...props}
    >
      <Path d="M480-345L240-585l56-56 184 184 184-184 56 56-240 240z" />
    </Svg>
  )
}

export default ExpandButtonIcon
