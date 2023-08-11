import styles from "./styles.module.css";
import { SocialList } from "../socialLinks";
import { FC, forwardRef } from "react";

interface ContactProps extends React.RefAttributes<HTMLDivElement> {}

export const Contact: FC<ContactProps> = forwardRef((_, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <h3 className={styles.title}>Contact Me</h3>
      <hr />
      <p className={styles.description}>
        Want to discuss a project, collaborate, or simply have a chat? <br /> Hit me up on my{" "}
        <strong>
          <a target="_blank" rel="noreferrer" href="https://t.me/nikakhachi">
            Telegram
          </a>
        </strong>
        , and I'll get back to you promptly. <br />
        You can also reach out to me via any social medias listed below 👇
      </p>
      <SocialList />
    </div>
  );
});
