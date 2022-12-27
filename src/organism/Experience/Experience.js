import React from 'react';
import { Wrapper, MainText, SecondText, ThirdText, MidText, SecondWrapper, Image, Button } from './Experience.styles';

const Experience = ({ refExp }) => {
  return (
    <Wrapper ref={refExp}>
      <MainText>Experience</MainText>
      <MidText>Work</MidText>
      <SecondWrapper>
        <SecondText>2020-2022</SecondText>
        <SecondText>Giganci Programowania</SecondText>
        <ThirdText>Programming teacher/trainer</ThirdText>
        <ThirdText>
          While working at Giganci Programowania, I dealt with teaching children and teenagers the basics and more advanced concepts of programming in
          C#, creating websites with HTML/CSS/Javascript and creating computer and mobile 2D/3D games with Unity 3D.
        </ThirdText>
      </SecondWrapper>
      <MidText>Projects</MidText>
      <SecondWrapper>
        <SecondText>My first Portfolio</SecondText>
        <Image>
          <Button href="https://mateuszujmaportfolioold.netlify.app/" target="_blank">
            View
          </Button>
          <Button href="https://github.com/Mateusz-Ujma/MyPortfolio" target="_blank">
            Code
          </Button>
        </Image>
      </SecondWrapper>
    </Wrapper>
  );
};

export default Experience;
