import React from "react";
import _ from "lodash";
import styled from "styled-components";
import Flex from "../../../atoms/Flex";
import Text from "../../../atoms/Text";
import MeetNotice from "./MeetNotice";
import DescriptionSection from "./DescriptionSection";

const mock = {
  meets: [
    {
      name: "스프링토",
      timeStamp: "99999999",
      isParticipate: false,
      pushNotification: true,
    },
    {
      name: "어텀",
      timeStamp: "99999999",
      isParticipate: true,
      pushNotification: false,
    },
  ], 
};

const MainPageContent: React.FC = () => {
  return(
    <Flex w="100%" h="100%" column bg="white" mt="90px">
      <Flex w="100%" justifyContent="space-between">
        {_.map(mock.meets, (meet) => {
          return <MeetNotice key={meet.name} {...meet} />
        })}
      </Flex>
      <DescriptionSection />
    </Flex>
  );
};

const BookMarkBlock = styled.div`
  position: absolute;
  right: 44.3px;
  top: 0;
`;

const BookMarkContainer = styled.div`
    position: relative;
    box-sizing: border-box; 
    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
    height: 92px; 
    width: 72px;
    padding: 0px; 
    -webkit-transform: rotate(0deg) skew(0deg); 
    transform: rotate(0deg) skew(0deg); 
    border-left: 36px solid #3f4167; 
    border-right: 36px solid #3f4167; 
    background-color: #3f4167;
    border-bottom: 24px solid white;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    .text {
      position: absolute;
      top: 14px;
      font-family: "NanumSqaureB";
      font-size: 14px;
      line-height: 2.93;
      text-align: center;
      width: 42px;
      margin: 0;
      color: white;
    }
`;

const BookMark: React.FC<{label: string}> = ({label}) => {
  return(
    <BookMarkContainer>
      <p className="text">{label}</p>
    </BookMarkContainer>
  );
};
export { MainPageContent, BookMarkBlock, BookMark };