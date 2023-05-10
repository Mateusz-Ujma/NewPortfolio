import React, { useState, useEffect } from 'react';
import { Wrapper, NavigationWrapper, NavigationLink, MenuButton } from './Navigation.styles';

const Navigation = ({ refSkills, refExp, refContact, refAbout }) => {
  const windowWidth = window.innerWidth;
  const [menuVisible, setMenuVisible] = useState(false);
  const handleMenuVisible = () => {
    setMenuVisible(!menuVisible);
  };
  useEffect(() => {
    if (window.innerWidth >= 762) {
      setMenuVisible(true);
    }
  }, []);
  const handleClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setMenuVisible(!menuVisible);
  };
  window.onscroll = function () {
    const button = document.querySelector('.sticky-button');
    const navWrap = document.querySelector('.nav-wrap');
    const navLinks = document.querySelectorAll('.nav-link');
    if (window.pageYOffset >= 200) {
      button.classList.add('sticky');
      if (windowWidth >= 762) {
        navWrap.classList.add('sticky-nav');
        navLinks.forEach((link) => {
          link.classList.add('sticky-link');
        });
      }
    } else {
      button.classList.remove('sticky');
      if (windowWidth >= 762) {
        navWrap.classList.remove('sticky-nav');
        navLinks.forEach((link) => {
          link.classList.remove('sticky-link');
        });
      }
    }
  };
  return (
    <Wrapper className="sticky-button">
      <MenuButton onClick={handleMenuVisible} visible={menuVisible} />
      <NavigationWrapper className="nav-wrap" visible={menuVisible}>
        <NavigationLink className="nav-link" onClick={() => handleClick(refSkills)}>
          Technologie
        </NavigationLink>
        <NavigationLink className="nav-link" onClick={() => handleClick(refExp)}>
          Doświadczenie
        </NavigationLink>
        <NavigationLink className="nav-link" onClick={() => handleClick(refAbout)}>
          O mnie
        </NavigationLink>
        <NavigationLink className="nav-link" onClick={() => handleClick(refContact)}>
          Kontakt
        </NavigationLink>
      </NavigationWrapper>
    </Wrapper>
  );
};

export default Navigation;
