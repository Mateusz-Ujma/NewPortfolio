import styled, { css } from 'styled-components';
import { slideLeftAnimation } from 'Animations/SlideAnimations/slideLeftAnimation';
import { slideRightAnimation } from 'Animations/SlideAnimations/slideRightAnimation';
import { menuCloseAfter, menuOpenAfter } from 'Animations/MenuAnimations/After/menuAfterAnimations';
import { menuCloseBefore, menuOpenBefore } from 'Animations/MenuAnimations/Before/menuBeforeAnimations';
import cursorImg from 'assets/images/pointer.png';

export const Wrapper = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 20;
  padding: 10px 20px;
  border-radius: 10px;
  transition: 0.3s ease;
  .sticky {
    bottom: 20px;
    right: 20px;
    margin: 40px;
  }
  .sticky-nav {
    background: #33333360;
  }
  .sticky-link {
    color: #fffffa;
    &:hover {
      color: #333;
    }
  }
`;

export const MenuButton = styled.button`
  position: absolute;

  border: none;
  border-radius: 150px;
  width: 45px;
  height: 45px;
  background-color: #33333383;
  z-index: 20;
  @media (min-width: 762px) {
    visibility: hidden;
  }
  ::after {
    position: absolute;
    top: 15px;
    left: 5px;
    content: '';
    display: inline-block;
    border: 2px solid #1b9d51;
    background-color: #1b9d51;
    border-radius: 3px;

    width: 35px;
    animation: ${({ visible }) =>
      visible
        ? css`
            ${menuOpenAfter} 0.5s ease-in-out forwards
          `
        : css`
            ${menuCloseAfter} 0.5s ease-in-out forwards
          `};
  }
  ::before {
    position: absolute;
    top: 25px;
    left: 5px;
    content: '';
    display: inline-block;
    border: 2px solid #1b9d51;
    background-color: #1b9d51;
    border-radius: 3px;
    width: 35px;
    animation: ${({ visible }) =>
      visible
        ? css`
            ${menuOpenBefore} 0.5s ease-in-out forwards
          `
        : css`
            ${menuCloseBefore} 0.5s ease-in-out forwards
          `};
  }
  &:hover {
    background-color: #333333;
  }
`;

export const NavigationWrapper = styled.div`
  position: absolute;
  z-index: -9;
  left: -400px;
  top: -30px;
  width: 190vw;
  height: 110vh;
  display: flex;
  flex-direction: column;
  padding: 160px 0 0 0;
  /* From https://css.glass */
  background: #fffffa40;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid #1b9d51;

  @media (min-width: 762px) {
    left: 0;
    flex-direction: row;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    width: 100vw;
    height: 70px;
    padding: 10px;
    animation: none;
    border: none;
    box-shadow: none;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    padding-right: 40px;
    background: #33333300;
    margin: -20px;
  }

  animation: ${({ visible }) =>
    visible
      ? css`
          ${slideRightAnimation} 0.4s ease-in-out forwards
        `
      : css`
          ${slideLeftAnimation} 0.4s ease-in-out forwards
        `};
`;
export const NavigationLink = styled.p`
  margin: 45px 0px 0px 430px;
  text-decoration: none;
  color: #333333;
  font-size: 30px;
  font-weight: 700;
  width: 180px;
  @media (min-width: 762px) {
    left: 0;
    color: #333;
    font-weight: 500;
    font-size: 17px;
    margin: 10px 20px 0px 20px;
    width: auto;

    &:hover {
      color: #fffffa;

      transition: all 0.2s;
      cursor: url(${cursorImg}), auto;
    }
  }
  @media (min-width: 1440px) {
    font-size: 19px;
  }
`;
