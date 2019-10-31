import React from "react";
import Flex from "../../atoms/Flex";
import Text from "../../atoms/Text";
import { theme } from "../../../utils/theme";
import Input from "../../atoms/Input";
import Category from "./components/Category";
import MyInfo from "./components/MyInfo";


export const signUpcontents = {
  heading: "회원가입",
  category: {
    label: "어느 모임에서 활동중이신가요?",
    inputList: [
      {
        label: "이름",
        placeholder: "본명을 써주세요"
      },
    ],
    select: {
      label: "소속 모임",
      options: ["스프링토", "어텀", "윈터블"],
    }, 
  },
  loginInfo: {
    label: "로그인에 쓰일 정보를 입력해주세요.",
    email: {
      label: "이메일 주소",
    },
    password: {
      label: "비밀번호",
    },
    doubleCheck: {
      label: "비밀번호 확인",
    },
  },
  btn: {
    label: "회원가입하기"
  },
};

const SignUpPage: React.FC = () => {
  return(
    <Flex w="100%" h="100vh" column center>
      <Flex w="100%" mb="145px" ml="120px">
        <Text fontSize="50px">{signUpcontents.heading}</Text>
      </Flex>
      <Flex w="100%" justifyContent="space-around" alignItems="flex-start">
        <Category />
        <MyInfo />
      </Flex>
    </Flex>
  );
};

export default SignUpPage;