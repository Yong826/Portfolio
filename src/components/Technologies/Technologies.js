import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>

    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Html
            <br /> CSS
            <br /> Java Script <br />
            React.js <br /> Next.js <br />
            jQuery
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Spring <br />
            Node.js <br />
            Java <br />
            MySQL <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            GitHub <br />
            Git <br />
            Bootstrap <br /> Taliwind CSS <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
