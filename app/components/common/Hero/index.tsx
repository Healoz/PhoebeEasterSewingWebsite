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
      <div className={styles.foregroundElements}></div>
    </section>
  );
};

export default Hero;
