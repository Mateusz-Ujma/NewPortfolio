import styled from 'styled-components';
import { NormalText } from 'atoms/NormalText';
import { ShadowedText } from 'atoms/ShadowedText';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row;
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
  }
`;

export const MockedImage = styled.div`
  background-color: #d46c77;
  width: 280px;
  height: 280px;
  margin: 90px auto 0 auto;
  border-radius: 50px;
  @media (min-width: 1024px) {
    margin: 90px 220px 0 150px;
    width: 350px;
    height: 350px;
  }
`;

export const Text = styled(NormalText)`
  @media (min-width: 1024px) {
    font-size: 80px;
  }
`;
export const ShadowText = styled(ShadowedText)`
  @media (min-width: 1024px) {
    font-size: 80px;
  }
`;
