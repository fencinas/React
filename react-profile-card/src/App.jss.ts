import { createUseStyles } from "react-jss";
import { colors } from "./styles/colors";
import { images } from "./styles/images";

export const AppStyle = createUseStyles(() => ({
   app: {
      backgroundColor: colors.site.background,
      backgroundImage: "url(" + images.bgPatternTop + "), url(" + images.bgPatternBottom + ")",
      backgroundRepeat: "no-repeat, no-repeat",
      backgroundPosition: "bottom 40vh right 50vw, top 40vh left 50vw",
      minHeight: "100vh",
      color: colors.site.color,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
   }
}))