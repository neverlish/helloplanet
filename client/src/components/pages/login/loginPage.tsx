import React from "react";
import Flex from "../../atoms/Flex";
import Text from "../../atoms/Text";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

import { theme } from "../../../utils/theme";

const contents = {
  heading : "INTERPLANET",
  id: {
    label: "이메일 주소",
  },
  pw: {
    label: "비밀번호",
  },
  loginBtn: {
    label: "로그인"
  },
  forgetPW: {
    label: "비밀번호를 잊어버리셨나요?"
  },
  singUp: {
    label: "회원가입하기"
  },
  firstVisit: {
    label: "처음 방문하셨나요?"
  },
};

interface Props {

};

const LoginPage: React.FC<Props> = () => {
  return(
    <Flex w="100%" h="100%" center pt="200px">
      <Flex w="500px" center column>
        <Text h1 mb="90px" medium>
          {contents.heading}
        </Text>
        <Input
          placeholder={contents.id.label}
          w="calc(100% - 24px)"
          h="75px"
          mb="20px"
        />
        <Input
          placeholder={contents.pw.label}
          w="calc(100% - 24px)"
          h="75px"
          mb="20px"
        />
        <Button
          label={contents.loginBtn.label}
          bg={theme.colors.black.primary}
          color="white"
          h="75px"
          mb="30px"
        />
        <Text
          fontSize={theme.fontsizes.p}
          mb="138px"
        >
          {contents.forgetPW.label}
        </Text>
        <Button
          label={contents.singUp.label}
          bg={theme.colors.black.primary}
          color="white"
          h="75px"
          mb="30px"
        />
        <Text
          fontSize={theme.fontsizes.p}
          mb="138px"
        >
          {contents.firstVisit.label}
        </Text>
      </Flex>
    </Flex>
  );
};

export default LoginPage;