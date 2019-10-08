import React from "react";
import { reduxForm, InjectedFormProps, Field } from 'redux-form';
import Flex from "../../atoms/Flex";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import { renderField } from "../../form";
import validations from "../../../utils/validation";
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

interface IUser {
  firstName: string;
  lastName: string;
}

const LoginPage: React.FC<InjectedFormProps<IUser>> = (props) => {
  const { pristine, submitting, reset, handleSubmit } = props;
  console.log(pristine, submitting);
  
  return(
    <>
      <form onSubmit={handleSubmit}>
        <Flex w="100%" h="100%" center pt="200px">
          <Flex w="500px" center column>
            <Text h1 mb="90px" medium>
              {contents.heading}
            </Text>
            <Field
              name="id"
              component={renderField}
              type="email"
              placeholder={contents.id.label}
              validate={[validations.email, validations.minLength2]}
            />
            <Field
              name="password"
              component={renderField}
              type="password"
              placeholder={contents.pw.label}
              validate={[validations.email, validations.minLength2]}
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
      </form>
    </>
  );
};

export default reduxForm<IUser>({
  form: 'login',
})(LoginPage);
