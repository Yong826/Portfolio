import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiNotion } from 'react-icons/si'

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <div>
      <FooterWrapper>
        <LinkList>
          <LinkColumn>
            <LinkTitle>Phone Call</LinkTitle>
            <LinkItem href="tel:010-7149-6888"> 010-7149-6888 </LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href="mailto:kkby826@gmail.com">
              kkby826@gmail.com
            </LinkItem>
          </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>
              This website was created for the purpose of portfolio.
            </Slogan>
          </CompanyContainer>
          <SocialContainer>
            <SocialIcons href="https://github.com/Yong826">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://elderly-suggestion-23d.notion.site/Study-bda0e9f11a804a05bed469a9ce0bc62c">
              <SiNotion size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/%EB%B3%91%EC%9A%A9-%EA%B9%80-840644190/">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
      </FooterWrapper>
    </div>
  );
};

export default Footer;
