import styles from "./styles.module.css";
import { ScrollUp } from "../ScrollUp";
import { FC } from "react";

interface NavigationProps {
  scrolls: {
    scrollToContact: () => void;
    scrollToProjects: () => void;
    scrollToTestimonials: () => void;
    scrollToAbout: () => void;
    scrollToPartnerships: () => void;
  };
  scrollPosition: number;
}

export const Navigation: FC<NavigationProps> = ({ scrolls, scrollPosition }) => {
  return (
    <div className={styles.arrowDown}>
      {scrollPosition > 0.14 && <ScrollUp scrollToTop={scrolls.scrollToAbout} />}
      <ul className={styles.list}>
        <li className={scrollPosition <= 0.14 ? styles.activeItem : "nonActive"} onClick={scrolls.scrollToAbout}>
          About
        </li>
        <li className={scrollPosition <= 0.5 && scrollPosition > 0.14 ? styles.activeItem : "nonActive"} onClick={scrolls.scrollToProjects}>
          Projects
        </li>
        <li
          className={scrollPosition < 0.7 && scrollPosition > 0.5 ? styles.activeItem : "nonActive"}
          onClick={scrolls.scrollToTestimonials}
        >
          Testimonials
        </li>
        <li
          className={scrollPosition < 0.93 && scrollPosition > 0.7 ? styles.activeItem : "nonActive"}
          onClick={scrolls.scrollToPartnerships}
        >
          Partnerships
        </li>
        <li className={scrollPosition >= 0.93 ? styles.activeItem : "nonActive"} onClick={scrolls.scrollToContact}>
          Contact
        </li>
      </ul>
    </div>
  );
};
