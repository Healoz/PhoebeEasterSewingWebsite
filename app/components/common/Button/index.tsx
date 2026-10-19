import { ReactNode } from "react";
import styles from "./style.module.scss";

interface Props {
  href?: string;
  children: ReactNode;
}

const Button = ({ href, children }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
    >
      {children}
    </a>
  );
};

export default Button;
