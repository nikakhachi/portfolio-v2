import styles from "./main.module.css";
import { SocialList } from "../socialLinks";
import { FC, forwardRef } from "react";
import { FaNodeJs, FaReact, FaEthereum } from "react-icons/fa";
import { SiSolidity, SiTypescript } from "react-icons/si";

interface MainProps extends React.RefAttributes<HTMLDivElement> {}

export const Main: FC<MainProps> = forwardRef((_, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <h1 className={styles.name}>Nika Khachiashvili</h1>
      <p className={styles.occupation}>
        <strong>Software Developer</strong>
      </p>
      <p className={styles.description}>
        From architectural design to implementation and successful delivery, I have a proven track record of developing high-quality
        software solutions for diverse organizations.
      </p>
      <p className={styles.subDescription}>
        I also run a <strong>YouTube channel</strong> where I talk about coding, career and personal growth.
      </p>
      <ul className={styles.iconList}>
        <li>
          <SiSolidity />
          <p>Solidity</p>
        </li>
        <li>
          <FaEthereum />
          <p>Ethereum</p>
        </li>
        <li>
          <FaNodeJs />
          <p>NodeJS</p>
        </li>
        <li>
          <SiTypescript />
          <p>Typescript</p>
        </li>
        <li>
          <FaReact />
          <p>ReactJS</p>
        </li>
      </ul>
      <hr />
      <SocialList />
    </div>
  );
});
