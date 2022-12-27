import styled, { css } from 'styled-components';
import { slideLeftAnimation } from 'Animations/SlideAnimations/slideLeftAnimation';
import { slideRightAnimation } from 'Animations/SlideAnimations/slideRightAnimation';
import { menuCloseAfter, menuOpenAfter } from 'Animations/MenuAnimations/After/menuAfterAnimations';
import { menuCloseBefore, menuOpenBefore } from 'Animations/MenuAnimations/Before/menuBeforeAnimations';

export const Wrapper = styled.div`
  position: sticky;
  top: 20px;
`;

export const MenuButton = styled.button`
  position: absolute;
  left: 25px;
  border: none;
  border-radius: 150px;
  width: 45px;
  height: 45px;
  background-color: #f5f5f583;
  z-index: 10;

  ::after {
    position: absolute;
    top: 15px;
    left: 5px;
    content: '';
    display: inline-block;
    border: 2px solid #c83e4d;
    background-color: #c83e4d;
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
    border: 2px solid #c83e4d;
    background-color: #c83e4d;
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
    background-color: #d46c7755;
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
  background: #7f344277;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(184, 184, 184, 0.57);
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
  color: #f5f5f5;
  font-size: 30px;
  font-weight: 500;
`;
