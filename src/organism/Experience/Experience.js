import React from 'react';
import {
  Wrapper,
  MainText,
  SecondText,
  ThirdText,
  MidText,
  SecondWrapper,
  Image,
  Button,
  TriangleL,
  TriangleR,
  ThirdWrapper,
} from './Experience.styles';
import img from 'assets/images/triangle.png';

const Experience = ({ refExp }) => {
  const windowWidth = window.innerWidth;
  return (
    <Wrapper ref={refExp}>
      {windowWidth > 762 ? null : <TriangleR src={img} />}
      {windowWidth > 762 ? null : <TriangleL src={img} />}
      <MainText>Doświadczenie</MainText>
      <MidText isLeft={true}>2020-2022</MidText>
      <SecondWrapper isLeft={true} isProjects={false}>
        <SecondText isLeft={true}>Giganci Programowania</SecondText>
        <ThirdText>Nauczyciel/Trener Programowania</ThirdText>
        <ThirdText>
          Pracując w Gigantach Programowania zajmowałem się uczeniem dzieci oraz młodzieży podstaw oraz bardziej zaawansowanych pojęć programowania w
          języku C#, tworzenia stron z pomocą HTML/CSS/JavaScript oraz tworzenia gier komputerowych oraz mobilnych przy użyciu Unity3D.
        </ThirdText>
      </SecondWrapper>
      <MidText isLeft={false}>Projekty</MidText>
      <SecondWrapper isLeft={false} isProjects={true}>
        <SecondText>Moje pierwsze portfolio</SecondText>
        <ThirdWrapper isLeft={false} isProjects={true}>
          <Image>
            <Button href="https://mateuszujmaportfolioold.netlify.app/" target="_blank">
              Podgląd
            </Button>
            <Button href="https://github.com/Mateusz-Ujma/MyPortfolio" target="_blank">
              Github
            </Button>
          </Image>
          <ThirdText>Oto moje pierwsze portfolio jakie stworzyłem używając HTML'a SCSS'a oraz JS'a</ThirdText>
        </ThirdWrapper>
      </SecondWrapper>
    </Wrapper>
  );
};

export default Experience;
