import React from "react";
import styled from "styled-components";
import Flex from "../atoms/Flex";
import Text from "../atoms/Text";
import { theme } from "../../utils/theme";
import { LayoutProps, TextProps } from "../../interfaces";

interface ButtonProps {
  color?: string;
  label: string;
  w?: string | number;
  h?: string | number;
  borderRadius?: string;
};

const Button: React.FC<ButtonProps & LayoutProps & TextProps> = ({color, label, w, h, borderRadius, ...rest}) => {
  return(
    <Flex
      center
      bg={color}
      w={w}
      h={h}
      borderRadius={borderRadius}
      {...rest}
    >
      <Text
        fontSize={theme.fontsizes.label}
        color="white"
      >
        {label}
      </Text>
    </Flex>
  );
};

Button.defaultProps = {
  w: '100%',
  borderRadius: '10px',
};
export default Button 