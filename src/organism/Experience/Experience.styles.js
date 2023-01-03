import styled from 'styled-components';
import { NormalText } from 'atoms/NormalText';
import { MockedImage } from 'organism/Home/Home.styles';
import imgPortfolio from 'assets/images/portfolio.png';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 10px 0 10px;
  margin: 80px auto 0 auto;
`;

export const MainText = styled(NormalText)`
  margin: 0 auto 60px auto;
`;
export const MidText = styled(NormalText)`
  margin: 0px auto 30px auto;
  font-size: 22px;
  text-align: center;
`;
export const SecondText = styled(NormalText)`
  margin: 0px auto 25px auto;
  font-size: 22px;
  letter-spacing: 1px;
  text-align: center;
`;
export const ThirdText = styled(NormalText)`
  margin: 0 auto 15px auto;
  font-size: 17px;
  text-align: center;
  letter-spacing: 1px;
`;

export const SecondWrapper = styled(Wrapper)`
  width: 75vw;
  flex-wrap: wrap;
  border-radius: 20px;
  border: 2px solid #d46c77;
  padding: 25px 8px 0 8px;
  margin: 0px 0px 60px 0;
  @media (min-width: 1024px) {
    width: 60%;
    margin: 0px auto 60px auto;
  }
`;

export const Image = styled(MockedImage)`
  width: 270px;
  display: flex;
  justify-content: space-between;
  height: 190px;
  margin-top: 10px;
  margin-bottom: 70px;
  background: no-repeat center/80% url(${imgPortfolio});
  background-size: 390px;
  @media (min-width: 1024px) {
    width: 300px;

    margin: 10px auto 70px auto;
  }
`;
export const Button = styled.a`
  background-color: #f5f5f5;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d46c77;
  border: none;
  border-radius: 20px;
  font-size: 17px;
  letter-spacing: 1px;
  margin: 200px 15px 0px 15px;
  width: 100px;
  height: 40px;
  transition: all 0.2s;
  @media (min-width: 1024px) {
    &:hover {
      background-color: #f5f5f560;
      color: #f5f5f5;
    }
  }
`;
