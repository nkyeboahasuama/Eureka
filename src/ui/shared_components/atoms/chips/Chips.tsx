import React from "react";
import { BaseChip, chipVariants } from "./ChipsStyles";

interface ChipsTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
}

const Chips: React.FC<ChipsTypes> = ({ variant, ...props }) => {
  const ChipsComponent =
    chipVariants[variant as keyof typeof chipVariants] || BaseChip;
  return <ChipsComponent {...props}>{variant}</ChipsComponent>;
};

export default Chips;
