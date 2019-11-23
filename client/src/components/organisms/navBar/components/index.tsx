import styled from "styled-components";
import React from "react";
import Flex from "../../../atoms/Flex";
import Text from "../../../atoms/Text";

const mock = {
  season: {
    title: "가을시즌",
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
  const text1 = `지금은 `;
  const text2 = ` 중!`;

  return(
    <Flex ml="70px" mb="105px" column alignItems="flex-start">
      <Flex mb="10px">
        <Text fontSize="17px" color="white" mr="3px">{text1}</Text>
        <Text fontSize="17px" color="white" b>
          {mock.season.title}
        </Text>
        <Text fontSize="17px" color="white" ml="3px">{text2}</Text>
      </Flex>
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
      <Text eb ml="70px" fontSize="35px" color="white" mb="83px">
        {content}
      </Text>
    </div>
  );
};

const IconWithLabel: React.FC<{label: string}> = ({label})=> {
  return(
    <Flex ml="70px" mb="50px">
      icon
      <Text b fontSize="20px" color="white">{label}</Text>
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