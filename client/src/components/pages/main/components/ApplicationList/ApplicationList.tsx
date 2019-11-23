import React from 'react';
import styled from "styled-components";
import _ from "lodash";
import Flex from '../../../../atoms/Flex';
import ApplicantInput from "./ApplicantInput";
import ApplicantInfo from "./ApplicantInfo";

const labels = {
  groupName: ` 정기 모임 참가 신청`
};

const mock = {
  groupName: "어텀",
  me: {
    name: "하미연",
    nickname: "도롱",
  },
  users: [
    {
      name: "이우주",
      nickname: "헤르만허세",
      arrival: "정시",
      comment: "금메달",
    },
    {
      name: "헤르만허세",
      nickname: "헤르만허세",
      arrival: "정시",
      comment: "은메달",
    },
    {
      name: "이우주3",
      nickname: "헤르만허세",
      arrival: "조금 늦어요",
      comment: "올림픽 대로가 막힙니다 회장님",
    },
  ],
};

const Container = styled(Flex)`
  width: 1320px;
  height: 603px;
  border-radius: 20px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.16);
  background-color: var(--white);
`;

const InputContainer = styled(Flex)`
  height: 147px;
`;

const ApplicationList: React.FC = () => {
  const {users} = mock;
  const [list, ] = React.useState(users);

  return (
    <Container column>
      <InputContainer>
        <ApplicantInput
          count={3}
          name={mock.me.name}
          nickName={mock.me.nickname}
        />
      </InputContainer>
      {_.map(users, (user,idx) => {
          return(
            <ApplicantInfo
              idx={idx}
              name={user.name}
              nickname={user.nickname}
              arrival={user.arrival}
              comment={user.comment}
            />
          );
        })}
    </Container>
  );
};

export default ApplicationList;