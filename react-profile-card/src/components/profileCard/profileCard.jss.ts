import { createUseStyles } from "react-jss";
import { borders } from "../../styles/borders";
import { palette } from "../../styles/colors";
import { images } from "../../styles/images";
import { widths } from "../../styles/widths";

export const ProfileCardStyle = createUseStyles (() => ({
   container: {
      background: palette.white,
      width: widths.profileCard.container,
      borderRadius: borders.profileCard.radius,
      display: "flex",
      flexDirection: "column"
   },

   header: {
      height: "140px",
      background: "url(" + images.bgPatternCard + ")",
      borderTopLeftRadius: borders.profileCard.radius,
      borderTopRightRadius: borders.profileCard.radius,
      display: "flex",
      justifyContent: "center"
   },

   headerImage: {
      position: "relative",
      top: "87px",
   },

   body: {
      height: "80px",
      marginTop: "70px",
      display: "flex",
      justifyContent: "center",
   },

   footer: {
      height: "90px",
      borderTop: "1px solid " + palette.greyLight,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
   }
}))