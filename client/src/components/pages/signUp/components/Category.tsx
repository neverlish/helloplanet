import React from "react";
import Flex from "../../../atoms/Flex";
import Text from "../../../atoms/Text";
import Input from "../../../atoms/Input";
import Select from "../../../atoms/Select";
import { theme } from "../../../../utils/theme";
import { signUpcontents } from "../signUpPage";

const Category: React.FC = () => {
  return(
    <Flex column w="500px" alignItems="flex-start" justifyContent="flex-start">
      <Text
        fontSize={theme.fontsizes.label}
        mb="65px"
      >
        {signUpcontents.category.label}
      </Text>
      <Input
        w="100%"
        h="75px"
        placeholder={signUpcontents.category.inputList[0].label}
        mb="20px"
      />
      <Select
        label={signUpcontents.category.select.label}
        options={signUpcontents.category.select.options}
      />
    </Flex>
  );
}

export default Category;