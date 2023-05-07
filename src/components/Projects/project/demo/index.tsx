import styles from "./styles.module.css";
import SimpleImageSlider from "react-simple-image-slider";
import { FC, useEffect, useState } from "react";

interface DemoProps {
  close: () => void;
  slideshow: string[];
}

export const Demo: FC<DemoProps> = ({ close, slideshow }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const body = document.querySelector("body");
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    if (body) {
      body.style.overflowY = "hidden";

      window.addEventListener("resize", handleResize);
    }
    return () => {
      if (body) {
        body.style.overflowY = "scroll";
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.sliderContainer}>
        <div className={styles.closeDiv} onClick={close}>
          <p>X</p>
        </div>
        <SimpleImageSlider
          width={screenWidth >= 900 ? screenWidth / 1.5 : screenWidth / 1.1}
          height={screenWidth >= 900 ? screenWidth / 3 : screenWidth / 2}
          images={slideshow.map((item) => ({ url: item }))}
          showNavs={true}
          navStyle={2}
        />
      </div>
    </div>
  );
};
