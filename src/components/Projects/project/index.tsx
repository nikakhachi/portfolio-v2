import styles from "./styles.module.css";
import { Demo } from "./demo";
import { FC, useState } from "react";

interface ProjectProps {
  image: string;
  name: string;
  description: string;
  technologies: string[];
  index: number;
  slideshow: string[];
  client: string;
}

export const Project: FC<ProjectProps> = ({ image, name, description, technologies, index, slideshow, client }) => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <>
      <div className={`${styles.projectItem} ${index % 2 === 0 && styles.projectItemOdd}`}>
        <div className={styles.imgDiv}>
          <img src={image} alt="project" />
          <div className={styles.imgBackground}>
            <button disabled={name === "B Bot"} onClick={() => setIsDemoOpen(true)}>
              {slideshow.length === 1 ? "No Images" : "DEMO"}
            </button>
            {isDemoOpen && <Demo slideshow={slideshow} close={() => setIsDemoOpen(false)} />}
          </div>
        </div>
        <div className={styles.infoDiv}>
          <h5>
            {name} <span>({client})</span>
          </h5>
          <p>{description}</p>
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
