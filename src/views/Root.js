import React, { useRef } from 'react';
import { Wrapper } from './Root.styles';
import Navigation from 'organism/Navigation/Navigation';
import Home from 'organism/Home/Home';
import MySkills from 'organism/MySkills/MySkills';
import Experience from 'organism/Experience/Experience';

const Root = () => {
  const refHome = useRef(null);
  const refSkills = useRef(null);
  const refExp = useRef(null);
  const refContact = useRef(null);
  return (
    <Wrapper>
      <Navigation refHome={refHome} refSkills={refSkills} refExp={refExp} refContact={refContact} />
      <Home refHome={refHome} />
      <MySkills refSkills={refSkills} />
      <Experience refExp={refExp} />
    </Wrapper>
  );
};

export default Root;
