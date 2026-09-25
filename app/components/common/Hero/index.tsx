import { FC } from "react";
import styles from "./style.module.scss";

interface Props {}

const Hero: FC<Props> = ({}) => {
  return (
    <div className={styles.heroWrapper}>
      <section className={styles.hero}>
        <div className={styles.backgroundElements}>
          <div className={styles.decorativeImageWrapper}></div>
          <div className={styles.decorativeImageWrapper}></div>
        </div>
        <div className={styles.foregroundElements}>
          <div className={styles.headingWrapper}>
            <h2>Discover your</h2>
            <h1>
              One-Of-
              <br className={styles.mobileBreak} />
              A-Kind
            </h1>
            <h2>Handmade wardrobe holy grail.</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
