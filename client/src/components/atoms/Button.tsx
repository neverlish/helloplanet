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
  disabled?: boolean;
  disabledColor?: string;
};

interface ButtonContainerProps {
  color?: string;
  hover?: boolean;
  hoverColor?: string;
  onClick?: () => void;
  disabled?: boolean;
  disabledColor?: string;
}

const ButtonContainer = styled(Flex)<ButtonContainerProps & LayoutProps & TextProps & MouseProps & BorderProps>``;

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
  disabled,
  disabledColor,
  fontSize,
  ...rest
}) => {
  return(
    <ButtonContainer
      as="button"
      disabled={disabled}
      disabledColor={disabledColor}
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
        fontSize={fontSize}
        cursor="pointer"
        color={color}
      >
        {label}
      </Text>
    </ButtonContainer>
  );
};

Button.defaultProps = {
  w: '100%',
  borderRadius: '10px',
  fontSize: theme.fontsizes.label,
  hover: false
};
export default Button 