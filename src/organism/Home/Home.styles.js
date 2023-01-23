import styled from 'styled-components';
import { NormalText } from 'atoms/NormalText';
import { ShadowedText } from 'atoms/ShadowedText';

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  background-color: #1b9d51;
  @media (min-width: 1024px) {
    flex-direction: row;
    height: 100vh;
    justify-content: center;
    align-items: center;
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
  @media (min-width: 1024px) {
    width: 100px;
    font-size: 80px;
    padding: 0 0 0 0;
  }
`;
export const TriangleRight = styled.img`
  position: absolute;
  top: 20px;
  right: -10px;
  rotate: -90deg;
  width: 100px;
  height: 80px;
  opacity: 1;
`;
export const TriangleLeft = styled.img`
  position: absolute;
  top: 300px;
  left: -20px;
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
  @media (min-width: 1024px) {
    width: 350px;
    height: 350px;
    margin: 0px auto 0 auto;
  }

  box-shadow: 5px 5px rgba(0, 0, 0, 0.3), 10px 10px rgba(0, 0, 0, 0.2), 15px 15px rgba(0, 0, 0, 0.1), 20px 20px rgba(0, 0, 0, 0.05),
    25px 25px rgba(0, 0, 0, 0.01);
`;

export const Text = styled(NormalText)`
  color: #fffffa;
  text-shadow: 1px 1px 2px rgba(66, 68, 90, 1);
  @media (min-width: 1024px) {
    font-size: 80px;
  }
`;
export const SecondText = styled(NormalText)`
  color: #fffffa;
  font-size: 50px;
  text-shadow: 1px 1px 2px rgba(66, 68, 90, 1);
  @media (min-width: 1024px) {
    font-size: 80px;
  }
`;
export const ShadowText = styled(ShadowedText)`
  color: #333;
  @media (min-width: 1024px) {
    font-size: 80px;
  }
`;
