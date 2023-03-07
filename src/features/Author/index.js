import Section from "../../common/Section";

const Author = () => (
  <div className="main">
    <header>
      <h1>About</h1>
    </header>
    <Section
      sectionHeading="Paweł Marcinkowski"
      headerContent={
        <>
          <p>
            Hi everyone I'm <strong>Paweł Marcinkowski</strong>, I have already
            been teaching English for over 8 years. I ran my own language school
            and I even have some experience with teaching programmers and
            graphic designers, I hope that knowledge acquired during my work
            with IT students help me to smoothen the process of getting new
            skills.
          </p>
          <p>
            Despite that I'm a great fun of board games and any kind of medieval
            rpg games. Once I was at high school I used to be Warhammer rpg game
            master. I'm rather creative person therefore it's quite easy for me
            to come up with some creative plots and scenarios.
          </p>
        </>
      }
    />
  </div>
);

export default Author;