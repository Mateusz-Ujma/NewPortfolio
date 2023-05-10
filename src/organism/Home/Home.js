import React from 'react';
import {
  MainTextWrapper,
  MockedImage,
  Text,
  Wrapper,
  TriangleRight,
  TriangleLeft,
  SecondText,
  RightDecor,
  SecondWrapper,
  IconLink,
} from './Home.styles';

import greenTriangle from 'assets/images/triangle.png';
import whiteTriangle from 'assets/images/triangleWhiteShadow.png';
import DecorMain from 'assets/images/greenBg.png';
import { Icons } from 'assets/icons/Icons';

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
      <SecondWrapper>
        <IconLink href="https://www.linkedin.com/in/mateusz-ujma/" icon={Icons.LINKEDIN} isMail={false} target="_blank"></IconLink>
        <IconLink href="https://github.com/Mateusz-Ujma" icon={Icons.GITHUB} isMail={false} target="_blank"></IconLink>
        <IconLink href="https://www.facebook.com/mateusz.ujma.7" icon={Icons.FB} isMail={false} target="_blank"></IconLink>
      </SecondWrapper>
    </Wrapper>
  );
};

export default Home;
