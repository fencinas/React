import React from "react";
import { RoundImageStyled  } from "./images.jss";

interface IImageProps {
   src: string;
   alt: string;
   width: string;
   height: string;
   borderWidth: string;
   borderColor: string;
}

export const RoundImage = (props: IImageProps) => {
   const roundImageStyled = RoundImageStyled(props);

   return <>
      <img className={roundImageStyled.roundImage} src={props.src} alt={props.alt} />
   </>
}
