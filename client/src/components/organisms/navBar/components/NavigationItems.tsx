import React from 'react';
import _ from "lodash";
import Flex from '../../../atoms/Flex';
import Button from '../../../atoms/Button';
import Text from '../../../atoms/Text';

const items = [
  {
    iconSrc: "",
    srcSet: "",
    alt: "독서모임",
    label: "독서모임",
  },
  {
    iconSrc: "",
    srcSet: "",
    alt: "별모임",
    label: "별모임",
  },
  {
    iconSrc: "",
    srcSet: "",
    alt: "나의 활동",
    label: "나의 활동",
  },
  {
    iconSrc: "",
    srcSet: "",
    alt: "모임 규칙",
    label: "모임 규칙",
  }
];


const NavigationItems: React.FC = () => {
  const [activeIdx, toggleIdx] = React.useState(0);
  
  return (
    <Flex column alignItems="flex-start">
      {
        _.map(items, (item, idx) => {
        return(
          <Flex
            key={item.label}
            w="283px"
            h="64px"
            borderRadius="0 50px 50px 0"
            bg={idx === activeIdx ? "white" : "transparent"}
            onClick={()=> toggleIdx(idx)}
          >
            <Text
              pl="70px"
              fontSize="20px"
              color={idx === activeIdx ? "#2a374e" : "white"}
            >
              {item.label}
            </Text>
          </Flex>
        );
      })
      }
    </Flex>
  );
};

export default NavigationItems;