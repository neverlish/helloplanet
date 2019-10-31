import React from "react";
import Flex from "../../atoms/Flex";
import Text from "../../atoms/Text";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

import { theme } from "../../../utils/theme";

const findPasswordContents = {
  heading: "INTERPLANET",
  sub: "비밀번호 변경 이메일을 보낼 이메일을 입력해주세요.",
  btn: "전송하기",
};

interface Props {}

const FindPasswordPage: React.FC<Props> = () => {
  return(
    <Flex w="100%" center>
      <Flex w="540px" column mt="200px">
        <Text
          fontSize={theme.fontsizes.h1}
          mb="100px"
          medium
        >
          {findPasswordContents.heading}
        </Text>
        <Text
          fontSize={theme.fontsizes.label}
          mb="100px"
        >
          {findPasswordContents.sub}
        </Text>
        <Input
          w="100%"
          h="75px"
          mb="20px"
        />
        <Button
          label={findPasswordContents.btn}
          bg={theme.colors.black.primary}
          color="white"
          h="75px"
      />
      </Flex>
    </Flex>
  );
};

export default FindPasswordPage;