import styles from "./styles.module.css";
import { SocialList } from "../socialLinks";
import { FC, forwardRef } from "react";

interface ContactProps extends React.RefAttributes<HTMLDivElement> {}

export const Contact: FC<ContactProps> = forwardRef((_, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <h3 className={styles.title}>Get In Touch</h3>
      <hr />
      <p className={styles.description}>
        Need anything built, want to collaborate on project, or simply want to have a chat? Drop me an e-mail at{" "}
        <strong>
          <a target="_blank" rel="noreferrer" href="mailto:n.khachiashvili1@gmail.com">
            n.khachiashvili1@gmail.com
          </a>
        </strong>
        , or message me directly in{" "}
        <strong>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nika-khachiashvili/">
            LinkedIn
          </a>{" "}
        </strong>
        and I will reply to you soon!
      </p>
      <SocialList />
    </div>
  );
});
