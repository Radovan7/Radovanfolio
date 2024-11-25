import { 
  FaJs, FaReact, FaNodeJs, FaCss3Alt, FaGit, FaGithub, 
  FaLinkedin, FaDiscord, FaEnvelope 
} from 'react-icons/fa';
import { 
  SiMui, SiTypescript, SiNextdotjs 
} from 'react-icons/si';
import myPhoto from './components/assets/profile.photo.jpg';


const profile = {
    home: {
        avatarUrl: myPhoto,
        title: 'Radovan Portfolio',
        role: 'Frontend Developer | Open Source Enthusiast | Tech Innovator',
        description: 'Welcome to my portfolio! I am a passionate frontend developer with a keen interest in open-source technologies and innovative solutions. Explore my projects and connect with me to discuss potential collaborations or opportunities.',
        buttonText: 'Explore My Work',
        socialLinks: [
          { href: 'https://github.com/Radovan7', icon: FaGithub }, 
          { href: 'https://www.linkedin.com/in/radovan-scekic-406880264/', icon: FaLinkedin },
          { href: 'https://discord.com/users/1019683427034857492521021763073867822', icon: FaDiscord },
        ],
    },
    about: {
        title: 'About Me',
        description: 'I am a passionate and experienced frontend developer with a profound knowledge of modern web technologies and a knack for crafting impactful solutions.',
    },
    skills: [
        { name: 'JavaScript', color: '#f7df1e', Icon: FaJs },
        { name: 'React', color: '#61dafb', Icon: FaReact },
        { name: 'Node.js', color: '#68a063', Icon: FaNodeJs },
        { name: 'CSS', color: '#264de4', Icon: FaCss3Alt },
        { name: 'Material UI', color: '#35c2e5', Icon: SiMui },
        { name: 'TypeScript', color: '#3178c6', Icon: SiTypescript },
        { name: 'Next.js', color: '#000000', Icon: SiNextdotjs },
        { name: 'Git', color: '#f05032', Icon: FaGit },  
    ],
    projects: [
        {
            title: 'Blogged',
            description: 'Blog post sharing page made using React Redux',
            link: 'https://0memo07.github.io/Blogged/',
        },
        {
            title: 'URL-Seeker',
            description: 'An advanced dorking tool to discover URLs associated with the target domain',
            link: 'https://github.com/0MeMo07/URL-Seeker',
        },
        {
            title: 'gpt-4-free-chat',
            description: 'A GPT GLM-4 free chat AI built with React',
            link: 'https://0memo07.github.io/gpt-4-free-chat/',
        },
    ],
    contact: {
        title: "Contact Me",
        description: "Whether you have a question or just want to say hello, I’d love to hear from you. Drop me a message below.",
        nameLabel: "Name",
        emailLabel: "Email",
        messageLabel: "Message",
        sendButton: "Send Message",
        connectTitle: "Connect with Me",
        links: [
            { href: "mailto:radosce0@gmail.com", icon: FaEnvelope },
            { href: "https://discord.com/users/1019683427034857492521021763073867822", icon: FaDiscord },
            { href: "https://www.linkedin.com/in/radovan-scekic-406880264/", icon: FaLinkedin },
            { href: "https://github.com/Radovan7", icon: FaGithub }  
        ]
    },
};
  
export default profile;
