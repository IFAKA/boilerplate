import {
  RiFileUserLine,
  RiGithubLine,
  RiLinkedinBoxLine,
  RiMailLine,
} from "react-icons/ri"

export const contacts = [
  { href: "https://github.com/IFAKA", icon: <RiGithubLine size={19} /> },
  {
    href: "https://www.linkedin.com/in/faka/",
    icon: <RiLinkedinBoxLine size={20} />,
  },
  { href: "mailto:me@faka.dev", icon: <RiMailLine size={20} /> },
  { href: "/assets/Facundo Arenas CV.pdf", icon: <RiFileUserLine size={20} /> },
]
