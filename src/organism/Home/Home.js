import React from 'react';
import { MainTextWrapper, MockedImage, Text, Wrapper, ShadowText, TriangleRight, TriangleLeft, SecondText } from './Home.styles';
import img from 'assets/images/triangleWhiteShadow.png';

const Home = ({ refHome }) => {
  return (
    <Wrapper>
      <TriangleRight src={img} />
      <TriangleLeft src={img} />
      <MainTextWrapper ref={refHome}>
        <Text>Cześć,</Text>
        <Text>
          Nazywam się<br></br>
          <SecondText> Mateusz</SecondText>
        </Text>
      </MainTextWrapper>
      <MockedImage />
    </Wrapper>
  );
};

export default Home;
