import React from 'react';
import NavBar from '../../organisms/navBar';
import Flex from '../../atoms/Flex';
import { MainPageContent } from './components';

const MainPage: React.FC = () => {
  return (
    <Flex w="100%" h="100%">
      <NavBar />
      <MainPageContent />
    </Flex>
  );
};

export default MainPage;