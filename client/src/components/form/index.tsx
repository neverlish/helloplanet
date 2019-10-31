import React from "react";
import styled from "styled-components";
import Flex from "../atoms/Flex";
import Input from "../atoms/Input";

export const ErrorMessage = styled.div`
position: absolute;
right: -136px;
top: 22px;
width: 133px;
height: 45px;
white-space: pre-wrap;

font-size: 17px;
`;

export const renderField = (field: any) => {
const {input, meta: { touched, error }, placeholder, type} = field;
  return(
    <Flex w="100%" position="relative">
    <Flex
      w="100%"
      position="relative"
    >
    <Input
      {...input}
      type={type}
      placeholder={placeholder}
      w="100%"
      h="75px"
      mb="20px"
    />
    {touched && error && 
    <div
      style={{
        position: 'absolute',
        right: "15px",
        top: "17px",
        objectFit: 'contain',
        width: "43px",
        height: "43px"
      }}
    >
      <img
        src="assets/alert.png"
        srcSet="assets/alert_2x.png 2x, assets/alert_3x.png 3x"
        alt="alert icon image"
      />
    </div>}
    </Flex>
    {touched && error &&
      <ErrorMessage>{error}</ErrorMessage>}
    </Flex>
  );
};
