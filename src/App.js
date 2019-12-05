/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import "./App.css";
import * as faker from "faker";
import emailSvg from "./email.svg";
import locationSvg from "./location.svg";

const experienceFake = () => ({
  company: faker.company.companyName(),
  jobTitle: faker.name.jobTitle(),
  duties: [faker.lorem.sentence(), faker.lorem.sentence()],
  date: {
    start: "02/2019",
    end: "10/2019"
  }
});

const content = {
  basicInfo: {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    city: faker.address.city(),
    email: faker.internet.email(),
    experience: faker.name.jobTitle()
  },
  summary: faker.lorem.paragraph(),
  languages: [
    { name: "English", level: "Fluent" },
    { name: "German", level: "Conversional" },
    { name: "Venetian", level: "Fluent" }
  ],
  educations: [
    {
      name: "Master of Science",
      description: faker.lorem.word(),
      issuer: faker.lorem.word(),
      endYear: "2010"
    }
  ],
  skills: [
    {
      category: "Frontend",
      items: [{ name: "React" }, { name: "CSS" }, { name: "D3" }]
    },
    {
      category: "Backend",
      items: [
        { name: "Node" },
        { name: "Kotlin" },
        { name: "C++" },
        { name: "Java" }
      ]
    },
    {
      category: "Methodologies",
      items: [{ name: "Agile" }, { name: "Lean" }, { name: "Scrum" }]
    },
    {
      category: "Databases",
      items: [{ name: "Postgres" }, { name: "Oracle" }, { name: "Mysql" }]
    },
    {
      category: "DevOps",
      items: [{ name: "Docker" }, { name: "Ansible" }, { name: "Chef" }]
    }
  ],
  experiences: [
    experienceFake(),
    experienceFake(),
    experienceFake(),
    experienceFake()
  ]
};
console.log(faker);
const Summary = ({ summary }) => (
  <section
    css={css`
      grid-area: su;
      padding: 1rem 0;
    `}
  >
    <h3>Summary</h3>
    <p>{summary}</p>
  </section>
);

const SkillSection = ({ skill = {} }) => (
  <tr
    css={css`
      td {
        font-weight: 500;
      }
    `}
  >
    <th>{skill.category}</th>
    <td>{skill.items.map(item => item.name).join(", ")}</td>
  </tr>
);

const Languages = ({ languages = [] }) => (
  <section
    css={css`
      grid-area: la;
    `}
  >
    <h3>Languages</h3>
    <table
      css={css`
        th {
          text-align: left;
          color: gray;
          padding: 0.3rem 2rem 0.3rem 0;
        }
        td {
          padding: 0.3rem 1rem 0.3rem 0;
        }
      `}
    >
      <thead>
        <tr>
          {languages.map((language, key) => (
            <th key={key}>{language.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {languages.map((language, key) => (
            <td key={key}>{language.level}</td>
          ))}
        </tr>
      </tbody>
    </table>
  </section>
);

const Skills = ({ skills = [] }) => (
  <section
    css={css`
      grid-area: sk;
    `}
  >
    <h3>Skills</h3>
    <table
      css={css`
        th {
          text-align: left;
          color: gray;
          padding: 0.3rem 0.3rem 0.3rem 0;
          margin: 1rem;
        }
      `}
    >
      <tbody>
        {skills.map((skill, key) => (
          <SkillSection key={key} skill={skill} />
        ))}
      </tbody>
    </table>
  </section>
);

const Experience = ({ experience }) => (
  <div
    css={css`
      padding: 0.5rem 0;
    `}
  >
    <h4>{experience.jobTitle}</h4>
    <div
      css={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      <h5>{experience.company}</h5>
      <span
        css={css`
          color: grey;
          font-weight: 400;
          font-size: 0.83em;
        `}
      >
        {experience.date.start} - {experience.date.end}
      </span>
    </div>
    <ul>
      {experience.duties.map((duty, key) => (
        <li key={key}>{duty}</li>
      ))}
    </ul>
  </div>
);
const Experiences = ({ experiences }) => (
  <section
    css={css`
      grid-area: ex;
    `}
  >
    <h3>Experiences</h3>
    <div>
      {experiences.map((experience, key) => (
        <Experience experience={experience} key={key} />
      ))}
    </div>
  </section>
);

const Education = ({ education }) => (
  <div
    css={css`
      padding: 0.5rem 0;
    `}
  >
    <div
      css={css`
        color: gray;
        font-weight: bold;
        font-size: 1.2rem;
        padding-bottom: 0.5rem;
      `}
    >
      {education.name}
    </div>
    <div
      css={css`
        display: flex;
        > div {
          padding-right: 0.5rem;
        }
        font-size: 1.2rem;
      `}
    >
      <div>{education.issuer}</div>
      <div
        css={css`
          font-weight: 300;
        `}
      >
        {education.endYear}
      </div>
    </div>
  </div>
);

const Educations = ({ educations = [] }) => (
  <section
    css={css`
      grid-area: ed;
    `}
  >
    <h3>Educations</h3>
    <div>
      {educations.map((education, key) => (
        <Education education={education} key={key} />
      ))}
    </div>
  </section>
);

const BasicInfo = ({ info }) => (
  <section
    css={css`
      grid-area: in;
      display: flex;
      justify-content: space-between;
      align-content: flex-start;
      align-items: flex-start;
      margin-right: 0.5rem;
    `}
  >
    <div
      css={css`
        > div {
          padding: 0.5rem 0;
        }
      `}
    >
      <h1>
        {info.firstName} {info.lastName}
      </h1>
      <div
        css={css`
          font-size: 1.3rem;
        `}
      >
        {info.experience}
      </div>
    </div>
    <div
      css={css`
        > div {
          display: flex;
          align-items: center;
          img {
            padding: 0.6rem;
          }
        }
      `}
    >
      <div>
        <img alt="email" src={emailSvg} width="20" />
        <span>{info.email}</span>
      </div>
      <div>
        <img alt="location" src={locationSvg} width="20" />
        <span>{info.city}</span>
      </div>
    </div>
  </section>
);

function App() {
  return (
    <main
      css={css`
        background: white;
        height: 100%;
        font-size: 18px;
        box-sizing: border-box;
        max-width: 800px;
        padding: 0 2rem 0 1rem;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: minmax(min-content, max-content);
        grid-template-areas:
          "in in"
          "su su"
          "sk sk"
          "ex ex"
          "ed la";
        @media (max-width: 420px) {
          grid-template-columns: repeat(1, 1fr);
          grid-template-areas:
            "in"
            "su"
            "sk"
            "ex"
            "ed"
            "la";
        }
        * {
          margin: 0;
          padding: 0;
        }
        section {
          padding: 1rem 0 1rem 0;
          border-bottom: 1px dashed lightgray;
        }
        h1,
        h2,
        h3 {
          padding-bottom: 0.3rem;
          color: darkblue;
          text-transform: uppercase;
        }
        h4,
        h5 {
          padding-bottom: 0.3rem;
        }
        ul {
          padding: 0.2rem 2rem;
        }
      `}
    >
      <BasicInfo info={content.basicInfo} />
      <Languages languages={content.languages} />
      <Summary summary={content.summary} />
      <Skills skills={content.skills} />
      <Experiences experiences={content.experiences} />
      <Educations educations={content.educations} />
      {/*JSON.stringify(content, null, 4)*/}
    </main>
  );
}

export default App;
