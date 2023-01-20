import { NormalText } from 'atoms/NormalText';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 50px 0 50px;
  margin-top: 80px;
  @media (min-width: 1024px) {
    padding: 0px 50px 0 50px;
    margin: 0px 0px 0px 0px;
    margin-top: 0px;
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MainText = styled(NormalText)`
  margin: 0 auto 60px auto;
`;
export const IconText = styled(NormalText)`
  font-size: 17px;
  display: flex;
  margin: 84px 0px 0px 0px;
  justify-content: center;
  @media (min-width: 1024px) {
    margin: 103px 0px 0px 0px;
  }
`;
export const Icon = styled.div`
  background-image: url(${({ img }) => img});
  background-size: cover;
  width: 80px;
  height: 80px;
  margin: 40px 22px 40px 22px;
  @media (min-width: 1024px) {
    width: 100px;
    height: 100px;
    margin: 40px 40px 40px 40px;
  }
`;
