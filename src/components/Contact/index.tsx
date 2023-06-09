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
        Want to discuss a project, collaborate, or simply have a chat? I'm just an email away! Drop me a line at{" "}
        <strong>
          <a target="_blank" rel="noreferrer" href="mailto:n.khachiashvili1@gmail.com">
            n.khachiashvili1@gmail.com
          </a>
        </strong>
        ,and I'll get back to you promptly. <br />
        You can also connect with me directly on{" "}
        <strong>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nika-khachiashvili/">
            LinkedIn
          </a>{" "}
        </strong>
        for a quick conversation.
      </p>
      <SocialList />
    </div>
  );
});
