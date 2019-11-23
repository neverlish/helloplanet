import styled from "styled-components";
import { FlexProps, LayoutProps, BorderProps, MouseProps } from "../../interfaces";
import { margin, marginBottom, marginLeft, paddingTop, marginTop, paddingLeft } from "../../utils";

const Flex = styled.div<FlexProps & LayoutProps & BorderProps & MouseProps & BorderProps>`
  display: flex;
  flex-direction: ${(p: FlexProps) =>
  p.column ? 'column' : p.row ? 'row' : "row"};
  justify-content: ${(p: FlexProps) => p.center ? "center" : p.justifyContent};
  align-items: ${(p: FlexProps) => p.center ? "center" : p.alignItems};
  background-color: ${(p: LayoutProps) => p.bg};
  width: ${(p: LayoutProps) => p.w};
  height: ${(p: LayoutProps) => p.h};
  border: ${(p: BorderProps) => p.border};
  border-radius: ${(p: BorderProps) => p.borderRadius};
  position: ${(p: LayoutProps) => p.position};
  ${margin};
  ${marginTop};
  ${marginBottom};
  ${marginLeft};
  ${paddingTop};
  ${paddingLeft};

  :hover {
    background-color: ${(p: LayoutProps) => p.hover ? p.hoverColor : "none"}
  }
`

Flex.defaultProps = {
  row: true,
  w: 'auto',
  h: 'auto',
  justifyContent: 'flex-start',
  alignItems: 'center',
  center: false,
  bg: 'transparent',
  hover: false,
  position: 'static',
};

export default Flex;