import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          안녕하세요 !  <br/>
          Welcome to my Portfolio :) <br/>
          </SectionTitle>

          <Button onClick={()=> window.location = 'https://elderly-suggestion-23d.notion.site/Study-bda0e9f11a804a05bed469a9ce0bc62c'}>Learn more</Button>
      </LeftSection>
  </Section>
);

export default Hero;