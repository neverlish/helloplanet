import React from "react";
import _ from "lodash";
import Flex from "../../../atoms/Flex";
import MeetNotice from "./MeetNotice";

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
    </Flex>
  );
};

export { MainPageContent };