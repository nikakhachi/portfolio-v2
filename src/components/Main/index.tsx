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
      <p className={styles.description}>
        Hi there! My name is Nika and I'm a <strong>Solidity Developer with a strong background in Full Stack development</strong>. I also
        have a <strong>YouTube channel</strong> where I talk about coding, career and personal growth.
      </p>
      <p className={styles.subDescription}>Welcome to my portfolio!</p>
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
