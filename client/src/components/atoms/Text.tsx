import React from "react";
import styled from "styled-components";
import { theme } from "../../utils/theme";
import { LayoutProps, TextProps, MouseProps } from "../../interfaces";
import { medium, margin, marginTop, marginRight,marginLeft, marginBottom, regular, demiLight, light } from "../../utils";

const TextComponent = styled.p<LayoutProps & TextProps>`
  font-size: ${(p: TextProps) => 
    p.h1 ? `${theme.fontsizes.h1}px` :
    typeof p.fontSize === "string" ? p.fontSize : `${p.fontSize}px`};
  color: ${(p: TextProps) => p.color};

  ${medium};
  ${regular};
  ${demiLight};
  ${light};

  ${margin};
  ${marginTop};
  ${marginRight};
  ${marginLeft};
  ${marginBottom};
`;

const Text = ({h1, children, ...rest }: TextProps & LayoutProps & MouseProps) => {
  return(
    <TextComponent h1={h1} {...rest}>
      {children}
    </TextComponent>
  );
};

Text.defaultProps = {
  mg: "0px",
  color: theme.colors.black.primary
};

export default Text;