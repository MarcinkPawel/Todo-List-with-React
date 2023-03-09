import { SectionStyle, Header, SubHeader, HeaderContent } from "./styled";


const Section = ({ sectionHeading, headerContent, list, changeGrid, taskStatus, changeFlex }) => (
  <SectionStyle>
    <Header grid={changeGrid} flex={changeFlex}>
     <SubHeader>{sectionHeading}</SubHeader>
      {headerContent}
      <HeaderContent>{taskStatus}</HeaderContent>
    </Header>
    <Header>{list}</Header>
  </SectionStyle>
);

export default Section;
