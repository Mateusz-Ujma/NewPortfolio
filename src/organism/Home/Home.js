import React from 'react';
import { ShadowedText } from 'atoms/ShadowedText';
import { MainTextWrapper, MockedImage, Wrapper } from './Home.styles';
import { NormalText } from 'atoms/NormalText';

const Home = ({ refHome }) => {
  return (
    <Wrapper>
      <MainTextWrapper ref={refHome}>
        <NormalText>Hello,</NormalText>
        <NormalText>
          I'm<br></br>
          <ShadowedText>M</ShadowedText>ateusz
        </NormalText>
      </MainTextWrapper>
      <MockedImage />
    </Wrapper>
  );
};

export default Home;
