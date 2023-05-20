import styles from "./main.module.css";
import { SocialList } from "../socialLinks";
import { SiTypescript } from "react-icons/si";
import { FC, forwardRef } from "react";
import { FaNodeJs, FaReact, FaAws } from "react-icons/fa";
import { SiSolidity } from "react-icons/si";

interface MainProps extends React.RefAttributes<HTMLDivElement> {}

export const Main: FC<MainProps> = forwardRef((_, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <h1 className={styles.name}>Nika Khachiashvili</h1>
      <p className={styles.description}>Experienced Full Stack Web2 Developer transitioning into Web3</p>
      <ul className={styles.iconList}>
        <li>
          <FaReact />
          <p>ReactJS</p>
        </li>
        <li>
          <SiTypescript />
          <p>Typescript</p>
        </li>
        <li>
          <SiSolidity />
          <p>Solidity</p>
        </li>
        <li>
          <FaNodeJs />
          <p>NodeJS</p>
        </li>
        <li>
          <FaAws />
          <p>AWS</p>
        </li>
      </ul>
      <hr />
      <SocialList />
    </div>
  );
});
