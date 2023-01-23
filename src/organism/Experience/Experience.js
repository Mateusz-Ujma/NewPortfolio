import React from 'react';
import { Wrapper, MainText, SecondText, ThirdText, MidText, SecondWrapper, Image, Button, TriangleL, TriangleR } from './Experience.styles';
import img from 'assets/images/triangle.png';

const Experience = ({ refExp }) => {
  return (
    <Wrapper ref={refExp}>
      <TriangleR src={img} />
      <TriangleL src={img} />
      <MainText>Doświadczenie</MainText>
      <MidText isLeft={true}>2020-2022</MidText>
      <SecondWrapper>
        <SecondText>Giganci Programowania</SecondText>
        <ThirdText>Nauczyciel/Trener Programowania</ThirdText>
        <ThirdText>
          Pracując w Gigantach Programowania zajmowałem się uczeniem dzieci oraz młodzieży podstaw oraz bardziej zaawansowanych pojęć programowania w
          języku C#, tworzenia stron z pomocą HTML/CSS/JavaScript oraz tworzenia gier komputerowych oraz mobilnych przy użyciu Unity3D.
        </ThirdText>
      </SecondWrapper>
      <MidText isLeft={false}>Projekty</MidText>
      <SecondWrapper>
        <SecondText>Moje pierwsze portfolio</SecondText>
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
