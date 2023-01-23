import React from 'react';
import { GeraltImg, LuffyImg, MainText, SecondText, SecondWrapper, TriangleL, TriangleR, Wrapper } from './AboutMe.styles';
import imgLuffy from 'assets/images/luffy.png';
import imgGeralt from 'assets/images/gerlat.png';
import img from 'assets/images/triangleWhiteShadow.png';

const AboutMe = ({ refAbout }) => {
  return (
    <Wrapper ref={refAbout}>
      <TriangleL src={img} />
      <TriangleR src={img} />
      <MainText>Poza pracą</MainText>
      <SecondWrapper isLeft={true}>
        <SecondText isLeft={true}>
          Lubię wygodnie rozsiąść się na kanapie i obejrzeć kolejny odcinek ulubionego Anime jakim jest One Piece.
        </SecondText>
        <LuffyImg src={imgLuffy} />
      </SecondWrapper>
      <SecondWrapper isLeft={false}>
        <GeraltImg src={imgGeralt} />
        <SecondText isLeft={false}>A czasem kiedy mam ochotę sięknąć jakiegoś potwora z pomocą przychodzi nasz znajomy z podwórka.</SecondText>
      </SecondWrapper>
    </Wrapper>
  );
};

export default AboutMe;
