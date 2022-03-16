import React from "react";
import { BoldTextStyle, TextStyle  } from "./texts.jss";

interface ITextProps {
   value: string;
   fontSize: string;
   color: string;
}

export const BoldText = (props: ITextProps) => {
   const boldTextStyle = BoldTextStyle(props);

   return <>
      <span className={boldTextStyle.text}>{props.value}</span> 
   </>
}

export const Text = (props: ITextProps) => {
   const textStyle = TextStyle(props);

   return <>
      <span className={textStyle.text}>{props.value}</span> 
   </>
}
