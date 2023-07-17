import styles from "./styles.module.css";
import { Demo } from "./demo";
import { FC, useState } from "react";
import { Dialog } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface ProjectProps {
  image: string;
  name: string;
  description: string;
  technologies: string[];
  index: number;
  slideshow: string[];
  client: string;
  demo: string | null;
  github: string | null;
  url: string | null;
}

export const Project: FC<ProjectProps> = ({ image, name, description, technologies, index, slideshow, client, demo, github, url }) => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isDemoVideoOpen, setIsDemoVideoOpen] = useState(false);

  return (
    <>
      <div className={`${styles.projectItem} ${index % 2 === 0 && styles.projectItemOdd}`}>
        <div className={styles.imgDiv}>
          <img src={image} alt="project" />
          <div className={styles.imgBackground} style={{ display: !slideshow.length ? "none" : "" }}>
            <button onClick={() => setIsDemoOpen(true)}>DEMO</button>
            {isDemoOpen && <Demo slideshow={[...slideshow]} close={() => setIsDemoOpen(false)} />}
          </div>
        </div>
        <div className={styles.infoDiv}>
          <h5>
            {name} <span>({client}) </span>
          </h5>
          {url && (
            <div className={styles.linkDiv}>
              <a
                target="_blank"
                rel="noreferrer"
                style={{ display: "flex", gap: "0.1rem", alignItems: "center", color: "white" }}
                href={url}
              >
                View Site
                <VisibilityIcon />
              </a>
            </div>
          )}
          <p>{description}</p>
          <div className={styles.linkDiv}>
            {github && (
              <a className={styles.githubLink} target="_blank" rel="noreferrer" style={{ color: "white" }} href={github}>
                <GitHubIcon />
              </a>
            )}
            {demo && (
              <>
                <Dialog open={isDemoVideoOpen} onClose={() => setIsDemoVideoOpen(false)}>
                  <video src={demo} controls autoPlay />
                </Dialog>
                <p>
                  <button className={styles.demoBtn} onClick={() => setIsDemoVideoOpen(true)}>
                    Demo Video
                  </button>
                </p>
              </>
            )}
          </div>
          <ul>
            {technologies.map((technology, index) => (
              <li key={index}>{technology}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
