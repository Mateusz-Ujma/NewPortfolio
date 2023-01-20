import styled from 'styled-components';
import { NormalText } from 'atoms/NormalText';

export const Wrapper = styled.div`
  display: flex;
  background-color: #d19c1d50;
  width: 100%;
  border-top: 2px solid #d19c1d50;
  flex-direction: column;
  justify-content: center;
  padding: 20px 30px 0 30px;
  margin: 80px auto 0 auto;
`;
export const MainText = styled(NormalText)`
  margin: 0 auto 10px auto;
  font-size: 13px;
  text-align: center;
`;
export const LinkText = styled.a`
  text-decoration: none;
  color: #707070;
`;
