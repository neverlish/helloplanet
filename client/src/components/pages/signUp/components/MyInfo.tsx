import React from "react";
import Flex from "../../../atoms/Flex";
import Text from "../../../atoms/Text";
import { theme } from "../../../../utils/theme";
import { signUpcontents } from "../signUpPage";
import Input from "../../../atoms/Input";
import Button from "../../../atoms/Button";

const MyInfo: React.FC = () => {
  return(
    <Flex column w="500px" alignItems="flex-start" justifyContent="flex-start">
      <Text
        fontSize={theme.fontsizes.label}
        mb="65px"
      >
        {signUpcontents.loginInfo.label}
      </Text>
      <Input
        w="100%"
        h="75px"
        placeholder={signUpcontents.loginInfo.email.label}
        mb="20px"
      />
      <Input
        w="100%"
        h="75px"
        placeholder={signUpcontents.loginInfo.password.label}
        mb="20px"
      />
      <Input
        w="100%"
        h="75px"
        placeholder={signUpcontents.loginInfo.doubleCheck.label}
        mb="47px"
      />
      <Button
        label={signUpcontents.btn.label}
        bg={theme.colors.black.primary}
        color="white"
        h="75px"
        mb="30px"
      />
    </Flex>
  );
};

export default MyInfo;