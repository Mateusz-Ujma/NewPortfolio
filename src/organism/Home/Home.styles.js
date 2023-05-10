import styled from 'styled-components';
import { NormalText } from 'atoms/NormalText';
import { ShadowedText } from 'atoms/ShadowedText';

import cursorImg from 'assets/images/pointer.png';

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  background-color: #1b9d5c;
  width: 100%;
  @media (min-width: 762px) {
    background-color: #fffffa;
    flex-direction: row;
    height: 100vh;
    justify-content: center;
    align-items: center;
    margin: 0;
    z-index: 0;
  }
`;
export const SecondWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 60px;
  right: -10px;
  flex-direction: column;
  justify-content: center;
  padding: 20px 10px 0 10px;
  margin: 20px auto 0 auto;
  @media (min-width: 762px) {
    flex-direction: column;
    top: 140px;
    right: -10px;
  }
  @media (min-width: 1440px) {
    flex-direction: column;
    top: 190px;
    right: -10px;
  }
`;

export const RightDecor = styled.img`
  @media (min-width: 762px) {
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: -1;
    right: -10px;
  }
`;
export const TextWrapper = styled.div`
  @media (min-width: 762px) {
    position: relative;
    width: ${({ width }) => width + 'vw'};
    background-color: #333;
  }
`;
export const MainTextWrapper = styled.div`
  margin: 0 auto 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  font-family: 'Secular One', sans-serif;
  font-size: 43px;
  padding: 120px 0 0 0;
  @media (min-width: 762px) {
    width: 400px;
    padding: 0 0 0 0;
    margin: -250px auto 0 100px;
  }
  @media (min-width: 1440px) {
    width: 400px;
    padding: 0 0 0 0;
    margin: -400px auto 0 100px;
  }
`;
export const TriangleRight = styled.img`
  position: absolute;
  top: 20px;
  right: -20px;
  rotate: -90deg;
  width: 100px;
  height: 80px;
  opacity: 1;
`;
export const TriangleLeft = styled.img`
  position: absolute;
  top: 300px;
  left: -10px;
  rotate: 90deg;
  width: 100px;
  height: 80px;
  opacity: 1;
`;
export const MockedImage = styled.div`
  background-color: #fffffa;
  width: 280px;
  height: 280px;
  margin: 90px auto 0 auto;
  border-radius: 20px;
  @media (min-width: 762px) {
    width: 350px;
    height: 350px;
    margin: 50px 250px 0 50px;
  }
  @media (min-width: 1440px) {
    margin: 50px 300px 0 50px;
  }

  box-shadow: 5px 5px rgba(0, 0, 0, 0.3), 10px 10px rgba(0, 0, 0, 0.2), 15px 15px rgba(0, 0, 0, 0.1), 20px 20px rgba(0, 0, 0, 0.05),
    25px 25px rgba(0, 0, 0, 0.01);
`;

export const Text = styled(NormalText)`
  color: ${({ mobile }) => (mobile ? '#fffffa' : '#1b9d5c')};
  text-shadow: 1px 1px 2px rgba(66, 68, 90, 1);
  @media (min-width: 762px) {
    font-size: 45px;
  }
  @media (min-width: 1440px) {
    font-size: 55px;
  }
`;
export const SecondText = styled(NormalText)`
  color: ${({ mobile }) => (mobile ? '#fffffa' : '#1b9d5c')};
  font-size: 50px;
  text-shadow: 1px 1px 2px rgba(66, 68, 90, 1);
  @media (min-width: 762px) {
    font-size: 52px;
  }
  @media (min-width: 1440px) {
    font-size: 61px;
  }
`;

export const Triangle = styled.img`
  position: absolute;
  top: ${({ top }) => top + 'px'};
  left: ${({ left }) => left + 'px'};
  rotate: ${({ rotate }) => rotate + 'deg'};
  width: 100px;
  height: 80px;
  opacity: 1;
`;
export const IconLink = styled.a`
  padding: 68px 0 0 0;
  display: flex;
  justify-content: center;
  background: no-repeat center/100% url(${({ icon }) => icon});
  width: 55px;
  height: 55px;
  margin: 10px 0px 0px 0px;
  text-align: center;
  color: #0a0a0a;
  text-decoration: none;
  font-size: 20px;
  color: #fffffa;

  @media (min-width: 762px) {
    padding: 68px 0 0 0;
    width: 80px;
    height: 80px;
    margin: 20px px 0px 0px;

    &:hover {
      &::before {
        content: '';
        margin-top: -68px;
        cursor: url(${cursorImg}), auto;
        width: 70px;
        height: 70px;
        background-color: #1b9d5c30;
        border-radius: 10px;
      }
    }
  }
  @media (min-width: 1440px) {
    width: 80px;
    height: 80px;
    margin: 40px 0px 0px 0px;

    &:hover {
      &::before {
        content: '';
        margin-top: -68px;
        cursor: url(${cursorImg}), auto;
        width: 70px;
        height: 70px;
        background-color: #1b9d5c30;
        border-radius: 10px;
      }
    }
  }
`;
