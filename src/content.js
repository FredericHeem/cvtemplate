import * as faker from "faker";
import * as photo from "./me.jpeg"

const experiences = () => ([{
    company: "HCL Labs",
    jobTitle: "Lead Software Engineer",
    duties: ["Implement an asset custody and identity solution based on the Corda platform.",
        "Develop the frontend and the backend."],
    date: {
        start: "06/2019",
        end: "12/2019"
    }
},
{
    company: "PR9",
    jobTitle: "CTO",
    duties: ["Build and lead a software team to create a high performance trading and payment system based on the Stellar blockchain.",
        "Drive agile development methodologies. Organising the Scrum ceremony.",
        "Continuously improve processes and practices of the software development lifecycle: testing, linting, continuous integration and deployment.",
        "Provide technical guidance, support and coaching to engineers."],
    date: {
        start: "06/2018",
        end: "03/2019"
    }
}, {
    company: "HCL Labs",
    jobTitle: "Full Stack Software engineer",
    duties: [
        "Redesign an invoice financing application for a global investment bank",
        "Create the project from scratch alongside the best practices",
        "Modelling REST API with RAML",
        "Write reusable components and libraries.",
        "Internationalisation, PDF report generation, D3 chart.",
        "End to end testing.",
        "React, Redux, ES6, Webpack, Mocha, Nightwatch, Java Spring Boot.",
        "Design and build a Proof Of Concept of a multi-asset trading and settlement platform based on the Stellar protocol: React, Node, SQL, C++",
        "Prototyping a mobile retail trading application with Ionic/Cordova/Angular."],
    date: {
        start: "11/2015",
        end: "06/2018"
    }
}, {
    company: "Finclusion Systems",
    jobTitle: "Blockchain engineer",
    duties: ["Exploring blockchain technologies and smart contracts for financial institutions: Ripple, Stellar, Ethereum, Eris, Open assets."],
    date: {
        start: "07/2015",
        end: "10/2015"
    }
},
{
    company: "Orwell Group, UK",
    jobTitle: "Full Stack Software engineer",
    duties: ["Defining specification and creating a minimum viable product for a real-time settlement and clearing system based on the Ripple protocol."],
    date: {
        start: "01/2015",
        end: "06/2015"
    }
}, {
    company: "Airbex.net",
    jobTitle: "CTO",
    duties: ["Airbex.net is a crypto-currency exchange, a web-based platform to buy and sell crypto-currencies such as Bitcoin and Litecoin. Airbex.net offers transparency by implementing a real-time proof of reserves which allow users to verify the assets and liabilities of the exchange."],
    date: {
        start: "04/2014",
        end: "12/2014"
    }
}, {
    company: "Amadeus",
    jobTitle: "Software engineer",
    duties: ["Develop software projects in a massively distributed air travel reservation system.",
        "Enhance and improve continuous development and overall software quality in an agile/lean environment."],
    date: {
        start: "04/2012",
        end: "03/2014"
    }
}, {
    company: "Telsey S.p.A",
    jobTitle: "Software engineer",
    duties: ["Created an algorithm to calibrate Wifi for maximising performance",
        "Managed the integration of Wimax and 3g USB dongle into ADSL and fibre access gateways.",
        "Developed an automated voice and fax call generator.",
        "Responsible for creating, developing and achieving high margin business for the company in the area of technological and service disruptions",
        "Design, implementation, test and maintenance of home internet gateway software stack, from the device driver to the application level."],
    date: {
        start: "01/2003",
        end: "09/2011"
    }
}, {
    company: "Netergy Microelectonics Ltd, UK",
    jobTitle: "Software engineer",
    duties: [
        "Design, implementation and validation of an embedded TCP/IP stack used in ADSL and fibre routers.",
        "Create penetration testing tools to harden security."],
    date: {
        start: "11/2000",
        end: "11/2002"
    }
}]);

const content = {
    basicInfo: {
        photo,
        firstName: "Frederic",
        lastName: "Heem",
        city: "London",
        email: "frederic.heem@gmail.com",
        jobTitle: "Lead Software Engineer",
        github: "github.com/fredericheem"
    },
    summary: "Lead full stack software engineer focusing on delivering innovative products. Interested in frontend, backend and deployment.",
    languages: [
        { name: "English", level: "Fluent" },
        { name: "French", level: "Mother tongue" },
        { name: "Italian", level: "Fluent" }
    ],
    educations: [
        {
            name: "Master of Industial Engineering",
            description: faker.lorem.word(),
            issuer: "ENSAM Paris Tech",
            endYear: "2000"
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
    experiences: experiences()
};

export default content