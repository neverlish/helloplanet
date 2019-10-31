import React from "react";
import styled from "styled-components";
import { LayoutProps, BorderProps, TextProps } from "../../interfaces";
import { theme } from "../../utils/theme";
import { margin, padding, paddingLeft, marginBottom } from "../../utils";

const Input = styled.input.attrs(p => ({
  type: p.type,
}))<LayoutProps & BorderProps & TextProps>`
  outline: none;
  width: ${(p: LayoutProps) => p.w};
  height: ${(p: LayoutProps) => p.h};
  border: ${(p: BorderProps) => p.border};
  border-radius: ${(p: BorderProps) => p.borderRadius};
  font-size: ${(p: TextProps) => typeof p.fontSize === "number" ? `${p.fontSize}px` : p.fontSize};
  
  ${margin};
  ${marginBottom};

  ${padding};
  ${paddingLeft};
`;

Input.defaultProps = {
  mg: 0,
  borderRadius: "10px",
  border: `1px solid ${theme.colors.black.primary}`,
  fontSize: theme.fontsizes.label,
  pl: '24px',
  type: "text",
};

export default Input;