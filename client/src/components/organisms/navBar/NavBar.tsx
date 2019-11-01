import React from 'react';
import {
  NavigationContainer,
  Content,
  SeasonLabel,
  WelcomeUserLabel,
  IconWithLabel
} from './components';
import NavigationItems from './components/NavigationItems';

const NavBar: React.FC = () => {
  return (
    <NavigationContainer alignItems="flex-start">
      <Content column alignItems="flex-start" justifyContent="space-between">
        <SeasonLabel />
        <div>
          <WelcomeUserLabel />
          <NavigationItems />
        </div>
        <IconWithLabel label="로그아웃" />
      </Content>
    </NavigationContainer>
  );
};

export default NavBar;