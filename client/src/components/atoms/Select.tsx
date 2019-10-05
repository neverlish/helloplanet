import React from "react";
import styled, { keyframes } from "styled-components";
import Flex from "./Flex";
import Button from "./Button";
import _ from "lodash";
import { theme } from "../../utils/theme";

const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const fadeOut = keyframes`
0% {
  opacity: 1;
}
100% {
  opacity: 0;
}
`;

interface SelectProps {
  label: string;
  options: string[];
};

const SelectButton = styled(Button)``;

const Option = styled(Button)<{selected: boolean}>`

background-color: ${p => p.selected ? p.hoverColor : p.bg};

:hover {
  background-color: ${p => p.hoverColor};
}
`;

const OptionContainer = styled(Flex)<{isShow: boolean}>`
  animation: ${({ isShow }) => isShow ? fadeIn : fadeOut} 0.25s ease-in-out 1 normal both;
`;


const Select: React.FC<SelectProps> = ({label, options}) => {
  const [isShow, toggleState] = React.useState(false);
  const [selected, handleSelect] = React.useState("");
  return(
    <Flex column w="100%">
      <SelectButton
        label={selected === "" ? label : selected}
        h="75px" 
        mb="10px"
        border={`1px solid ${theme.colors.black.primary}`}
        onClick={() => toggleState(!isShow)}
      />
      { isShow && <OptionContainer column w="100%" isShow={isShow}>
        {_.map(options, option =>
          <Option
            label={option}
            w="100%"
            h="75px"
            hover
            selected={selected === option}
            hoverColor={theme.colors.black.primary}
            color="white"
            bg={theme.colors.black.secondary}
            mb="10px"
            onClick={() => {
              handleSelect(option);
              toggleState(!isShow);
            }}
          />
        )}
      </OptionContainer>}
    </Flex>
  );
};

export default Select;