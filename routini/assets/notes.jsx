import * as React from "react";
import Svg, { Path } from "react-native-svg";
const NotesIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    {...props}
    fill={props.color}
  >
    <Path  d="M120-240v-80h480v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
  </Svg>
);
export default NotesIcon;
