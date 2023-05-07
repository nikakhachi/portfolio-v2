import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { FC } from "react";
import styles from "./styles.module.css";

interface ScrollUpProps {
  scrollToTop: () => void;
}

export const ScrollUp: FC<ScrollUpProps> = ({ scrollToTop }) => {
  return (
    <>
      <p onClick={scrollToTop} className={styles.scrollUp}>
        <KeyboardArrowUpIcon fontSize="inherit" />
      </p>
    </>
  );
};
