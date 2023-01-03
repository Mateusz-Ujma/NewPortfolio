import React from 'react';
import { MainTextWrapper, MockedImage, Text, Wrapper, ShadowText } from './Home.styles';

const Home = ({ refHome }) => {
  return (
    <Wrapper>
      <MainTextWrapper ref={refHome}>
        <Text>Hello,</Text>
        <Text>
          I'm<br></br>
          <ShadowText>M</ShadowText>ateusz
        </Text>
      </MainTextWrapper>
      <MockedImage />
    </Wrapper>
  );
};

export default Home;
