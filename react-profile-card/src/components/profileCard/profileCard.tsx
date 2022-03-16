import { ProfileCardStyle } from "./profileCard.jss";
import { RoundImage } from "../common/images/images";
import { StatsBox } from "../common/boxes/statsBox/statsBox";
import { InfoBox } from "../common/boxes/infoBox/infoBox";
import { palette } from "../../styles/colors";
import { images } from "../../styles/images";
import { borders } from "../../styles/borders";
import { widths } from "../../styles/widths";

export const ProfileCard = () => {
   const profileCardStyle = ProfileCardStyle();

   return (
      <>
         <div className={profileCardStyle.container}>
            <div className={profileCardStyle.header}>
               <div className={profileCardStyle.headerImage}>
                  <RoundImage src={images.imageProfile} alt="Fran Encinas" width={widths.profileCard.image} height={widths.profileCard.image} 
                              borderWidth={borders.profileCard.image} borderColor={palette.white} />
               </div>
            </div>
            <div className={profileCardStyle.body}>
               <InfoBox name="Fran Encinas" age="37" location="Valencia" />
            </div>
            <div className={profileCardStyle.footer}>
               <StatsBox title="Followers" value="80K" />
               <StatsBox title="Likes" value="803K" />
               <StatsBox title="Photos" value="1.4K" />
            </div>
         </div>
      </>
   );
}