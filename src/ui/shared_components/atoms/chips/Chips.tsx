import React from "react";
import { BaseChip, chipVariants } from "./ChipsStyles";

interface ChipsTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "closed" | "open";
}

const Chips: React.FC<ChipsTypes> = ({ variant, ...props }) => {
  const ChipsComponent = chipVariants[variant || "closed"] || BaseChip;
  return <ChipsComponent {...props}>{variant}</ChipsComponent>;
};

export default Chips;
