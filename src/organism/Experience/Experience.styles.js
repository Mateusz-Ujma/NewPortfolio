import styled from 'styled-components';
import { NormalText } from 'atoms/NormalText';
import { MockedImage } from 'organism/Home/Home.styles';
import imgPortfolio from 'assets/images/portfolio.png';
import { TriangleLeft, TriangleRight } from 'organism/Home/Home.styles';
import cursorImg from 'assets/images/pointer.png';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 0 0 0;
  margin: 30px 0 0 0;
  width: 100vw;
`;

export const MainText = styled(NormalText)`
  margin: 0 auto 60px auto;
`;
export const MidText = styled(NormalText)`
  position: relative;
  align-self: ${({ isLeft }) => (isLeft ? 'flex-start' : 'flex-end')};
  font-size: 22px;
  margin: ${({ isLeft }) => (isLeft ? '0 20px 20px 40px' : '0 60px 20px 0px')};
  text-align: center;
  color: #fffffa;
  text-shadow: 1px 1px 2px rgba(66, 68, 90, 1);
  ::after {
    position: absolute;
    left: -10px;
    top: 3px;
    z-index: -3;
    content: '';
    background-color: #1b9d5c;
    width: 130px;
    height: 24px;
    -webkit-box-shadow: 0px 0px 4px 1px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 0px 4px 1px rgba(66, 68, 90, 1);
    box-shadow: 0px 0px 4px 1px rgba(66, 68, 90, 1);
    border-radius: 5px;
  }
  @media (min-width: 762px) {
    margin: ${({ isLeft }) => (isLeft ? '0px 0 10px 60px' : '0px 80px 10px 0px')};
    font-size: 26px;
    ::after {
      width: ${({ isLeft }) => (isLeft ? '160px' : '125px')};
      height: 28px;
      -webkit-box-shadow: 0px 0px 4px 1px rgba(66, 68, 90, 1);
      -moz-box-shadow: 0px 0px 4px 1px rgba(66, 68, 90, 1);
      box-shadow: 0px 0px 4px 1px rgba(66, 68, 90, 1);
      border-radius: 5px;
    }
  }
`;
export const SecondText = styled(NormalText)`
  margin: 0px 0 25px 0;
  font-size: 22px;
  letter-spacing: 1px;
  text-align: ${({ isLeft }) => (isLeft ? 'left' : 'right')};
  @media (min-width: 762px) {
    font-size: 26px;
  }
`;
export const ThirdText = styled(NormalText)`
  margin: 0 0 15px 0;
  font-size: 17px;
  text-align: left;
  letter-spacing: 1px;
  @media (min-width: 762px) {
    font-size: 18px;
    display: flex;
    align-items: center;
  }
`;

export const SecondWrapper = styled(Wrapper)`
  width: 85vw;
  flex-wrap: wrap;
  flex-direction: ${({ isProjects }) => (isProjects ? 'row' : 'column')};
  align-self: ${({ isLeft }) => (isLeft ? 'flex-start' : 'flex-end')};
  padding: 25px 8px 0 8px;
  margin: 0px auto 60px auto;
  @media (min-width: 762px) {
    width: 70%;
    margin: ${({ isLeft }) => (isLeft ? '0px 0 60px 80px' : '0px 80px 60px 0px')};
  }
`;
export const ThirdWrapper = styled(Wrapper)`
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  align-self: ${({ isLeft }) => (isLeft ? 'flex-start' : 'flex-end')};
  padding: 25px 8px 0 8px;
  margin: 0px auto 0px auto;
  @media (min-width: 762px) {
    width: 100%;
    flex-wrap: nowrap;
    margin: ${({ isLeft }) => (isLeft ? '0px 0 0px 0px' : '0px 0px 0px 0px')};
  }
`;
export const Image = styled(MockedImage)`
  width: 270px;
  display: flex;
  justify-content: space-between;
  height: 190px;
  margin: 10px 0px 70px 0px;
  background: no-repeat center/80% url(${imgPortfolio});
  background-size: 390px;
  box-shadow: none;
  align-self: flex-end;
  @media (min-width: 762px) {
    width: 320px;
    height: 190px;
    margin: ${({ isLeft }) => (isLeft ? '0px 40px 0px 0px' : '0px 40px 0px 0px')};
  }
`;
export const Button = styled.a`
  background-color: #1b9d5c;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fffffa;
  border: none;
  border-radius: 20px;
  font-size: 17px;
  letter-spacing: 1px;
  margin: 200px 15px 0px 15px;
  width: 100px;
  height: 40px;
  transition: all 0.2s;
  text-shadow: 1px 1px 2px rgba(66, 68, 90, 1);
  @media (min-width: 762px) {
    &:hover {
      background-color: #149451;
      color: #f5f5f5;
    }
    cursor: url(${cursorImg}), auto;
  }
`;

export const TriangleL = styled(TriangleLeft)`
  left: -10;
  top: 800px;
`;

export const TriangleR = styled(TriangleRight)`
  left: -10;
  top: 180px;
`;
