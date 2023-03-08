import { SectionStyle, Header, SubHeader, Text } from "./styled";


const Section = ({ sectionHeading, headerContent, list, changeGrid }) => (
  <SectionStyle>
    <Header grid={changeGrid}>
     <SubHeader>{sectionHeading}</SubHeader>
      {headerContent}
    </Header>
    <Header>{list}</Header>
  </SectionStyle>
);

export default Section;
