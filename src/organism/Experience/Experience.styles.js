import styled from 'styled-components';
import { NormalText } from 'atoms/NormalText';
import { MockedImage } from 'organism/Home/Home.styles';
import imgPortfolio from 'assets/images/portfolio.png';
import { TriangleLeft, TriangleRight } from 'organism/Home/Home.styles';

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
    background-color: #1b9d51;
    width: 130px;
    height: 24px;
    -webkit-box-shadow: 0px 0px 4px 1px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 0px 4px 1px rgba(66, 68, 90, 1);
    box-shadow: 0px 0px 4px 1px rgba(66, 68, 90, 1);
    border-radius: 5px;
  }
`;
export const SecondText = styled(NormalText)`
  margin: 0px 0 25px 0;
  font-size: 22px;
  letter-spacing: 1px;
  text-align: ${({ isLeft }) => (isLeft ? 'left' : 'right')};
`;
export const ThirdText = styled(NormalText)`
  margin: 0 0 15px 0;
  font-size: 17px;
  text-align: left;
  letter-spacing: 1px;
`;

export const SecondWrapper = styled(Wrapper)`
  width: 85vw;
  flex-wrap: wrap;
  border-radius: 15px;
  padding: 25px 8px 0 8px;
  margin: 0px auto 60px auto;
  @media (min-width: 1024px) {
    width: 80%;
    margin: 0px auto 60px auto;
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

  @media (min-width: 1024px) {
    width: 300px;
    margin: 10px auto 70px auto;
  }
`;
export const Button = styled.a`
  background-color: #1b9d51;
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
  @media (min-width: 1024px) {
    &:hover {
      background-color: #f5f5f560;
      color: #f5f5f5;
    }
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
