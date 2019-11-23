import React from "react";
import { SignIn } from "aws-amplify-react";
import styled from "styled-components";
import Flex from "../../atoms/Flex";
import Text from "../../atoms/Text";
import {Field} from "../../form";
import {theme} from "../../../utils/theme";

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


const Button = styled.button`
  background-color: ${p => p.bg};
  color: ${p => p.color};
  width: 100%;
  height: ${p => p.h};
  margin-bottom: ${p => p.mb};
  font-size: ${theme.fontsizes.label}px;
`;

class CustomSignIn extends SignIn {
  constructor(props) {
    super(props);
    this._validAuthStates = ["signIn", "signedOut", "signedUp"];
  }

  showComponent() {
    return (
      <div className="mx-auto w-full max-w-xs">
        <form>
        <Flex w="100%" h="100%" center pt="200px">
          <Flex w="500px" center column>
            <Text h1 mb="90px" medium>
              {contents.heading}
            </Text>
            <Field
              name="username"
              type="email"
              onChange={this.handleInputChange}
              placeholder={contents.id.label}
            />
            <Field
              name="password"
              type="password"
              onChange={this.handleInputChange}
              placeholder={contents.pw.label}
            />
            <Button
              type="button"
              bg={theme.colors.black.primary}
              color="white"
              h="75px"
              mb="30px"
              onClick={() => super.signIn()}
            >
              {contents.loginBtn.label}
            </Button>
            <button
              type="button"
              onClick={() => super.signIn()}
            >
              Login
            </button>
            <Button
              bg={theme.colors.black.primary}
              color="white"
              h="75px"
              mb="30px"
              onClick={() => super.signIn()}
            >
              {contents.loginBtn.label}
            </Button>
            <Text
              fontSize={theme.fontsizes.p}
              mb="138px"
              cursor="pointer"
              onClick={()=>super.changeState("forgotPassword")}
            >
              {contents.forgetPW.label}
            </Text>
            <Button
              label={contents.singUp.label}
              bg={theme.colors.black.primary}
              color="white"
              h="75px"
              mb="30px"
              onClick={()=>super.changeState("signUp")}
            />
            <Text
              fontSize={theme.fontsizes.p}
              mb="138px"
            >
              {contents.firstVisit.label}
            </Text>
          </Flex>
        </Flex>

          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              key="username"
              name="username"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              key="password"
              name="password"
              onChange={this.handleInputChange}
              type="password"
              placeholder="******************"
            />
            <p className="text-grey-dark text-xs">
              Forgot your password?{" "}
              <a
                className="text-indigo cursor-pointer hover:text-indigo-darker"
                onClick={() => super.changeState("forgotPassword")}
              >
                Reset Password
              </a>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => super.signIn()}
            >
              Login
            </button>
            <p className="text-grey-dark text-xs">
              No Account?{" "}
              <a
                className="text-indigo cursor-pointer hover:text-indigo-darker"
                onClick={() => super.changeState("signUp")}
              >
                Create account
              </a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default CustomSignIn;