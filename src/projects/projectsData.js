import projectOne from "../assets/nftwebsite.png";
import projectTwo from "../assets/enhancedSystem.png";
import projectThree from "../assets/chatbot-min.jpeg";

const projects = {
  1: {
    title: "NFT Website",
    image: projectOne,
    description: (
      <>
        <p>
        This is a template of NFT website that I created in order to show the creation, buying, selling, and trading of non-fungible tokens (NFTs).
         It is easy to use and customize.
        </p>
      </>
    ),
    github: "https://github.com/ssdiagne1/NFT_market_website",
    demo: "https://nftonlinemarketplace.netlify.app/",
  },
  2: {
    title: "Enhanced Online Student Attendance System",
    image: projectTwo,
    description: (
      <>
        <p>
        The purpose of this web application is to facilitate school management by enabling teachers and administrators to efficiently monitor courses, sessions, and student attendance.
        </p>
      </>
    ),
    github: "https://github.com/sdiagne0/EnhancedOnlineStudentAttendanceSystem/tree/main",
    demo: "https://netlify.com",
  },
  3: {
    title: "Chatbot GPT",
    image: projectThree,
    description: (
      <>
        <p>
        The Chatbot GPT project revolves around harnessing the power of OpenAI's GPT-3.5 model,
        an advanced natural language processing (NLP) model capable of understanding context and generating human-like responses.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
};

export default projects;
