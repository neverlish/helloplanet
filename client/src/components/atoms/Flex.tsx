import React from "react";
import styled from "styled-components";
import { FlexProps, LayoutProps, BorderProps } from "../../interfaces";
import { margin, marginBottom, paddingTop } from "../../utils";

const Flex = styled.div<FlexProps & LayoutProps & BorderProps>`
  display: flex;
  flex-direction: ${(p: FlexProps) =>
  p.column ? 'column' : p.row ? 'row' : "row"};
  justify-content: ${(p: FlexProps) => p.center ? "center" : p.justifyContent};
  align-items: ${(p: FlexProps) => p.center ? "center" : p.alignItems};
  background-color: ${(p: LayoutProps) => p.bg};
  width: ${(p: LayoutProps) => p.w};
  height: ${(p: LayoutProps) => p.h};
  border-radius: ${(p: BorderProps) => p.borderRadius};

  ${margin};
  ${marginBottom};
  ${paddingTop};
`

Flex.defaultProps = {
  row: true,
  w: 'auto',
  h: 'auto',
  justifyContent: 'flex-start',
  alignItems: 'center',
  center: false,
  bg: 'transparent',
};

export default Flex;