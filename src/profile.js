import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaGit,
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaEnvelope,
  FaAws,
} from "react-icons/fa";
import {
  SiMui,
  SiTypescript,
  SiNextdotjs,
  SiOpenai,
  SiTailwindcss,
} from "react-icons/si";
import myPhoto from "./components/assets/profile.photo.webp";

const profile = {
  home: {
    avatarUrl: myPhoto,
    title: "Radovan Portfolio",
    role: "Frontend Developer | Open Source Enthusiast | Tech Innovator",
    description:
      "Welcome to my portfolio! I am a passionate frontend developer with a keen interest in open-source technologies and innovative solutions. Explore my projects and connect with me to discuss potential collaborations or opportunities.",
    buttonText: "Explore My Work",
    socialLinks: [
      { href: "https://github.com/Radovan7", icon: FaGithub },
      {
        href: "https://www.linkedin.com/in/radovan-scekic-406880264/",
        icon: FaLinkedin,
      },
      {
        href: "https://discord.com/users/1019683427034857492521021763073867822",
        icon: FaDiscord,
      },
    ],
  },
  about: {
    title: "About Me",
    description:
      "I am a passionate and experienced frontend developer with a profound knowledge of modern web technologies and a knack for crafting impactful solutions. With expertise in React, Next.js, and modern JavaScript frameworks, I specialize in creating responsive, user-friendly applications that deliver exceptional user experiences. My approach combines technical excellence with creative problem-solving, ensuring that every project I work on is not just functional, but also intuitive and engaging. I'm constantly learning and adapting to new technologies, staying at the forefront of web development trends to deliver cutting-edge solutions.",
  },
  skills: [
    { name: "JavaScript", Icon: FaJs, color: "#f7df1e" },
    { name: "React", Icon: FaReact, color: "#61dafb" },
    { name: "Node.js", Icon: FaNodeJs, color: "#339933" },
    { name: "CSS3", Icon: FaCss3Alt, color: "#264de4" },
    { name: "Git", Icon: FaGit, color: "#f05032" },
    { name: "Material-UI", Icon: SiMui, color: "#0081cb" },
    { name: "TypeScript", Icon: SiTypescript, color: "#007acc" },
    { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
    { name: "AWS", Icon: FaAws, color: "#232f3e" },
    { name: "OpenAI", Icon: SiOpenai, color: "#412991" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38b2ac" },
  ],
  projects: [
    {
      title: "Webbyra-sodermalm",
      description:
        "Responsive marketing agency website built with React, Node.js, and TailwindCSS.",
      link: "https://webbyrasodermalm.se/",
    },
    {
      title: "S2Bygg",
      description:
        "A modern and fully responsive website for a construction company, built with Next.js and styled using TailwindCSS. It showcases the company's services, portfolio, and contact information with a clean and professional design.",
      link: "https://s2bygg.com/",
    },
    {
      title: "User Posts",
      description:
        "A React app that fetches and displays user information and posts from the JSONPlaceholder API, allowing users to interact with posts and view user data.",
      link: "https://user-post-7ulrdecy5-radovans-projects-54af0169.vercel.app",
    },
  ],
  contact: {
    title: "Contact Me",
    description:
      "Whether you have a question or just want to say hello, I'd love to hear from you. Drop me a message below.",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    sendButton: "Send Message",
    connectTitle: "Connect with Me",
    links: [
      { href: "mailto:radosce0@gmail.com", icon: FaEnvelope },
      {
        href: "https://discord.com/users/1019683427034857492521021763073867822",
        icon: FaDiscord,
      },
      {
        href: "https://www.linkedin.com/in/radovan-scekic-406880264/",
        icon: FaLinkedin,
      },
      { href: "https://github.com/Radovan7", icon: FaGithub },
    ],
  },
};

export default profile;
