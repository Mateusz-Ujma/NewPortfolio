import React, { useRef } from 'react';
import { Wrapper, SecondWrapper } from './Root.styles';
import Navigation from 'organism/Navigation/Navigation';
import Home from 'organism/Home/Home';
import MySkills from 'organism/MySkills/MySkills';
import Experience from 'organism/Experience/Experience';
import Contact from 'organism/Contact/Contact';
import Footer from 'organism/Footer/Footer';

const Root = () => {
  const refHome = useRef(null);
  const refSkills = useRef(null);
  const refExp = useRef(null);
  const refContact = useRef(null);
  return (
    <Wrapper>
      <SecondWrapper>
        <Navigation refHome={refHome} refSkills={refSkills} refExp={refExp} refContact={refContact} />
      </SecondWrapper>
      <SecondWrapper>
        <Home refHome={refHome} />
        <MySkills refSkills={refSkills} />
        <Experience refExp={refExp} />
        <Contact refContact={refContact} />
        <Footer />
      </SecondWrapper>
    </Wrapper>
  );
};

export default Root;
