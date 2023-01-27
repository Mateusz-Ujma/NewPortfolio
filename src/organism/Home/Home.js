import React from 'react';
import { MainTextWrapper, MockedImage, Text, Wrapper, TriangleRight, TriangleLeft, SecondText, RightDecor } from './Home.styles';
import greenTriangle from 'assets/images/triangle.png';
import whiteTriangle from 'assets/images/triangleWhiteShadow.png';
import DecorMain from 'assets/images/greenBg.png';

const Home = ({ refHome }) => {
  const windowWidth = window.innerWidth;
  return (
    <Wrapper>
      {windowWidth > 762 ? <RightDecor src={DecorMain} /> : null}
      {windowWidth > 762 ? null : <TriangleRight src={whiteTriangle} />}
      {windowWidth > 762 ? null : <TriangleLeft src={whiteTriangle} />}
      <MainTextWrapper ref={refHome}>
        <Text mobile={windowWidth > 762 ? false : true}>Cześć,</Text>
        <Text mobile={windowWidth > 762 ? false : true}>
          Nazywam się<br></br>
        </Text>
        <SecondText mobile={windowWidth > 762 ? false : true}> Mateusz</SecondText>
      </MainTextWrapper>
      <MockedImage />
    </Wrapper>
  );
};

export default Home;
