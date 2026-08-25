import styles from "./style.module.scss";

interface Props {
  href: string;
}

const DepopButton = ({ href }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
    >
      View on Depop
    </a>
  );
};

export default DepopButton;
