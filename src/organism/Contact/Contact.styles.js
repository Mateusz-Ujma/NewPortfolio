import styled from 'styled-components';
import { NormalText } from 'atoms/NormalText';
import cursorImg from 'assets/images/pointer.png';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1b9d5c;
  z-index: 1;
  padding-bottom: 50px;
  width: 100%;
`;

export const MainText = styled(NormalText)`
  margin: 0 auto 30px auto;
  color: #fffffa;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80vw;
  & input,
  textarea,
  button {
    margin: 2px 0px 4px 0px;
    background-color: #fffffa;
    border: none;
    border-radius: 4px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    letter-spacing: 1px;
    color: #333333;
    font-size: 17px;
    padding: 4px;
  }
`;

export const SecondFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & input {
    @media (min-width: 762px) {
      width: 50%;
    }
  }
  @media (min-width: 762px) {
    flex-direction: row;
    gap: 10px;
  }
`;
