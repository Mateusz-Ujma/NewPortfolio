import { NormalText } from 'atoms/NormalText';
import styled from 'styled-components';
import { TriangleLeft, TriangleRight } from 'organism/Home/Home.styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 50px 40px 50px;
  z-index: -1;
  width: 100%;
  background-color: #1b9d5c;
  position: relative;
  -webkit-box-shadow: 0px 15px 10px 1px #777;
  -moz-box-shadow: 0px 15px 10px 1px #777;
  box-shadow: 0px 5px 10px 1px #777;
  @media (min-width: 762px) {
    padding: 0px 50px 30px 50px;
    margin: 0px 0px 0px 0px;
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MainText = styled(NormalText)`
  margin: 0 auto 25px auto;
  color: #fffffa;
`;
export const IconText = styled(NormalText)`
  font-size: 17px;
  display: flex;
  margin: 84px 0px 0px 0px;
  justify-content: center;
  color: #fffffa;
  @media (min-width: 762px) {
    margin: 103px 0px 0px 0px;
  }
`;
export const Icon = styled.div`
  background-image: url(${({ img }) => img});
  background-size: cover;
  width: 80px;
  height: 80px;
  margin: 40px 22px 40px 22px;
  @media (min-width: 762px) {
    width: 100px;
    height: 100px;
    margin: 40px 40px 40px 40px;
  }
`;
export const TriangleL = styled(TriangleLeft)`
  left: 0;
  top: 500px;
`;
export const TriangleR = styled(TriangleRight)`
  top: 100px;
`;
