import styled from "styled-components";
import React from "react";
import Flex from "../../../atoms/Flex";
import Text from "../../../atoms/Text";

const mock = {
  season: {
    title: "지금은 가을시즌 중!",
    start: "2019.09.07",
    end: "2019.11.06",
  },
  nickName: "하미연",
};

const NavigationContainer = styled(Flex)`
  width: 400px;
  height: 100%;
  box-shadow: 2px 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #2a374e;
  color: white;
`;

const Content = styled(Flex)`
  margin-top: 70px;
  height: 100%;
`;


const SeasonLabel: React.FC = () => {
  return(
    <Flex ml="70px" mb="105px" column alignItems="flex-start">
      <Text fontSize="17px" color="white" mb="10px">
        {mock.season.title}
      </Text>
      <Text fontSize="17px" color="white" mb="10px">
        {mock.season.start} - {mock.season.end}
      </Text>
    </Flex>
  );
};

const WelcomeUserLabel: React.FC = () => {
  const content = `반가워요\n${mock.nickName}님 :)`;
  return(
    <div style={{whiteSpace: "pre"}}>
      <Text ml="70px" fontSize="35px" color="white" mb="83px">
        {content}
      </Text>
    </div>
  );
};

const IconWithLabel: React.FC<{label: string}> = ({label})=> {
  return(
    <Flex ml="70px" mb="50px">
      icon
      <Text fontSize="20px" color="white">{label}</Text>
    </Flex>
  );
};

export {
  NavigationContainer,
  Content,
  SeasonLabel,
  WelcomeUserLabel,
  IconWithLabel
};