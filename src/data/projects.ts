export enum ProjectType {
  WEB2,
  WEB3,
}

const projects = {
  web3: [
    {
      name: "AI-Minted",
      client: "Personal",
      description: `Connect your wallet, generate AI-powered images, and mint your favorites as NFTs. Unleash your creativity 
          with this intuitive dApp, combining cutting-edge AI technology with seamless blockchain integration. 
          Elevate your digital art collection and become part of a vibrant community of artists and collectors.`,
      image: "assets/projects/ainft/1.png",
      slideshow: ["assets/projects/ainft/1.png"],
      technologies: ["Solidity", "Hardhat", "NextJS"],
      type: ProjectType.WEB3,
    },
    {
      name: "SecureTransaction",
      client: "Personal",
      description: `The dApp is enabling users to initiate escrows for their transactions. Intermediary agents handle escrow initiation, 
        cancellation, and rejection. Agents receive a fee from successful escrows and everyone can apply to become an agent once they
        have been approved by the smart contract owner.`,
      image: "assets/projects/escrow/1.png",
      slideshow: ["assets/projects/escrow/1.png"],
      technologies: ["Solidity", "Hardhat", "ReactJS"],
      type: ProjectType.WEB3,
    },
    {
      name: "Chakrulo",
      client: "Startup",
      description: `Chakrulo is a unique platform for musicians and audio enthusiasts seeking innovative ways to explore sound. 
        It transforms audio into captivating visual art, resembling a nature-inspired Eye with a distinctive color pattern. 
        These patterns can be minted as NFTs, creating a fusion of audio and visual creativity.`,
      image: "assets/projects/ch/1.png",
      slideshow: [
        "assets/projects/ch/1.png",
        "assets/projects/ch/2.png",
        "assets/projects/ch/3.png",
        "assets/projects/ch/4.png",
        "assets/projects/ch/5.png",
      ],
      technologies: ["ReactJS", "ThreeJS", "NodeJS"],
      type: ProjectType.WEB3,
    },
  ],
  web2: [
    {
      name: "Salescoach",
      client: "Insurance Company",
      description:
        "Designed for quick onboarding and teaching new salespersons how to sell by displaying them different topics of sales in a pre-recorded format that is read by an avatar. Trainees can submit their recordings and argumentations on the topic. Afterward, the mentor can let them pass or decline them and give them a feedback. The topics are controlled and updated from an admin panel.",
      image: "assets/projects/sc/1.png",
      slideshow: [
        "assets/projects/sc/1.png",
        "assets/projects/sc/2.png",
        "assets/projects/sc/3.png",
        "assets/projects/sc/4.png",
        "assets/projects/sc/5.png",
        "assets/projects/sc/6.png",
        "assets/projects/sc/7.png",
        "assets/projects/sc/8.png",
      ],
      technologies: ["ReactJS", "ThreeJS", "NodeJS", "PostgreSQL"],
      type: ProjectType.WEB2,
    },
    {
      name: "Traffic Analysis",
      client: "City Hall",
      description:
        "App where authorized users can get the car information on any Tbilisi street camera at a selected time. Their average velocities and full routes across the town with visualization and statistics.",
      image: "assets/projects/ta/TA.jpg",
      slideshow: ["assets/projects/ta/TA.jpg", "assets/projects/ta/TA2.jpg", "assets/projects/ta/TA3.jpg"],
      technologies: ["ReactJS", "DeckGL", "NodeJS", "DynamoDB"],
      type: ProjectType.WEB2,
    },
    {
      name: "Counter Disinformation",
      client: "USAID",
      description:
        "Platform where users can track and search specific entities, individuals, their shares in companies and other public information. Getting real-time notifications on any change. All data gathered in one place.",
      image: "assets/projects/cd/CD.jpg",
      slideshow: [
        "assets/projects/cd/CD.jpg",
        "assets/projects/cd/CD2.jpg",
        "assets/projects/cd/CD3.jpg",
        "assets/projects/cd/CD4.png",
        "assets/projects/cd/CD5.png",
      ],
      technologies: ["ReactJS", "Force-Graph", "NodeJS", "SocketIO", "Neo4j", "PostgreSQL", "S3", "SQS"],
      type: ProjectType.WEB2,
    },
    {
      name: "Mention Analytics",
      client: "Independent Agency",
      description:
        "The platform enables brands and agencies to monitor the web and social media to listen to the posts or articles related to their needs (keywords, events, etc.). The data update on the platform happens in real-time, and clients are notified whenever web or/and social media have new mentions of the client's requiremenets.",
      image: "assets/projects/mm/1.png",
      slideshow: ["assets/projects/mm/1.png", "assets/projects/mm/2.png", "assets/projects/mm/3.png", "assets/projects/mm/4.png"],
      technologies: ["AngularJS", "Python", "Scrapy", "MongoDB"],
      type: ProjectType.WEB2,
    },
    {
      name: "Golden Gate",
      client: "Law Firm",
      description: "The platform, where users can create legal documents, forms and contracts and print or download them",
      image: "assets/projects/goldenGate/GG.png",
      slideshow: [
        "assets/projects/goldenGate/GG.png",
        "assets/projects/goldenGate/GG2.png",
        "assets/projects/goldenGate/GG3.png",
        "assets/projects/goldenGate/GG4.png",
      ],

      technologies: ["ReactJS", "TypeScript"],
      type: ProjectType.WEB2,
    },
    {
      name: "B Bot",
      client: "Bank owned Insurance Company",
      description: "Messenger bot. Serves as a number 1 insurance bot in Georgia.",
      image: "assets/projects/bbot/BB.jpeg",
      slideshow: ["assets/projects/bbot/BB.jpeg"],
      technologies: ["NodeJS", "Botkit", "PostgreSQL"],
      type: ProjectType.WEB2,
    },
  ],
};

export default projects;
