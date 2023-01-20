import styled, { css } from 'styled-components';
import { slideLeftAnimation } from 'Animations/SlideAnimations/slideLeftAnimation';
import { slideRightAnimation } from 'Animations/SlideAnimations/slideRightAnimation';
import { menuCloseAfter, menuOpenAfter } from 'Animations/MenuAnimations/After/menuAfterAnimations';
import { menuCloseBefore, menuOpenBefore } from 'Animations/MenuAnimations/Before/menuBeforeAnimations';

export const Wrapper = styled.div`
  position: sticky;
  top: 20px;
  @media (min-width: 1024px) {
    background: #d19c1d55;
    top: 0;
    display: flex;
    align-items: center;
    border-right: solid 2px #d19c1d;
  }
`;

export const MenuButton = styled.button`
  position: absolute;
  left: 25px;
  border: none;
  border-radius: 150px;
  width: 45px;
  height: 45px;
  background-color: #d19c1d83;
  z-index: 10;
  @media (min-width: 1024px) {
    visibility: hidden;
  }
  ::after {
    position: absolute;
    top: 15px;
    left: 5px;
    content: '';
    display: inline-block;
    border: 2px solid #333333;
    background-color: #333333;
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
    border: 2px solid #333333;
    background-color: #333333;
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
    background-color: #d19c1d;
  }
`;

export const NavigationWrapper = styled.div`
  position: absolute;
  z-index: -9;
  left: -500px;
  top: -30px;
  width: 200vw;
  height: 110vh;
  display: flex;
  flex-direction: column;
  padding: 160px 0 0 0;
  /* From https://css.glass */
  background: #fffffa77;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid #d19c1d;
  @media (min-width: 1024px) {
    position: relative;
    width: 230px;
    height: 100vh;
    padding: 190px 0 0 0;
    animation: none;
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
  margin: 45px 0px 0px 530px;
  text-decoration: none;
  color: #333333;
  font-size: 30px;
  font-weight: 500;
  width: 180px;
  @media (min-width: 1024px) {
    left: 0;
    margin: 45px 0px 0px 530px;
    &:hover {
      color: #0a0a0a;
      cursor: pointer;
      transition: all 0.2s;
    }
  }
`;
