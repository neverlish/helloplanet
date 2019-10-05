import React from "react";
import styled from "styled-components";
import Flex from "../atoms/Flex";
import Text from "../atoms/Text";
import { theme } from "../../utils/theme";
import { LayoutProps, TextProps, MouseProps, BorderProps } from "../../interfaces";

interface ButtonProps {
  color?: string;
  label: string;
  hover?: boolean;
  hoverColor?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps & LayoutProps & TextProps & MouseProps & BorderProps> = ({
  color,
  bg,
  label,
  w,
  h,
  borderRadius,
  hover,
  hoverColor,
  cursor,
  ...rest
}) => {
  return(
    <Flex
      center
      bg={bg}
      w={w}
      h={h}
      borderRadius={borderRadius}
      hover={hover}
      hoverColor={hoverColor}
      cursor="pointer"
      {...rest}
    >
      <Text
        fontSize={theme.fontsizes.label}
        cursor="pointer"
        color={color}
      >
        {label}
      </Text>
    </Flex>
  );
};

Button.defaultProps = {
  w: '100%',
  borderRadius: '10px',
  hover: false
};
export default Button 