import styled from 'styled-components';
import { NormalText } from 'atoms/NormalText';
import { Icons } from 'assets/icons/Icons';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SecondWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 10px 0 10px;
  margin: 20px auto 0 auto;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
export const MainText = styled(NormalText)`
  margin: 0 auto 60px auto;
`;

export const IconLink = styled.a`
  padding: 68px 0 0 0;
  display: flex;
  justify-content: center;
  background: no-repeat center/90% url(${({ icon }) => icon});
  width: 70px;
  height: 70px;
  margin: 20px auto 20px auto;
  text-align: center;
  color: #f5f5f5;
  text-decoration: none;
  font-size: 20px;
  @media (min-width: 1024px) {
    margin: 20px;
    &:hover {
      border: 1px solid #f5f5f500;
      border-radius: 10px;
    }
  }
`;
