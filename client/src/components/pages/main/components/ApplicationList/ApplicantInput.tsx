import React from 'react';
import styled from "styled-components";
import Flex from '../../../../atoms/Flex';

interface Props {
  name: string;
  nickName: string;
  count: number;
};

export const InputContainer = styled(Flex)`
  height: 40px;
`;

export const OrderNumber = styled(Flex)`
  width: 58px;
  height: 100%;
  background-color: #2a374e;
  color: white;
  font-family: NanumSquareB;
  font-size: 15px;
  line-height: 2.93;
  border-radius: 20px 0 0 20px;
  justify-content: center;
`;

export const Square = styled(Flex)`
  height: 100%;
  padding-right: 20px;
  padding-left: 20px;
  font-family: NanumSquareB;
  font-size: 15px;
  line-height: 2.93;
  background-color: ${(p: {color: string}) => p.color};
  color: white;
`;

interface InputProps {
  bg: string;
  
};

const Input = styled.input`
  height: 100%;
  background-color: ${(p: InputProps) => p.bg};
  border: none;
  padding: 0;

  font-family: NanumSquareB;
  font-size: 15px;
  line-height: 2.93;
  color: white;
  padding-left: 20px;
  
  ::placeholder {
    opacity: 0.5;
  }

  :focus {
    outline: none;
  }
`;

const EnterButton = styled(Flex)`
  background-color: #bbbbbb;
  width: 45px;
  height: 100%;
  border-radius: 0 20px 20px 0;
`;

const ApplicantInput: React.FC<Props> = (props) => {
  const [arrival, handleArrival] = React.useState("");
  const [comment, handleComment] = React.useState("");

  return (
    <InputContainer>
      <OrderNumber center>{props.count + 1}</OrderNumber>
      <Square color="#3f4167">{props.name}</Square>
      <Square color="#933e60">{props.nickName}</Square>
      <Input
        bg="#ee4465"
        placeholder="도착 시간을 적어주세요"
        value={arrival}
        onChange={(e) => handleArrival(e.target.value)}
      />
      <Input bg="#f69174" placeholder="한마디를 남겨주세요" />
      <EnterButton />
    </InputContainer>
  );
};

export default ApplicantInput;