import {SectionStyle, Header, SubHeader, Grid} from "./styled";


const Section = ({ sectionHeading, headerContent, list, changeGrid }) => (
  <SectionStyle>
    <Header changeGrid= {Grid}>
      
     <SubHeader>{sectionHeading}</SubHeader>
      {headerContent}
      
    </Header>
    <Header>{list}</Header>
  </SectionStyle>
);

export default Section;
