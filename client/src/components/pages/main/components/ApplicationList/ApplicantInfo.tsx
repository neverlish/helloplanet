import React from 'react';
import styled from "styled-components";
import {InputContainer, OrderNumber, Square} from "./ApplicantInput";
import Flex from '../../../../atoms/Flex';

interface Props {
  idx: number;
  name: string;
  nickname: string;
  arrival: string;
  comment: string;
};


const LastInfo = styled(Flex)`
  height: 100%;

  background-color: #f69174;
  color: white;
  font-family: NanumSquareB;
  font-size: 15px;
  line-height: 2.93;
  border-radius: 0 20px 20px 0;
  /* padding: 20px */
  padding-right: 20px;
  padding-left: 20px;
`;


const ApplicantInfo: React.FC<Props> = ({
  idx,
  name,
  nickname,
  arrival,
  comment
}) => {
  return (
    <InputContainer>
      <OrderNumber>{idx}</OrderNumber>
      <Square color="#3f4167">{name}</Square>
      <Square color="#933e60">{nickname}</Square>
      <Square color="#ee4465">{arrival}</Square>
      <LastInfo>{comment}</LastInfo>
    </InputContainer>
  );
};

export default ApplicantInfo;