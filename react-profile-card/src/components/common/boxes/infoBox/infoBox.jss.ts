import { createUseStyles } from "react-jss";

export const InfoBoxStyle = createUseStyles(() => ({
   box: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
   },

   top: {
      display: "flex",
      flexDirection: "row",
   },

   age: {
      paddingLeft: "10px"
   },

   bottom: {
      paddingTop: "7px"
   }
}))