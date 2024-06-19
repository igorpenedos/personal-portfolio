interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  points: string[];
  logo: string;
}

export const experiences: Experience[] = [
  {
    company: "Coveo",
    position: "Software Developer",
    startDate: "May 2023",
    endDate: "August 2023",
    location: "Montreal, QC",
    points: [
      "Worked with major clients to improve search relevance by developing tailored enterprise search solutions for major clients such as LG and Metro.",
      "Built web application to visualize search query results based on users’ regional preferences and client’s promotional data leveraging AI-powered search engine.",
      "Created an Azure DevOps deployment pipeline to Azure Marketplace which decreased the deployment of crucial internal tools by 90%.",
    ],
    logo: "coveo_logo.jpg",
  },
  {
    company: "Flybits",
    position: "Frontend Developer",
    startDate: "May 2022",
    endDate: "December 2022",
    location: "Toronto, ON",
    points: [
      "Maintained & modernized 4+ TypeScript React projects by refactoring and developing new components.",
      "Implemented a marketing dashboard allowing companies to update marketing strategies enabling clients to receive promotional content based on multiple variables.",
      "Built pagination component to enable server-side communication with the Golang backend based on React Hooks.",
      "Created Golang endpoint to provide file uploading to MongoDB Database based on an identifier.",
    ],
    logo: "flybits_logo.jpg",
  },
  {
    company: "GetQuorum",
    position: "Junior Developer",
    startDate: "January 2022",
    endDate: "April 2022",
    location: "Toronto, ON",
    points: [
      "Developed a condo owner dashboard that eases the visualization of voting metrics using Vue.js, Node, Express, PostgreSQL, and Docker.",
      "Created role-based meeting statuses allowing for smoother annual general meetings through CRUD endpoints.",
      "Constructed statistical data for financial reports along with building a dashboard to showcase the metrics.",
    ],
    logo: "getquorum_logo.jpg",
  },
  {
    company: "Interac Corporation",
    position: "Software Developer",
    startDate: "September 2021",
    endDate: "December 2021",
    location: "Toronto, ON",
    points: [
      "Implemented a scalable and secure onboarding service for merchants using Nest.js, Node.js and React.js.",
      "Converted merchant onboarding services from single-form acquisition into a dynamic form service through updating Redux state management.",
      "Performed database migration from Oracle OCI to Microsoft SQL, ensuring data integrity.",
    ],
    logo: "interac_corp_logo.jpg",
  },
];
