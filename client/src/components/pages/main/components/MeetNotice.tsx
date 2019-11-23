import React from "react";
import styled from "styled-components";
import Text from "../../../atoms/Text";
import Flex from "../../../atoms/Flex";
import Switch from "../../../atoms/Switch";
import Button from "../../../atoms/Button";
import { BookMark, BookMarkBlock } from "./index";

const Container = styled.div`
  width: 400px;
  height: 267px;
  border-radius: 20px;
  box-shadow: 3px 2px 4px 0 rgba(0, 0, 0, 0.16);
  background-color: white;
  position: relative;
`;

const Content = styled.div`
  margin-top: 32px;
  margin-left: 43px;
  margin-right: 43px;
`;

interface Props {
  name: string,
  timeStamp: number | string,
  isParticipate: boolean,
  pushNotification: boolean,
};

const MeetNotice: React.FC<Props> = ({
  name,
  timeStamp,
  isParticipate,
  pushNotification,
}) => {
  return (
    <Container>
      <Content>
        <BookMarkBlock>
          {isParticipate && <BookMark label="내 모임" />}
        </BookMarkBlock>
        <Flex mb="23px" alignItems="flex-end">
          <Text b color="#666666" fontSize="30px" mr="12.3px">{name}</Text>
          <Text color="#666666" fontSize="18px" mb="4px">의 다음 모임은</Text>
        </Flex>
        <Text b color="#666666" fontSize="18px" mb="12px">{timeStamp}</Text>
        <Text color="#666666" fontSize="18px" mb="58.7px">입니다.</Text>
        <Flex w="100%" justifyContent="space-between">
          <Flex center>
            <Text>알림</Text>
            <Switch isActive={pushNotification} />
          </Flex>
          <Button
            b
            label="공지보기"
            w="111px"
            h="40px"
            borderRadius="10px"
            fontSize="15px"
            bg="#f69174"
            color="white"
            border="none"
          />
        </Flex>
      </Content>
    </Container>
  );
};

export default MeetNotice;