import * as React from "react";
import Svg, { Path } from "react-native-svg";
const TaskIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 49 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2 16C2 8.26801 8.26801 2 16 2H33C40.732 2 47 8.26801 47 16V33C47 40.732 40.732 47 33 47H16C8.26801 47 2 40.732 2 33V16Z"
      stroke={props.color}
      strokeWidth={4}
    />
    <Path
      d="M12 24.4068L20.6667 32.9999L36.5 17.1667"
      stroke={props.color}
      strokeWidth={5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default TaskIcon;
