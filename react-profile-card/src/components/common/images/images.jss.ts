import { createUseStyles } from "react-jss";

export const RoundImageStyled = createUseStyles(() => ({
   roundImage: (props: any) => ({
      width: props.width,
      height: props.height,
      borderRadius: "50%",
      borderWidth: props.borderWidth,
      borderStyle: "solid",
      borderColor: props.borderColor
   })
}))