import React from 'react';
import styled from "styled-components";
import Flex from "../../../atoms/Flex";
import Text from "../../../atoms/Text";
import Line from '../../../atoms/Line';
import { LayoutProps } from '../../../../interfaces';

const Container = styled.div`
  border-radius: 20px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const MapContainer = styled.div`
  width: 500px;
  height: 500px;
  object-fit: contain;
  margin-right: 60px;
  background: pink;
`;

const InfoContainer = styled(Flex)`
  width: 1320px;

  .desc {
    white-space: pre;
    margin-bottom: 114px;
  }
`;

const InfoText: React.FC<{title: string, content: string} & LayoutProps> =
  ({title, content, ...rest}) => {
  return(
    <Flex alignItems="center" {...rest}>
      <Text mr="22px" fontSize="21px" color="#666666">{title}</Text>
      <Text fontSize="17px" color="#666666">{content}</Text>
    </Flex>
  );
};

const desc = `강남 독서모임 어텀은 지정책이 아닌 자유책으로 진행합니다. 자유책은 각자 선택한 다른 책을 “미리”\n
집에서 읽어온 뒤, 모임에서 그 책을 소개하는 방식입니다. 다른 사람들은 떠오르는 대로 적극적으로\n
리액션 해주시면 됩니다. 시간 장소를 꼭 확인해주세요. :)`;

const DescriptionSection: React.FC = () => {
  return (
    <Container>
      <MapContainer />
      <InfoContainer column alignItems="flex-start">
        <Flex w="100%" justifyContent="space-between" mb="30.5px">
          <Text fontSize="25px" color="#666666">본모임 공지</Text>
          <Text fontSize="30px">어텀</Text>
        </Flex>
        <Line />
        <InfoText
          mt="30.5px"
          title="일시"
          content="2019년 10월 13일 토요일 오후 2시"
        />
        <InfoText
          mt="30px"
          title="장소"
          content="디초콜릿커피앤드 강남국기원점  |  서울시 강남구 테헤란로 5길 7 (좌측 지도 참고)"
        />
        <InfoText
          mt="30px"
          mb="30px"
          title="준비"
          content="책소개와 자기소개"
        />
        <span className="desc">
          <Text fontSize="15px" lineHeight={1.6}>{desc}</Text>
        </span>
        <InfoText
          mt="132px"
          title="신청기한"
          content="~ 모임 시간 전까지"
        />
      </InfoContainer>
    </Container>
  );
};

export default DescriptionSection;