import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DashboardIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={26}
      viewBox="0 -960 960 960"
      width={26}
      {...props}
      fill={props.color}
    >
      <Path d="M280-280h80v-200h-80v200zm320 0h80v-400h-80v400zm-160 0h80v-120h-80v120zm0-200h80v-80h-80v80zM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200zm0-80h560v-560H200v560zm0-560v560-560z" />
    </Svg>
  )
}

export default DashboardIcon
