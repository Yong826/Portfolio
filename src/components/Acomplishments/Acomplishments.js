import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2020, text: '호텔 경영학과 졸업, TAFE Queensland'},
  { number: 2021, text: '호텔 요리사, 1년 6개월', },
  { number: 2022, text: '공익 만기전역', },
  { number: 2022.06, text: '프론트엔드 개발자로서 공부 시작', }
];

const Acomplishments = () => (
   <Section>
    <SectionTitle>Time Line</SectionTitle>
    <Boxes>
      {data.map((card, index)=>(
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
   </Section>
);

export default Acomplishments;
