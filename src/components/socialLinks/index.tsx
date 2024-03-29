import styles from "./styles.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import YoutubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import Tooltip from "@mui/material/Tooltip";
import { FC } from "react";

const icons = [
  {
    title: "YouTube",
    component: <YoutubeIcon fontSize="large" />,
    url: "https://www.youtube.com/@nikakhachi",
  },
  {
    title: "LinkedIn",
    component: <LinkedInIcon fontSize="large" />,
    url: "https://www.linkedin.com/in/nika-khachiashvili/",
  },
  {
    title: "Telegram",
    component: <TelegramIcon fontSize="large" />,
    url: "https://t.me/nikakhachi",
  },
  {
    title: "Github",
    component: <GitHubIcon fontSize="large" />,
    url: "https://github.com/nikakhachi",
  },
  {
    title: "Email",
    component: <MailOutlineIcon fontSize="large" />,
    url: "mailto:n.khachiashvili1@gmail.com",
  },
];

export const SocialList: FC = () => {
  return (
    <ul className={styles.socialList}>
      {icons.map((item, index) => (
        <Tooltip key={index} title={item.title}>
          <li className={styles.socialListItem}>
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.component}
            </a>
          </li>
        </Tooltip>
      ))}
    </ul>
  );
};
