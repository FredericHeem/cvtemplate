/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import "./App.css";
import * as faker from "faker";
import emailSvg from "./email.svg";
import locationSvg from "./location.svg";

const experienceFake = () => ({
  company: faker.company.companyName(),
  jobTitle: faker.name.jobTitle(),
  duties: [faker.lorem.sentence(), faker.lorem.sentence()]
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
  skills: {},
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
      padding: 1rem 0;
    `}
  >
    <h3>Summary</h3>
    {JSON.stringify(summary)}
  </section>
);

const Experience = ({ experience }) => (
  <div
    css={css`
      padding: 1rem 0;
    `}
  >
    <h4>{experience.jobTitle}</h4>
    <h5>{experience.company}</h5>
    <ul>
      {experience.duties.map((duty, key) => (
        <li key={key}>{duty}</li>
      ))}
    </ul>
  </div>
);
const Experiences = ({ experiences }) => (
  <section>
    <h3>Experiences</h3>
    <div>
      {experiences.map((experience, key) => (
        <Experience experience={experience} key={key} />
      ))}
    </div>
  </section>
);

const BasicInfo = ({ info }) => (
  <section
    css={css`
    `}
  >
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-content: flex-start;
        align-items: flex-start;
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
    </div>
  </section>
);

function App() {
  return (
    <main
      css={css`
        background: white;
        height: 100vh;
        font-size: 18px;
        box-sizing: border-box;
        padding: 1rem;
        * {
          margin: 0;
          padding: 0;
        }
        h1,
        h2,
        h3 {
          padding-bottom: 0.5rem;
          color: darkblue;
          text-transform: uppercase;
        }
        h4,
        h5 {
          padding-bottom: 0.5rem;
        }
        ul {
          padding: 0.5rem 2rem;
        }
      `}
    >
      <BasicInfo info={content.basicInfo} />
      <Summary summary={content.summary} />
      <Experiences experiences={content.experiences} />
      {/*JSON.stringify(content, null, 4)*/}
    </main>
  );
}

export default App;