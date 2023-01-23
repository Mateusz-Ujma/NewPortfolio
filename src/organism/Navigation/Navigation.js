import React, { useState, useEffect } from 'react';
import { Wrapper, NavigationWrapper, NavigationLink, MenuButton } from './Navigation.styles';

const Navigation = ({ refHome, refSkills, refExp, refContact, refAbout }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const handleMenuVisible = () => {
    setMenuVisible(!menuVisible);
  };
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setMenuVisible(true);
    }
  }, []);
  const handleClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setMenuVisible(!menuVisible);
  };

  return (
    <Wrapper>
      <MenuButton onClick={handleMenuVisible} visible={menuVisible} />
      <NavigationWrapper visible={menuVisible}>
        <NavigationLink onClick={() => handleClick(refHome)}>Start</NavigationLink>
        <NavigationLink onClick={() => handleClick(refSkills)}>Technologie</NavigationLink>
        <NavigationLink onClick={() => handleClick(refExp)}>Doświadczenie</NavigationLink>
        <NavigationLink onClick={() => handleClick(refAbout)}>O mnie</NavigationLink>
        <NavigationLink onClick={() => handleClick(refContact)}>Contact</NavigationLink>
      </NavigationWrapper>
    </Wrapper>
  );
};

export default Navigation;
