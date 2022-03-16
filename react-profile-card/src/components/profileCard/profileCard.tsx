import { ProfileCardStyle } from "./profileCard.jss";
import { RoundImage } from "../common/images/images";
import { StatsBox } from "../common/boxes/statsBox/statsBox";
import { InfoBox } from "../common/boxes/infoBox/infoBox";
import { palette } from "../../styles/colors";
import { borders } from "../../styles/borders";
import { widths } from "../../styles/widths";
import IUser from "../../models/user";

interface IProfileCardProps {
   user: IUser;
}

export const ProfileCard = (props: IProfileCardProps) => {
   const profileCardStyle = ProfileCardStyle();

   const stats = props.user.stats.map((stat) => <StatsBox key={stat.name} title={stat.name} value={stat.value} /> );

   return (
      <>
         <div className={profileCardStyle.container}>
            <div className={profileCardStyle.header}>
               <div className={profileCardStyle.headerImage}>
                  <RoundImage src={props.user.picture} alt={props.user.name} width={widths.profileCard.image} height={widths.profileCard.image} 
                              borderWidth={borders.profileCard.image} borderColor={palette.white} />
               </div>
            </div>
            <div className={profileCardStyle.body}>
               <InfoBox name={props.user.name} age={props.user.age} location={props.user.location} />
            </div>
            <div className={profileCardStyle.footer}>
               {stats}
            </div>
         </div>
      </>
   );
}