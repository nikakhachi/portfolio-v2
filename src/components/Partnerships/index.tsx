import styles from "./styles.module.css";
import { FC, forwardRef } from "react";
import partnerships from "../../data/partnerships";

interface PartnershipsProps extends React.RefAttributes<HTMLDivElement> {}

export const Partnerships: FC<PartnershipsProps> = forwardRef((_, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <h3 className={styles.title}>Partnerships</h3>
      <hr />
      <div className={styles.partnershipsContainer}>
        {partnerships.map((partnership) => (
          <div className={styles.imageDiv} key={partnership.name}>
            <a href={partnership.link} target="_blank" rel="noreferrer">
              <img src={partnership.photo} alt={partnership.name} />
            </a>
          </div>
        ))}
      </div>
      <p className={styles.text}>And more anonymous companies/projects</p>
    </div>
  );
});
