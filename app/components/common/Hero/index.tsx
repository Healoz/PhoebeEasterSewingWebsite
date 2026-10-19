import { FC } from "react";
import styles from "./style.module.scss";
import Button from "../Button";

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
          <div className={styles.textAndButton}>
            <p>
              Every piece made from op shop finds, upcycled into something you’d
              never find on Shein.
            </p>
            <Button>Shop my Depop</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
