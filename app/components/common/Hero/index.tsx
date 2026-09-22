import { FC } from "react";
import styles from "./style.module.scss";

interface Props {}

const Hero: FC<Props> = ({}) => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundElements}>
        <div className={styles.decorativeImageWrapper}></div>
        <div className={styles.decorativeImageWrapper}></div>
      </div>
      <div className={styles.foregroundElements}>
        <h2>Discover your</h2>
        <h1>One-Of-A-Kind</h1>
        <h2>Handmade wardrobe holy grail.</h2>
      </div>
    </section>
  );
};

export default Hero;
