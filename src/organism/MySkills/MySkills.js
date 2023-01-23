import React from 'react';
import { Icon, IconText, IconWrapper, MainText, TriangleL, TriangleR, Wrapper } from './MySkills.styles';
import { Icons } from 'assets/icons/Icons';
import img from 'assets/images/triangleWhiteShadow.png';

const MySkills = ({ refSkills }) => {
  return (
    <Wrapper ref={refSkills}>
      <TriangleR src={img} />
      <TriangleL src={img} />
      <MainText>Technologie</MainText>
      <IconWrapper>
        <Icon img={Icons.HTML}>
          <IconText>HTML</IconText>
        </Icon>
        <Icon img={Icons.CSS}>
          <IconText>CSS</IconText>
        </Icon>
        <Icon img={Icons.JS}>
          <IconText>JavaScript</IconText>
        </Icon>
        <Icon img={Icons.SCSS}>
          <IconText>SCSS</IconText>
        </Icon>
        <Icon img={Icons.REACT}>
          <IconText>React</IconText>
        </Icon>
        <Icon img={Icons.NPM}>
          <IconText>npm</IconText>
        </Icon>
      </IconWrapper>
    </Wrapper>
  );
};

export default MySkills;
