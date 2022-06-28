import React from "react";
import { Button } from "@chakra-ui/react";

interface Props {
  isLoading: boolean;
  colorScheme:
    | "whiteAlpha"
    | "blackAlpha"
    | "gray"
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "teal"
    | "blue"
    | "cyan"
    | "purple"
    | "pink";
  variant: "ghost" | "outline" | "solid" | "link" | "unstyled";
  children?: React.ReactNode;
  onClick: () => void;
  ariaLabel: string;
}

// const BaseButton: React.FC<Props> = ({
const BaseButton = ({ isLoading, colorScheme = "gray", children, onClick, ariaLabel, variant = "solid" }: Props) => (
  <Button aria-label={ariaLabel} isLoading={isLoading} colorScheme={colorScheme} variant={variant} onClick={onClick}>
    {children}
  </Button>
);

export { BaseButton };
