import React from "react";
import { palette } from "../../../../styles/colors";
import { fonts } from "../../../../styles/fonts";
import { BoldText, Text } from "../../texts/texts";
import { InfoBoxStyle  } from "./infoBox.jss";

interface IInfoBoxProps {
   name: string;
   age: string;
   location: string;
}

export const InfoBox = (props: IInfoBoxProps) => {
   const infoBoxStyle = InfoBoxStyle();

   return (
      <>
         <div className={infoBoxStyle.box}>
            <div className={infoBoxStyle.top}>
               <BoldText value={props.name} fontSize={fonts.sizes.big} color={palette.black} />
               <div className={infoBoxStyle.age}><Text value={props.age} fontSize={fonts.sizes.big} color={palette.grey} /></div>
            </div>
            <div className={infoBoxStyle.bottom}>
               <Text value={props.location} fontSize={fonts.sizes.medium} color={palette.grey} />
            </div>
         </div>
      </>
   );
}
