import React from 'react';
import { Wrapper, MainText, IconLink, SecondWrapper } from './Contact.styles';
import { Icons } from 'assets/icons/Icons';

const Contact = ({ refContact }) => {
  return (
    <Wrapper ref={refContact}>
      <MainText>Contact</MainText>
      <SecondWrapper>
        <IconLink href="https://www.linkedin.com/in/mateusz-ujma/" icon={Icons.LINKEDIN} isMail={false}></IconLink>
        <IconLink href="https://github.com/Mateusz-Ujma" icon={Icons.GITHUB} isMail={false}></IconLink>
        <IconLink href="https://www.facebook.com/mateusz.ujma.7" icon={Icons.FB} isMail={false}></IconLink>
      </SecondWrapper>
      <IconLink icon={Icons.GMAIL} isMail={true}>
        mateuszujma1999@gmail.com
      </IconLink>
    </Wrapper>
  );
};

export default Contact;
