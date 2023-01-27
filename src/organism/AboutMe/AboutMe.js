import React from 'react';
import { GeraltImg, LuffyImg, MainText, MenImg, SecondText, SecondWrapper, TriangleL, TriangleR, Wrapper } from './AboutMe.styles';
import imgLuffy from 'assets/images/luffy.png';
import imgGeralt from 'assets/images/gerlat.png';
import imgMen from 'assets/images/men.png';
import img from 'assets/images/triangleWhiteShadow.png';

const AboutMe = ({ refAbout }) => {
  const windowWidth = window.innerWidth;
  return (
    <Wrapper ref={refAbout}>
      {windowWidth > 762 ? null : <TriangleR src={img} />}
      {windowWidth > 762 ? null : <TriangleL src={img} />}
      <MainText>Poza pracą</MainText>
      <SecondWrapper isLeft={true}>
        <SecondText isLeft={true}>
          Lubię wygodnie rozsiąść się na kanapie i obejrzeć kolejny odcinek ulubionego Anime jakim jest One Piece.
        </SecondText>
        <LuffyImg src={imgLuffy} />
      </SecondWrapper>
      <SecondWrapper isLeft={false}>
        <GeraltImg src={imgGeralt} />
        <SecondText isLeft={false}>Czasem kiedy mam ochotę sięknąć jakiegoś potwora z pomocą przychodzi nasz znajomy z podwórka.</SecondText>
      </SecondWrapper>
      <SecondWrapper isLeft={true}>
        <SecondText isLeft={true}>A kiedy chcę się wyciszyć lubię usiąść i poczytać czy to książkę fantasy czy dobrą książkę o ekonomii.</SecondText>
        <MenImg src={imgMen} />
      </SecondWrapper>
    </Wrapper>
  );
};

export default AboutMe;
