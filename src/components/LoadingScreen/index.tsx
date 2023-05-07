import { FC } from "react";
import { animated, TransitionFn } from "react-spring";
import styles from "./styles.module.css";

interface LoadingScreenProps {
  transition: TransitionFn<
    boolean,
    {
      opacity: number;
    }
  >;
}

export const LoadingScreen: FC<LoadingScreenProps> = ({ transition }) => {
  return (
    <>
      {transition((style, item) =>
        item ? (
          <animated.div style={style}>
            <div className={styles.container}>
              <div className={styles.loader}></div>
            </div>
          </animated.div>
        ) : null
      )}
    </>
  );
};
