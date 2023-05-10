import styled from 'styled-components';
import { NormalText } from 'atoms/NormalText';
import { TriangleLeft, TriangleRight } from 'organism/Home/Home.styles';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 0 80px 0;
  margin: 30px 0 0 0;

  background-color: #1b9d5c;
  position: relative;
  -webkit-box-shadow: 0px -5px 10px 1px #777;
  -moz-box-shadow: 0px -5px 10px 1px #777;
  box-shadow: 0px -5px 10px 1px #777;
  width: 100%;
`;

export const SecondWrapper = styled(Wrapper)`
  width: 93%;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 25px 0px 0 0px;
  margin: 0px auto 60px auto;
  box-shadow: none;
  align-self: ${({ isLeft }) => (isLeft ? 'flex-start' : 'flex-end')};
  @media (min-width: 762px) {
    width: 80%;
    margin: ${({ isLeft }) => (isLeft ? '0px 0px 0px 0px' : '0px 0px 0px 0px')};
    justify-content: space-around;
    align-items: center;
  }
  @media (min-width: 1440px) {
    padding: 0px 0px 0 0px;
  }
`;
export const MainText = styled(NormalText)`
  margin: 0 auto 60px auto;
  color: #fffffa;
`;
export const SecondText = styled(NormalText)`
  display: flex;
  flex-direction: row;
  width: 50%;
  margin: 0px 0 25px 0;
  font-size: 16px;
  letter-spacing: 1px;
  text-align: ${({ isLeft }) => (isLeft ? 'left' : 'right')};
  color: #fffffa;
  @media (min-width: 762px) {
    font-size: 18px;
  }
`;

export const TriangleL = styled(TriangleLeft)`
  left: 0;
  top: 650px;
  z-index: 10;
`;

export const TriangleR = styled(TriangleRight)`
  right: -10px;
  top: 280px;
  z-index: 10;
`;

export const LuffyImg = styled.img`
  margin-top: -15px;
  width: 90px;
  height: 130px;
  @media (min-width: 762px) {
    width: 120px;
    height: 180px;
  }
`;
export const GeraltImg = styled.img`
  margin-top: -15px;
  width: 130px;
  height: 240px;
  @media (min-width: 762px) {
    width: 160px;
    height: 300px;
  }
`;
export const MenImg = styled.img`
  width: 110px;
  height: 110px;
  @media (min-width: 762px) {
    width: 200px;
    height: 200px;
  }
`;
