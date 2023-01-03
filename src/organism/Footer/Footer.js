import React from 'react';
import { MainText, Wrapper, LinkText } from './Footer.styles';

const Footer = () => {
  return (
    <Wrapper>
      <MainText>
        © 2023 Mateusz Ujma all rights reserved
        <br />
        <br />
        Icons made by{' '}
        <LinkText href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">
          Pixel perfect
        </LinkText>{' '}
        from{' '}
        <LinkText href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </LinkText>
      </MainText>
    </Wrapper>
  );
};

export default Footer;
