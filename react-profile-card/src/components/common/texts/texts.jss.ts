import { createUseStyles } from "react-jss";

export const BoldTextStyle = createUseStyles(() => ({
   text: (props: any) => ({
      fontWeight: 700,
      fontSize: props.fontSize,
      color: props.color
   })
}))

export const TextStyle = createUseStyles(() => ({
   text: (props: any) => ({
      fontSize: props.fontSize,
      color: props.color,
      letterSpacing: "2px"
   })
}))