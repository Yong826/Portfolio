import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { SiNotion } from 'react-icons/si'

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={ { display : "flex", alignItems: "center", color: 'white', marginBottom : '20px' }}>
          <DiCssdeck size="3rem"/><Span>Portfoilo</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#project">
          <NavLink>Project</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Yong826">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://elderly-suggestion-23d.notion.site/Study-bda0e9f11a804a05bed469a9ce0bc62c">
        <SiNotion size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/%EB%B3%91%EC%9A%A9-%EA%B9%80-840644190/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
