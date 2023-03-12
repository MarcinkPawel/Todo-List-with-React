import { SectionStyle, Wrapper, Header, SubHeader, HeaderContent } from "./styled";


const Section = ({ sectionHeading, headerContent, list, changeGrid, taskStatus, changeFlex, additionalHeadingContent }) => (
  <SectionStyle>
    <Header grid={changeGrid} flex={changeFlex}>
      <Wrapper>
     <SubHeader>{sectionHeading}</SubHeader>
      {additionalHeadingContent}
     </Wrapper>
      {headerContent}
      <HeaderContent>{taskStatus}</HeaderContent>
    </Header>
    <Header>{list}</Header>
  </SectionStyle>
);

export default Section;
