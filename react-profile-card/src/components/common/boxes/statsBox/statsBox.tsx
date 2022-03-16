import React from "react";
import { palette } from "../../../../styles/colors";
import { fonts } from "../../../../styles/fonts";
import { BoldText, Text } from "../../texts/texts";
import { StatsBoxStyle  } from "./statsBox.jss";

interface IStatsBoxProps {
   value: string;
   title: string;
}

export const StatsBox = (props: IStatsBoxProps) => {
   const statsBoxStyle = StatsBoxStyle();

   return (
      <>
         <div className={statsBoxStyle.box}>
            <div className={statsBoxStyle.top}>
               <BoldText value={props.value} fontSize={fonts.sizes.big} color={palette.black} />
            </div>
            <div className={statsBoxStyle.bottom}>
               <Text value={props.title} fontSize={fonts.sizes.small} color={palette.grey} />
            </div>
         </div>
      </>
   );
}
