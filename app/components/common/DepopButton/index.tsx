"use client";

import { track } from "@vercel/analytics";
import styles from "./style.module.scss";

interface Props {
  href: string;
}

const DepopButton = ({ href }: Props) => {
  const handleClick = () => {
    track("depop_click");
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={styles.button}
    >
      View on Depop
    </a>
  );
};

export default DepopButton;
