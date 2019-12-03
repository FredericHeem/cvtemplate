/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import "./App.css";
import * as faker from "faker";
import emailSvg from "./email.svg";
import locationSvg from "./location.svg";

const positionFake = () => ({
  company: faker.company.companyName(),
  position: faker.name.jobTitle(),
  duties: [faker.lorem.sentence(), faker.lorem.sentence()]
});

const content = {
  basicInfo: {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    city: faker.address.city(),
    email: faker.internet.email(),
    position: faker.name.jobTitle()
  },
  summary: {},
  skills: {},
  positions: [
    positionFake(),
    positionFake(),
    positionFake(),
    positionFake()
  ]
};
const Position = ({ position }) => (
  <div
    css={css`
      border: 1px dotted red;
      padding: 1rem 0;
    `}
  >
    {JSON.stringify(position)}
  </div>
);
const Positions = ({ positions }) => (
  <div>
    <h3>Career</h3>
    <div>
      {positions.map((position, key) => (
        <Position position={position} key={key} />
      ))}
    </div>
  </div>
);

const BasicInfo = ({ info }) => (
  <div
    css={css`
      border: 1px dotted red;
    `}
  >
    <div
      css={css`
        border: 1px dotted red;
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
        <div
          css={css`
            font-size: 2rem;
            font-weight: bold;
          `}
        >
          {info.firstName} {info.lastName}
        </div>
        <div
          css={css`
            font-size: 1.5rem;
          `}
        >
          {info.position}
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
  </div>
);

function App() {
  return (
    <div
      css={css`
        background: white;
        height: 100vh;
        font-size: 18px;
        box-sizing: border-box;
        padding: 1rem;
      `}
    >
      <BasicInfo info={content.basicInfo} />
      <Positions positions={content.positions} />
      <main></main>
      {/*JSON.stringify(content, null, 4)*/}
    </div>
  );
}

export default App;
