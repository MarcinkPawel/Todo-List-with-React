import { SectionStyle, Header, SubHeader } from "./styled";


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
