import * as React from "react"
import Svg, { Path } from "react-native-svg"

const FacebookSVG = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Ebene 1"
    viewBox="0 0 1024 1024"
    {...props}
  >
    <Path
      fill="#1877f2"
      d="M1024 512C1024 229.23 794.77 0 512 0S0 229.23 0 512c0 255.554 187.231 467.37 432 505.778V660H302V512h130V399.2C432 270.88 508.439 200 625.39 200 681.407 200 740 210 740 210v126h-64.563C611.835 336 592 375.467 592 415.957V512h142l-22.7 148H592v357.778C836.769 979.37 1024 767.554 1024 512Z"
    />
    <Path
      fill="#fff"
      d="M711.3 660 734 512H592v-96.043c0-40.49 19.835-79.957 83.437-79.957H740V210s-58.592-10-114.61-10C508.438 200 432 270.88 432 399.2V512H302v148h130v357.778a517.396 517.396 0 0 0 160 0V660Z"
    />
  </Svg>
)

export default FacebookSVG
