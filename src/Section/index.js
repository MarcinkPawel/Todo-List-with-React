import "./style.css";


const Section = ({ sectionHeading, headerContent, list, changeGrid }) => (


    <section className="section">
    <div className={`section__header ${changeGrid}`}>
      <h2 className="section__heading ">{sectionHeading}</h2>
      {headerContent}
    </div>
    <div className="section__list">
      {list}
    </div>
  </section>

);

export default Section;